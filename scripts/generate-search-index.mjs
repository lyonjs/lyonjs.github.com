import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const MEETUP_GQL_URL = 'https://www.meetup.com/gql2';
const LYONJS_MEETUP_ID = 18305583;

const pastEventsQuery = `
  query meetupEvents($id: ID!) {
    group(id: $id) {
      events(first: 1000, status: PAST, sort: ASC) {
        edges {
          node {
            id
            title
            description
            eventUrl
            dateTime
          }
        }
      }
    }
  }
`;

const nextEventsQuery = `
  query meetupEvents($id: ID!) {
    group(id: $id) {
      events {
        edges {
          node {
            id
            title
            description
            eventUrl
            dateTime
          }
        }
      }
    }
  }
`;

async function fetchFromMeetup(query) {
  const response = await fetch(MEETUP_GQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { id: LYONJS_MEETUP_ID } }),
  });

  if (!response.ok) {
    throw new Error(`Meetup API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

function slugify(messageToSlug) {
  const accentChars = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
  const withoutAccent = 'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
  const regExpAccent = new RegExp(accentChars.split('').join('|'), 'g');

  return messageToSlug
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(regExpAccent, (char) => withoutAccent.charAt(accentChars.indexOf(char)))
    .replace(/&/g, '-and-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

function slugEventTitle(event) {
  return `${slugify(event.title)}-e_${event.id}`;
}

async function loadDataOverride() {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const dataOverridePath = resolve(__dirname, '../data/data-override.ts');

  const { readFileSync } = await import('node:fs');
  const content = readFileSync(dataOverridePath, 'utf-8');

  const overrides = {};
  const entryRegex = /'(https:\/\/www\.meetup\.com\/lyonjs\/events\/[^']+)'/g;
  let match;

  while ((match = entryRegex.exec(content)) !== null) {
    const url = match[1];
    const entryStart = match.index;

    // Find the matching closing brace for this entry
    let braceDepth = 0;
    let entryContent = '';
    let started = false;

    for (let i = entryStart; i < content.length; i++) {
      if (content[i] === '{') {
        if (braceDepth === 0) started = true;
        braceDepth++;
      }
      if (started) entryContent += content[i];
      if (content[i] === '}') {
        braceDepth--;
        if (braceDepth === 0 && started) break;
      }
    }

    const override = {};

    // Extract sponsor name
    const sponsorMatch = entryContent.match(/sponsor:\s*(\w+)/);
    if (sponsorMatch) {
      override.sponsorName = sponsorMatch[1];
    }

    // Extract talks
    const talksMatch = entryContent.match(/talks:\s*\[([\s\S]*?)\]\s*(?:,\s*}|,?\s*$|\])/);
    if (talksMatch) {
      const talksContent = talksMatch[1];
      const talks = [];

      // Match individual talk objects
      const talkRegex = /\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}/g;
      let talkMatch;

      while ((talkMatch = talkRegex.exec(talksContent)) !== null) {
        const talkStr = talkMatch[0];
        const titleMatch = talkStr.match(/title:\s*['"`]([^'"`]*?)['"`]/);
        if (!titleMatch) continue;

        const talk = { title: titleMatch[1] };

        // Extract speakers
        const speakersSection = talkStr.match(/speakers:\s*\[([\s\S]*?)\]/);
        if (speakersSection) {
          const speakers = [];
          const nameRegex = /name:\s*['"`]([^'"`]*?)['"`]/g;
          let nameMatch;
          while ((nameMatch = nameRegex.exec(speakersSection[1])) !== null) {
            speakers.push({ name: nameMatch[1] });
          }
          if (speakers.length > 0) talk.speakers = speakers;
        }

        talks.push(talk);
      }

      if (talks.length > 0) override.talks = talks;
    }

    if (Object.keys(override).length > 0) {
      overrides[url] = override;
    }
  }

  // Resolve sponsor names to actual names from sponsors.ts
  const sponsorsPath = resolve(__dirname, '../data/sponsors.ts');
  const sponsorsContent = readFileSync(sponsorsPath, 'utf-8');
  const sponsorNames = {};
  const sponsorNameRegex = /export const (\w+):\s*Sponsor\s*=\s*\{[^}]*name:\s*'([^']*)'/g;
  let sponsorMatch;
  while ((sponsorMatch = sponsorNameRegex.exec(sponsorsContent)) !== null) {
    sponsorNames[sponsorMatch[1]] = sponsorMatch[2];
  }

  for (const url of Object.keys(overrides)) {
    if (overrides[url].sponsorName) {
      overrides[url].sponsorName = sponsorNames[overrides[url].sponsorName] || overrides[url].sponsorName;
    }
  }

  return overrides;
}

async function main() {
  console.log('Generating search index...');

  const [pastResult, nextResult, overrides] = await Promise.all([
    fetchFromMeetup(pastEventsQuery),
    fetchFromMeetup(nextEventsQuery),
    loadDataOverride(),
  ]);

  const pastEvents = pastResult?.data?.group?.events?.edges?.map((e) => e.node) || [];
  const nextEvents = nextResult?.data?.group?.events?.edges?.map((e) => e.node) || [];
  const allEvents = [...pastEvents, ...nextEvents];

  const index = allEvents.map((event) => {
    const override = overrides[event.eventUrl] || {};
    const description = (event.description || '').replace(/<[^>]*>/g, '').slice(0, 200);

    const entry = {
      id: event.id,
      title: event.title,
      dateTime: event.dateTime,
      slug: slugEventTitle(event),
      description,
    };

    if (override.talks) entry.talks = override.talks;
    if (override.sponsorName) entry.sponsor = override.sponsorName;

    return entry;
  });

  const __dirname = dirname(fileURLToPath(import.meta.url));
  const outputPath = resolve(__dirname, '../public/search-index.json');
  writeFileSync(outputPath, JSON.stringify(index));

  console.log(`Search index generated: ${index.length} events written to ${outputPath}`);
}

main().catch((err) => {
  console.error('Failed to generate search index:', err);
  process.exit(1);
});

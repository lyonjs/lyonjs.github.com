import * as sponsors from '../data/sponsors';
import * as partners from '../data/partners';
import React from 'react';
import { HomeHero } from '../modules/home/HomeHero';
import { SeePastEvents } from '../modules/home/Home.components';
import { Sponsors } from '../modules/sponsors/Sponsors';
import { NextEvent } from '../modules/home/NextEvent';
import { Numbers } from '../modules/home/Numbers';
import { LastReplays } from '../modules/home/LastReplays';
import { Announcement } from '../modules/home/Announcement';

export const revalidate = 3600;
export default function Home() {
  return (
    <main>
      <HomeHero />
      <Announcement title="LyonJS 💯" link={{ url: '/lyonjs-100', label: "Plus d'info" }}>
        <div className="flex flex-col" style={{ gap: '20px' }}>
          <p>LyonJS fête sa 100ème édition !</p>
          <p>Pour l'occasion, nous vous préparons une journée de conférence le 21 février 2025 à l'UGC de Part Dieu</p>
        </div>
      </Announcement>
      <NextEvent />
      <SeePastEvents />
      <Numbers />
      <LastReplays />
      <Sponsors title="Sponsors" sponsors={sponsors} withLink />
      <Sponsors title="Partneraires et Conférences" sponsors={partners} />
    </main>
  );
}

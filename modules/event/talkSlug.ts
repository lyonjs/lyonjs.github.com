import type { Talk } from './types';
import { slugify } from '../seo/slugify';

export const slugTalkTitle = (talk: Talk) => slugify(talk.title);

export const findTalkBySlug = (talks: Talk[], slug: string) => talks.find((talk) => slugTalkTitle(talk) === slug);

import * as sponsors from '../data/sponsors';
import * as partners from '../data/partners';
import React from 'react';
import { HomeHero } from '../modules/home/HomeHero';
import { SeePastEvents } from '../modules/home/Home.components';
import { Sponsors } from '../modules/sponsors/Sponsors';
import { NextEvent } from '../modules/home/NextEvent';
import { Numbers } from '../modules/home/Numbers';
import { LastReplays } from '../modules/home/LastReplays';
import { HomeAnnouncement } from '../modules/lyonjs100/HomeAnnouncement';

export const revalidate = 3600;

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeAnnouncement />
      <NextEvent />
      <SeePastEvents />
      <Numbers />
      <LastReplays />
      <Sponsors title="Sponsors" sponsors={sponsors} withLink />
      <Sponsors title="Partneraires et Conférences" sponsors={partners} />
    </main>
  );
}

import React from 'react';
import { HomeHero } from '../modules/home/HomeHero';
import { SeePastEvents } from '../modules/home/Home.components';
import { Sponsors } from '../modules/sponsors/Sponsors';
import { NextEvent } from '../modules/home/NextEvent';
import { Numbers } from '../modules/home/Numbers';
import { LastReplays } from '../modules/home/LastReplays';

export const revalidate = 3600;
export default function Home() {
  return (
    <main>
      <HomeHero />
      <NextEvent />
      <SeePastEvents />
      <Numbers />
      <LastReplays />
      <Sponsors />
    </main>
  );
}

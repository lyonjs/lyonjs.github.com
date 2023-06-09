import React from 'react';
import { HomeHero } from '../modules/home/HomeHero';
import { SeePastEvents } from '../modules/home/Home.components';
import { Sponsors } from '../modules/sponsors/Sponsors';
import { NextEvent } from '../modules/home/NextEvent';

export const revalidate = 3600;
export default function Home() {
  return (
    <main>
      <HomeHero />
      <NextEvent />
      <SeePastEvents />
      <Sponsors />
    </main>
  );
}

import React from 'react';
import { HomeHero } from '../modules/home/HomeHero';
import { SeePastEvents } from '../modules/home/Home.components';
import { Sponsors } from '../modules/sponsors/Sponsors';
import { NextEvent } from '../modules/home/NextEvent';

export const revalidate = 300;
export default function Home() {
  return (
    <main>
      <HomeHero />
      {/* @ts-expect-error Async Server Component */}
      <NextEvent />
      <SeePastEvents />
      <Sponsors />
    </main>
  );
}

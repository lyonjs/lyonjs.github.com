'use client';

import { HeroTitle } from '../hero/HeroTitle';
import { HeroButtonsContainer } from '../hero/HeroButtonsContainer';
import { ButtonLink } from '../atoms/button/Button';
import { People } from '../icons/People';
import { Edit } from '../icons/Edit';
import { Hero } from '../hero/Hero';
import React from 'react';

export const HomeHero = () => {
  return (
    <Hero>
      <HeroTitle title="Meetup" strong="LyonJS" />
      <p>
        La communauté lyonnaise
        <br />
        autour de JavaScript et de son écosystème
      </p>

      <HeroButtonsContainer>
        <ButtonLink
          href="https://www.meetup.com/fr-FR/lyonjs/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <People /> Rejoindre le meetup
        </ButtonLink>
        <ButtonLink
          variant="secondary"
          href="https://conference-hall.io/lyon-js-meetup"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Edit /> Proposer un sujet
        </ButtonLink>
      </HeroButtonsContainer>
    </Hero>
  );
};

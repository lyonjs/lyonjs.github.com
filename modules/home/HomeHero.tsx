'use client';

import { HeroTitle } from '../hero/HeroTitle';
import { HeroButtonsContainer } from '../hero/HeroButtonsContainer';
import { ButtonLink } from '../atoms/button/Button';
import { People } from '../icons/People';
import { Edit } from '../icons/Edit';
import { Hero } from '../hero/Hero';
import React from 'react';
import va from '@vercel/analytics';

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
          onClick={() => va.track('JoinMeetupGroup')}
        >
          <People /> Rejoindre le meetup
        </ButtonLink>
        <ButtonLink
          variant="secondary"
          href="https://bit.ly/lyonjs-cfp"
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => va.track('SubmitCFP')}
        >
          <Edit /> Proposer un sujet
        </ButtonLink>
      </HeroButtonsContainer>
    </Hero>
  );
};

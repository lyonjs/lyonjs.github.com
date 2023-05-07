import type { NextPage } from 'next';
import React from 'react';
import { Hero } from '../modules/hero/Hero';
import { HeroTitle } from '../modules/hero/HeroTitle';
import { ButtonLink } from '../modules/atoms/button/Button';
import { HeroButtonsContainer } from '../modules/hero/HeroButtonsContainer';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <main>
        <Hero>
          <HeroTitle title="Erreur 404" strong="Page non trouvée" />
          <p>La page que vous cherchez ne peut être trouvée.</p>
          <HeroButtonsContainer>
            <ButtonLink href="/">Retourner à l&apos;accueil</ButtonLink>
          </HeroButtonsContainer>
        </Hero>
      </main>
    </>
  );
};

export default NotFoundPage;

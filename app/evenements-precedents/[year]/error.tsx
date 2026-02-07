'use client';

import { Hero } from '../../../modules/hero/Hero';
import { HeroTitle } from '../../../modules/hero/HeroTitle';
import { HeroButtonsContainer } from '../../../modules/hero/HeroButtonsContainer';
import { ButtonLink } from '../../../modules/atoms/button/Button';

export default function PastEventsError() {
  return (
    <main>
      <Hero>
        <HeroTitle title="Oups !" strong="Impossible de charger les événements" />
        <p>Une erreur est survenue lors du chargement. Réessayez dans quelques instants.</p>
        <HeroButtonsContainer>
          <ButtonLink href="/">Retourner à l&apos;accueil</ButtonLink>
        </HeroButtonsContainer>
      </Hero>
    </main>
  );
}

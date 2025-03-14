import { H1 } from '../../../modules/atoms/remark/Titles';
import React from 'react';
import { Metadata } from 'next';
import { PastEvents } from './pastEvents';

export const revalidate = 3600;
const DEFAULT_YEAR = `${new Date().getFullYear()}`;

export default async function PastEventsPage({ params }: { params: Promise<{ year?: string }> }) {
  const { year = DEFAULT_YEAR } = await params;

  return (
    <main>
      <H1>Évènements précédents</H1>
      <PastEvents year={year}></PastEvents>
    </main>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ year?: string }> }): Promise<Metadata> {
  const { year = DEFAULT_YEAR } = await params;
  const title = `LyonJS | Évènements ${year}`;
  const description = `Liste des évènements LyonJS de l'année ${year}, meetup, apéros, conférences et rassemblement, retrouver tous les liens depuis notre création.`;

  return {
    title,
    description,
    twitter: {
      title,
      description,
    },
    openGraph: {
      title,
      description,
    },
  };
}

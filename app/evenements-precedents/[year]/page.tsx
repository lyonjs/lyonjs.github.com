import { H1 } from '../../../modules/atoms/remark/Titles';
import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { PastEvents } from './pastEvents';

export const revalidate = 3600;

export default async function PastEventsPage({ params: { year } }: { params: { year: string } }) {
  return (
    <main>
      <H1>Évènements précédents</H1>

      <Suspense fallback={<div style={{ marginTop: '56px' }}>Chargement...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <PastEvents year={year}></PastEvents>
      </Suspense>
    </main>
  );
}

export async function generateMetadata({ params: { year } }: { params: { year: string } }): Promise<Metadata> {
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

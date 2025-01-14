import { Speaker } from '../../data/lyonjs100-speakers';
import React from 'react';
import styles from './Talk.module.css';
import { Heading } from '../atoms/heading/Heading';
import { PersonDisplay } from '../person/PersonDisplay';
import { Collapsible } from '../atoms/collapsible/Collapsible';
import dynamic from 'next/dynamic';

const ReactMarkdown = dynamic(() => import('react-markdown').then((module) => module.default));

export const Talk = ({ speaker }: { speaker: Speaker }) => {
  return (
    <article className={styles.container}>
      <div>
        <Heading Component={'h2'} className={styles.title}>
          {speaker.talk?.title}
        </Heading>
        {speaker.talk?.description && (
          <Collapsible className={styles.description}>
            <ReactMarkdown>{speaker.talk.description}</ReactMarkdown>
          </Collapsible>
        )}
      </div>
      <div className={styles.speaker}>
        <PersonDisplay person={speaker} />
      </div>
    </article>
  );
};

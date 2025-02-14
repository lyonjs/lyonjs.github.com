import { Speaker, Talk as TalkType } from '../../data/lyonjs100-speakers';
import React from 'react';
import styles from './Talk.module.css';
import { Heading } from '../atoms/heading/Heading';
import { PersonDisplay } from '../person/PersonDisplay';
import { Collapsible } from '../atoms/collapsible/Collapsible';
import dynamic from 'next/dynamic';

const ReactMarkdown = dynamic(() => import('react-markdown').then((module) => module.default));

export const Talk = ({ speakers, talk }: { speakers: Speaker[]; talk?: TalkType }) => {
  const currentTalk = talk || speakers[0].talk;

  return (
    <article className={styles.container}>
      <div>
        <Heading Component={'h2'} className={styles.title}>
          {currentTalk?.title}
        </Heading>
        {currentTalk?.description && (
          <Collapsible className={styles.description}>
            <ReactMarkdown>{currentTalk.description}</ReactMarkdown>
          </Collapsible>
        )}
      </div>
      <div className={styles.speaker}>
        {speakers.map((speaker) => (
          <PersonDisplay key={speaker.name} person={speaker} />
        ))}
      </div>
    </article>
  );
};

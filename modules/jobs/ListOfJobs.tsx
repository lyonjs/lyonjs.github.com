import { Job } from './jobs.types';
import styles from './ListOfJobs.module.css';
import { H2 } from '../atoms/remark/Titles';
import React from 'react';
import { ButtonLink } from '../atoms/button/Button';
import dynamic from 'next/dynamic';

const ReactMarkdown = dynamic(() => import('react-markdown').then((module) => module.default));

type Props = {
  jobs: Array<Job>;
};
export const ListOfJobs = ({ jobs }: Props) => {
  return (
    <ul className={styles.container}>
      {jobs.map((job, index) => {
        return (
          <li key={index}>
            <article className={styles.card}>
              <div className={styles.header}>
                <p className={styles.type}>{job.type}</p>
                <p className={styles.sponsor}>{job.sponsor.name}</p>
                <img className={styles.headerLogo} src={job.sponsor.logo} alt={job.sponsor.name} />
              </div>
              <H2 className={styles.title}>{job.title}</H2>
              <ReactMarkdown className={styles.description}>{job.description}</ReactMarkdown>
              <img className={styles.footerLogo} src={job.sponsor.logo} alt={job.sponsor.name} />
              <ButtonLink href={job.url} target="_blank" rel="noreferrer noopener" className={styles.participate}>
                Voir l'annonce <span aria-hidden="true">&rarr;</span>
              </ButtonLink>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

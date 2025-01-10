import { indy, malt, zenika } from './sponsors';
import { kolecto, fulll, _365talents } from './lyonjs100-sponsors';
import { Job } from '../modules/jobs/jobs.types';

/** 3 jobs max per gold sponsors */
const goldSponsorJobs: Array<Job> = [];

/** 1 job max per silver sponsors */
const silverSponsorJobs: Array<Job> = [
  {
    title: 'Engineering Manager',
    url: 'https://jobs.indy.fr/jobs/5370711-engineering-manager',
    sponsor: indy,
    type: 'CDI',
    description: `**Missions** :
* Au sein de l'équipe Tech & Product d'Indy composée de 75 personnes réparties en 2 tribes avec dans chacunes d'elles 5-6 squads.
* Pour rejoindre notre squad Tetris (dans la tribe premium) en charge de rendre hyper fluide et intuitif les déclarations fiscales de nos clients.
* Rôle de Tech Lead dans une squad composée de 3 développeurs fullstack et d'1 Product Manager
* A la fois de manager de l'équipe de développeurs et garant technique des développements de ta squad.

**Profile** :
  - Posture de servant-leader, l'équipe est la priorité. 
  - Tu considères que le travail est bien fait quand ta squad se sent bien et est performante.
  - Tu as évolué dans une entreprise customer-oriented et ton appétence pour le produit se traduit en solutions efficaces pour les utilisateurs.
  - Tu es capable de faire monter en compétence ta squad sur le plan individuel et collectif.
  - Tu as une légitimité technique grâce à tes connaissances en d’architecture, en test et sur des sujets DevOps ou Monitoring.
  - Tu veux rester proche de l’opérationnel en participant à la delivery et aux code-reviews`,
  },
];

export const lyonJS100Jobs = [...goldSponsorJobs, ...silverSponsorJobs];

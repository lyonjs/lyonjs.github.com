import { indy, malt, zenika } from './sponsors';
import { kolecto, fulll, _365talents } from './lyonjs100-sponsors';
import { Job } from '../modules/jobs/jobs.types';

/** 3 jobs max per gold sponsors */
const goldSponsorJobs: Array<Job> = [
  {
    title: 'Architecte logiciel (JavaScript) F/H',
    url: 'https://www.welcometothejungle.com/fr/companies/fulll/jobs/architecte-solution-aws_lyon',
    sponsor: fulll,
    type: 'CDI',
    description: `# Qui cherchons-nous ?

En tant qu’architecte, tu formes un binôme parfait avec un chef de produit. Tu interviens sur l’ensemble du cycle de vie du produit, de la mise en place de l’architecture initiale, ses évolutions et tout ce qui permet de s’assurer du déploiement continu (pipeline ci/cd). Tu partages ton savoir-faire aux autres membres de l’équipe. Tu sensibilises notamment les développeurs aux pratiques DevOps, tu leur fournis et maintiens un cadre. Tu sais que le meilleur moyen de faire avancer les projets est d’y contribuer, donc tu es à l’aise avec le développement Javascript notamment Node.js, que tu préfères le front et/ou le back.

# Quel sera ton quotidien ?
* S’assurer de la conformité et de la cohérence technique
* Spécification sur des sujets complexes
* Conseiller son équipe
* Échanger avec les autres architectes
* Conseiller sur les aspects de la roadmap

# Quels seront tes avantages ?
* Workshop toutes les 5 semaines
* Un accès illimité à la plateforme Udemy pour toujours en apprendre +
* Du bon café gratuit pour bien travailler
* Des corbeilles de fruits pour faire le plein de vitamines
* Des horaires aménagés et du télétravail jusqu’à 3 jours par semaine
* Une carte Swile (Ticket restaurant)
`,
  },
  {
    title: 'Développeur React Js H/F',
    url: 'https://www.welcometothejungle.com/fr/companies/fulll/jobs/developpeur-euse-javascript_lyon',
    sponsor: fulll,
    type: 'CDI',
    description: `# Qui cherchons-nous ?

En tant que développeur frontend, tu maîtrises à minima la programmation en JavaScript / React. Tu as même peut-être contribué à améliorer un ou plusieurs projets open source. Au-delà de tous ces concepts purement techniques, tu es sensible à livrer du code qui fonctionne, mais surtout bien écrit afin qu’il soit fiable et aisément maintenable (principe du software craftmanship). Tel un caméléon tu es intéressé(e) par la production d’applications qui résolvent un problème métier !

# Quel sera ton quotidien ?
* Standup
* Conception
* Développement (code writing)
* Collaboration (réunion, refinement, challenger proposition de solutions ou de fonctionnalités)
* Apprentissage continu
* Résolution de problèmes

# Quels seront tes avantages ?
* Workshop toutes les 5 semaines
* Un accès illimité à la plateforme Udemy pour toujours en apprendre +
* Du bon café gratuit pour bien travailler
* Des corbeilles de fruits pour faire le plein de vitamines
* Des horaires aménagés et du télétravail jusqu’à 3 jours par semaine
* Une carte Swile (Ticket restaurant)
`,
  },
  {
    title: 'Développeur·se Node.js',
    url: 'https://www.welcometothejungle.com/fr/companies/fulll/jobs/developpeur-euse-node-js_lyon',
    sponsor: fulll,
    type: 'CDI',
    description: `# Qui cherchons-nous ?
    
En tant que développeur·se back-end expérimenté, tu possèdes une bonne maîtrise de Node.js. Dans un contexte d’équipe agile, tu participes activement à la conception et au développement de nouvelles fonctionnalités pour contribuer à l’amélioration continue de nos solutions. Tu as à cœur de rédiger un code propre et bien documenté ainsi que prendre part à des projets d’envergure.

Tout cela te parle ?

👇 Je t’invite à lire la suite 👇

# Quel sera ton quotidien ?
* Standup
* Conception
* Développement (code writing)
* Collaboration (réunion, refinement, challenger proposition de solutions ou de fonctionnalités)
* Apprentissage continu
* Résolution de problèmes


# Quels seront tes avantages ?
* Workshop toutes les 5 semaines
* Un accès illimité à une plateforme d’e-learning pour toujours en apprendre +
* Du bon café gratuit pour bien travailler
* Des corbeilles de fruits pour faire le plein de vitamines
* Des horaires aménagés et du télétravail jusqu’à 3 jours par semaine
* Une carte Swile (Ticket restaurant)`,
  },
];

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

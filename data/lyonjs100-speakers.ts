export type Speaker = {
  name: string;
  talk?: {
    title: string;
    description?: string;
  };
  avatarUrl: string;
  social: {
    twitter?: string;
    linkedin?: string;
  };
};

const matthieuLux: Speaker = {
  name: 'Matthieu Lux',
  avatarUrl: '/speakers/matthieu-lux.webp',
  social: { twitter: 'swiip', linkedin: 'swiip' },
  talk: {
    title: 'Astro, le framework Web JS multi page',
    description: `Et si finalement, on faisait des sites avec plusieurs pages ?

Astro est d'abord un framework Web JS basé sur Vite qui permet d'utiliser pratiquement n'importe quel framework frontend: React, Vue, mais aussi Svelte, Solid, Preact... Et même plusieurs d'entre eux à la fois si nécessaire. Au milieu des tout puissants Next et Nuxt, ce trublion propose une voie étonnement simple : revenir au site multi page ! Cela lui permet d'afficher des performances incroyables.

(Pratiquement ?) Tous les serveurs Web JS modernes proposent ni plus ni moins qu'une application JS qui ne fait que faire semblant de se comporter comme un site Web. Cela ne fonctionne pas si mal bien sûr, mais cela a tout de même un coût, à la fois en performance et en complexité. Astro propose une autre voie, on revient aux vraies pages Web et à la navigation entre deux pages. On se rend vite compte que cela ne marche pas si mal, bizarrement, les navigateurs le gère plutôt bien ! Mais attention, avec tout le confort et la puissance des outils JS moderne !

Chez Proton, nous nous sommes engagés sur Astro pour les sites Web. Une partie est maintenant en production, une autre est encore en cours. Outre les fonctionnalités du framework, je vous propose un retour d'experience sur notre migration, nos difficultés et nos succès.`,
  },
};

const jeremiePatonnier: Speaker = {
  name: 'Jérémie Patonnier',
  avatarUrl: '/speakers/jeremie-patonnier.jpg',
  social: { twitter: 'jeremiepat' },
  talk: {
    title: "Deno, l'avenir du dev JS/TS ?",
    description:
      "Deno est la nouvelle alternative à Node... si on en crois Ryan Dahl, le créateur de ces deux environnements ! Si Node est devenus un standard industriel pour le développement de serveur d'API et d'application Web Front, quel est l'intérêt de Deno ? Juste un runtime JS de plus ? Que nenni, Deno, c'est Node avec 10 d'expérience en plus, avec des paradigme plus moderne, des choix d'architecture plus robuste et tout un écosystème pour supporter l'usage de JavaScript et TypeScript à grande échelle. Il y a beaucoup à dire... alors si on se prenait un petit moment pour faire le tour de ce nouvel environnement d'exécution JS qui va très vraisemblablement changer nos pratiques de dev dans les 5 ans à venir ?",
  },
};

const jonnyBurger: Speaker = {
  name: 'Jonny Burger',
  avatarUrl: '/speakers/jonny-burger.png',
  social: { twitter: 'JNYBGR', linkedin: 'jonny-burger-4115109b' },
  talk: {
    title: 'How to build a video editor in React',
    description: `In this very concrete talk, I'll give an outline in 30 minutes on how to build a video editor from scratch.
We'll talk about:

- Building a canvas with user interactions
- Creating a timeline
- Adding captioning with AI functionality
- Rendering out the video!

None of these will be in-depth but by the end of the talk, you shall have no fear if you want to build your own video editor!`,
  },
};

const ayoubAlouane: Speaker = {
  name: `Ayoub Alouane`,
  avatarUrl: '/speakers/ayoub-alouane.png',
  social: { twitter: 'alouane_med', linkedin: 'med-ayb-alouane' },
  talk: {
    title: "La Performance Web : Le cas de l'Afrique",
    description: `Nous partons souvent du principe que tout le monde dispose d'une bonne connexion Internet et d'un matériel informatique de haute spécification. Bien que cela puisse être vrai dans certaines régions, ce n'est pas le cas dans le monde entier. Je souhaite attirer l'attention sur l'Afrique, où de nombreux pays luttent contre de faibles connexions 3G coûteuses, en fonction de la quantité de données consommées. Ceci est dû à l'infrastructure limitée du continent, conduisant à une dépendance aux connexions mobiles.

Compte tenu de ces circonstances, une utilisation efficace des données avec une bonne performance web devient une priorité. Ainsi, notre session se concentrera sur les défis rencontrés par les utilisateurs et les développeurs africains, et comment le téléchargement et l'exécution de grandes quantités de JavaScript exacerbe les problèmes de consommation de données et de performance. Nous explorerons comment les frameworks js existants ont tenté de résoudre le problème et comment Qwik, avec son approche innovante de la Resumability, présente une solution transformatrice à ces défis. Contrairement aux SPAs traditionnels, la Resumability de Qwik réduit considérablement la charge initiale de JavaScript, permettant aux applications de devenir interactives plus rapidement, même sur des connexions lentes.`,
  },
};

const julienSulpis: Speaker = {
  name: 'Julien Sulpis',
  avatarUrl: '/speakers/julien-sulpis.png',
  social: { twitter: 'jsulpis', linkedin: 'julien-sulpis' },
  talk: {
    title: 'Savez-vous vraiment ce qu’est la couleur ? Découvrez la science derrière les pixels 🎨',
    description: `Si la couleur est souvent vue sous un angle créatif, c’est aussi une science qui peut expliquer certaines bizarreries : pourquoi les mêmes couleurs ont l’air plus saturées sur ma maquette Figma que sur ma page web ? Est-ce qu’il y a un rouge “plus rouge” que le rgb(255, 0, 0) ? Pourquoi le jaune paraît plus clair que le bleu à luminosité égale ?

Ces questions sont toutes liées à notre représentation des couleurs. Dans ce talk, je vous emmène dans un voyage à travers l’Histoire et les sciences pour comprendre, réellement, les codes couleur que vous utilisez dans vos applications.

Vous y découvrirez ce que sont les espaces de couleur (sRGB, P3…), les notations courantes comme RGB ou HSL, et en quoi elles peuvent être trompeuses. Vous verrez enfin comment les dernières notations OKLAB et OKLCH, plus fidèles à notre perception des couleurs, peuvent permettre par exemple de créer des gradients ou des palettes de couleur cohérentes beaucoup plus facilement !`,
  },
};

const manonCarbonnel: Speaker = {
  name: 'Manon Carbonnel',
  avatarUrl: '/speakers/manon-carbonnel.png',
  social: { twitter: 'manoncarbonnel_', linkedin: 'manon-carbonnel' },
  talk: {
    title: 'Crafter de meilleures UI, en pensant le DOM comme une API',
    description: `Arrivant souvent sur les projets en "mode pompier", j'ai acquis des réflexes lorsqu'il s'agit de rapidement corriger ou terminer l'intégration d'application web.

Mais comment faire pour maintenir ces bonnes pratiques une fois le feu éteint ? Comment améliorer le code sans casser l'UI ? Comment bien démarrer l'intégration d'une nouvelle application ?

Nos UI sont autant utilisées par des humains que par des lecteurs d'écran, ou encore des outils de test et des robots... il faut donc penser le DOM comme une API, et pas seulement reproduire une maquette.
Autour de cet axe, je vous propose quelques outils et idées d'ateliers collaboratifs pour développer des interfaces testables, modulaires et accessibles. Et pourquoi pas un Design System ?

Vous repartirez avec une nouvelle vision du métier de l'intégration web, des pratiques et quelques outils à utiliser dès demain pour améliorer le quotidien de votre projet.`,
  },
};

const julienHuang: Speaker = {
  name: 'Julien Huang',
  avatarUrl: '/speakers/julien-huang.png',
  social: { twitter: 'JulienHuang_dev', linkedin: 'julien-huang' },
  talk: {
    title: 'Tout sur les composants serveur Nuxt',
    description: `Tout le monde connaît les "server components" de React et Next. Mais qu’en est-il de l’écosystème VueJS ? Avec Nuxt, le méta-framework basé sur VueJS, nous avons aussi des composants serveur ! Bien que le nom soit le même, leur fonctionnement est différent.
   
Dans ce talk, nous verrons ce que sont les Islands ainsi que les composants serveur dans Nuxt, et ce qui les distingue des composants serveur de React et des Islands d’Astro.`,
  },
};

export const speakers: Array<Speaker> = [matthieuLux, jeremiePatonnier, jonnyBurger, ayoubAlouane];

export const program: Array<{ time: string; speaker?: Speaker; title?: string }> = [
  { time: '08:00', title: '🥐 Accueil & Petit déjeuner' },
  { time: '09:00', title: '🎤 Keynote' },
  { time: '09:30', speaker: matthieuLux },
  { time: '10:30', title: '☕ Pause' },
  { time: '10:50', speaker: ayoubAlouane },
  { time: '11:50', speaker: jonnyBurger },
  { time: '12:20', title: '🍽️ Déjeuner' },
  { time: '14:00', speaker: julienSulpis },
  { time: '15:00', speaker: manonCarbonnel },
  { time: '16:00', title: '☕ Pause' },
  { time: '16:20', speaker: jeremiePatonnier },
  { time: '17:10', speaker: julienHuang },
  { time: '18:00', title: '🎉 Fin' },
];

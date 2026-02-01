# Etude de migration Next.js vers Astro

## Contexte

Le site LyonJS tourne sur Next.js 16 (App Router, React 19, standalone output) deploye sur Scaleway Serverless Containers. Ce document evalue la faisabilite et l'interet d'une migration vers Astro.

## Pourquoi migrer ?

### Avantages attendus

- **Performance** : Astro genere du HTML statique par defaut, zero JS cote client sauf pour les composants interactifs. Le site LyonJS est principalement du contenu statique, donc la majorite des pages n'aurait aucun JS client.
- **Simplicite** : Pas de distinction server component / client component. Tous les composants Astro sont serveur par defaut, le JS client est opt-in via les directives `client:*`.
- **Bundle size** : React n'est charge que pour les "islands" interactives (7 composants sur ~40), pas pour tout le site.
- **MDX natif** : Astro supporte MDX nativement, sans config supplementaire.
- **Build statique** : Astro est concu pour le SSG. Le mode SSR/ISR est possible mais le SSG est le mode par defaut, ce qui colle bien avec le profil du site.
- **Independance framework** : Plus de dependance forte a React pour le rendu des pages. React n'est utilise que la ou il apporte de la valeur (interactivite).
- **Taille de l'image Docker** : Sans le runtime Next.js/Node en mode standalone, l'image serait plus legere.

### Inconvenients / risques

- **Perte de l'ISR** : Next.js revalide les pages toutes les heures (`revalidate = 3600`). En SSG pur avec Astro, il faut rebuilder pour mettre a jour. Solutions : SSR mode, ou rebuild periodique via cron CI.
- **Ecosysteme React reduit** : Les librairies React (`motion`, `yet-another-react-lightbox`, `react-markdown`) fonctionnent via les islands, mais c'est un pattern moins ergonomique que le tout-React.
- **OG images dynamiques** : Next.js genere des images OG via `next/og` (edge runtime + JSX). Astro n'a pas d'equivalent natif, il faut utiliser `@vercel/og`, `satori`, ou generer les images au build.
- **Courbe d'apprentissage** : Syntaxe `.astro` differente de JSX (frontmatter + template). Les contributeurs devront s'adapter.
- **Middleware** : Pas d'equivalent direct au middleware Next.js. Les headers CSP devront etre configures au niveau du serveur (Scaleway / Docker) ou via Astro SSR middleware.

## Inventaire des fonctionnalites a migrer

### Pages et routes

| Next.js (App Router) | Astro | Effort |
|---|---|---|
| `app/page.tsx` | `src/pages/index.astro` | Faible |
| `app/a-propos/page.tsx` | `src/pages/a-propos.astro` | Faible |
| `app/code-de-conduite/page.tsx` | `src/pages/code-de-conduite.astro` | Faible |
| `app/devenir-sponsor/page.tsx` | `src/pages/devenir-sponsor.astro` | Faible |
| `app/budget-et-financement/page.tsx` | `src/pages/budget-et-financement.astro` | Faible |
| `app/evenements-precedents/page.tsx` | `src/pages/evenements-precedents/index.astro` | Faible |
| `app/evenements-precedents/[year]/page.tsx` | `src/pages/evenements-precedents/[year].astro` avec `getStaticPaths()` | Moyen |
| `app/evenement/[slug]/page.tsx` | `src/pages/evenement/[slug].astro` avec `getStaticPaths()` | Moyen |
| `app/lyonjs-100/page.tsx` | `src/pages/lyonjs-100.astro` | Faible |
| `app/not-found.tsx` | `src/pages/404.astro` | Faible |
| `app/layout.tsx` | `src/layouts/Layout.astro` | Moyen |
| `app/robots.ts` | `src/pages/robots.txt.ts` | Faible |
| `app/sitemap.ts` | `@astrojs/sitemap` integration | Faible |

### Data fetching

| Pattern Next.js | Equivalent Astro | Notes |
|---|---|---|
| `generateStaticParams()` | `getStaticPaths()` | Meme concept, syntaxe differente |
| `revalidate = 3600` (ISR) | Rebuild CI ou SSR mode | Pas d'ISR en SSG, voir section dediee |
| `React cache()` | Appel direct dans le frontmatter | Pas de deduplication automatique, mais les appels sont dans le frontmatter donc executes une seule fois |
| Server components async | Composants Astro (async par defaut) | Transition naturelle |

### Composants interactifs (React islands)

Ces 7 composants necessitent du JS client et deviendraient des islands React dans Astro :

| Composant | Utilise | Directive Astro |
|---|---|---|
| `HomeHero.tsx` | motion (animations) | `client:load` |
| `Number.tsx` | motion, next/font | `client:visible` |
| `Collapsible.tsx` | useState | `client:visible` |
| `NavLink.tsx` | next/navigation (usePathname) | `client:load` |
| `MobileNavigation.tsx` | useState, usePathname, useEffect | `client:load` |
| `PhotoAlbum.tsx` | useState, dynamic import lightbox | `client:visible` |
| `EventCard.tsx` | dynamic import react-markdown | `client:visible` |

**Note** : `NavLink` et `MobileNavigation` utilisent `usePathname()` de `next/navigation`. A remplacer par `window.location.pathname` ou `Astro.url.pathname` (partie serveur) + event listeners cote client.

### Images

| Next.js | Astro |
|---|---|
| `next/image` (8 fichiers) | `astro:assets` `<Image>` component |
| `remotePatterns` dans next.config | `image.domains` dans astro.config |
| Optimisation automatique (sharp) | Optimisation automatique (sharp) |

Le composant `<Image>` d'Astro offre les memes fonctionnalites (lazy loading, format moderne, responsive). Migration directe.

### MDX

| Next.js | Astro |
|---|---|
| `@next/mdx` + `mdx-components.tsx` | `@astrojs/mdx` integration |
| 5 fichiers `.mdx` | Meme fichiers, syntaxe compatible |
| Custom components mapping | Components passees via props dans le layout |

Astro a un excellent support MDX natif. Les composants React embarques dans le MDX (`<Orgas />`, `<Socials />`) peuvent rester en React via les islands ou etre convertis en composants Astro.

### Metadata / SEO

| Next.js | Astro |
|---|---|
| `export const metadata: Metadata` | `<head>` dans le layout + props |
| `generateMetadata()` | Props dynamiques dans le layout |
| `opengraph-image.tsx` (6 fichiers) | `satori` + `sharp` au build (voir ci-dessous) |
| `robots.ts` | `src/pages/robots.txt.ts` |
| `sitemap.ts` | `@astrojs/sitemap` |
| JSON-LD structured data | `<script type="application/ld+json">` dans le layout |

### OG Images dynamiques

C'est le point le plus complexe. Actuellement 6 routes generent des images OG via `next/og` (basee sur `satori`).

**Options avec Astro** :
1. **`astro-og-canvas`** : Librairie communautaire pour generer des OG images au build
2. **`satori` + `sharp` directement** : Meme moteur que `next/og`, utilisable dans `getStaticPaths()` pour generer les images au build
3. **Service externe** : Generer via un endpoint API separe

Recommandation : option 2, generer les images au build avec `satori` directement.

### Middleware / Headers de securite

Le `middleware.ts` actuel gere :
- Nonce CSP pour les scripts inline
- Headers de securite (X-Frame-Options, etc.)

**Avec Astro** :
- Les headers statiques (X-Frame-Options, etc.) → configures dans le Dockerfile / reverse proxy / `astro.config.mjs` en mode SSR
- Le nonce CSP → plus necessaire si pas de scripts inline. Sinon, middleware Astro en mode SSR.
- Alternative : configurer les headers directement dans Scaleway Serverless Containers

### Redirections

Une seule redirection (`/lyonjs-100/programme` → `/lyonjs-100`) → `redirects` dans `astro.config.mjs`.

### Styles

| Next.js | Astro |
|---|---|
| CSS Modules (20+ fichiers) | CSS Modules supportes nativement |
| `globals.css` | Import global dans le layout |
| `normalize.css` | Import dans le layout |
| `classnames` | Continue a fonctionner |

Migration transparente, rien a changer.

## Strategie ISR vs rebuild

Le site utilise `revalidate = 3600` sur plusieurs pages pour actualiser les donnees Meetup toutes les heures.

**Options avec Astro** :

| Option | Description | Impact |
|---|---|---|
| **SSG + rebuild cron** | Workflow CI schedule qui rebuild et redeploy toutes les heures | Simple, pas de serveur Node, image Docker minimale (nginx) |
| **SSR mode** | Astro en mode `output: 'server'` avec cache headers | Garde le comportement ISR, mais necessite Node.js runtime |
| **Hybride** | `output: 'hybrid'` — pages statiques par defaut, quelques routes SSR | Meilleur compromis |

**Recommandation** : SSG + rebuild cron. Le contenu change rarement (quelques meetups par mois). Un rebuild horaire ou quotidien suffit largement. Cela permet de deployer une image Docker statique (nginx) au lieu d'un runtime Node.js.

## Plan de migration

### Phase 1 : Setup et infrastructure

- [ ] Initialiser le projet Astro avec `@astrojs/react`, `@astrojs/mdx`, `@astrojs/sitemap`
- [ ] Configurer `astro.config.mjs` (images, redirections, site URL)
- [ ] Creer le layout principal (`Layout.astro`) avec les meta, les styles globaux, le JSON-LD
- [ ] Configurer les headers de securite dans le Dockerfile ou la config Astro
- [ ] Adapter le Dockerfile (build statique → nginx ou SSR → Node)

### Phase 2 : Pages statiques

- [ ] Migrer les 5 pages MDX (a-propos, code-de-conduite, devenir-sponsor, budget, lyonjs-100)
- [ ] Migrer les composants de layout (Header, Footer, Navigation)
- [ ] Migrer le systeme de navigation (NavLink, MobileNavigation → islands React ou composants Astro natifs)
- [ ] Migrer la page 404

### Phase 3 : Pages dynamiques

- [ ] Migrer le module Meetup API (graphql-request, queries) — reutilisable tel quel
- [ ] Migrer `data-override.ts` et `overrideEvent.ts` — reutilisable tel quel
- [ ] Migrer la homepage (NextEvent, LastReplays, Numbers, HomeHero)
- [ ] Migrer `/evenements-precedents` et `/evenements-precedents/[year]` avec `getStaticPaths()`
- [ ] Migrer `/evenement/[slug]` avec `getStaticPaths()`

### Phase 4 : Composants interactifs

- [ ] Convertir HomeHero et Number en islands React (`client:visible`)
- [ ] Convertir Collapsible en island ou composant Astro natif (`<details>`)
- [ ] Convertir PhotoAlbum + lightbox en island React
- [ ] Convertir MobileNavigation (remplacer `usePathname` par du JS vanilla ou island)

### Phase 5 : SEO et finitions

- [ ] Generer les OG images au build avec `satori`
- [ ] Configurer `@astrojs/sitemap`
- [ ] Migrer `robots.txt`
- [ ] Verifier les meta tags et le JSON-LD sur toutes les pages
- [ ] Mettre a jour les tests Playwright (les selectors devraient rester les memes)

### Phase 6 : CI/CD

- [ ] Adapter le Dockerfile pour Astro
- [ ] Si SSG pur : optionnel — remplacer le runtime Node.js par nginx pour une image plus legere
- [ ] Ajouter un workflow cron pour rebuild periodique (si SSG)
- [ ] Verifier que les deploys Scaleway fonctionnent

## Estimation de la complexite

| Element | Fichiers | Complexite |
|---|---|---|
| Pages statiques (MDX) | 5 | Faible |
| Layout + Header + Footer | 3 | Faible |
| Navigation (mobile, links) | 3 | Moyenne |
| Homepage (hero, numbers, replays) | 5 | Moyenne |
| Pages dynamiques (events, years) | 4 | Moyenne |
| Module Meetup API | 5 | Faible (reutilisable) |
| Data files | 9 | Aucune (reutilisable) |
| OG images | 6 | Elevee |
| Middleware → headers | 1 | Faible |
| Tests Playwright | 3 | Faible (memes URLs) |
| CI/CD + Docker | 3 | Faible |

**Code reutilisable sans modification** : tout le dossier `data/`, le module `meetup/` (queries, API), les utilitaires (`dateUtils`, `slugify`, `overrideEvent`), les types, `classnames`, CSS Modules.

**Code a reecrire** : les pages (syntaxe `.astro`), les composants de layout, les OG images.

**Code a adapter** : les 7 composants React interactifs (ajouter `client:*` directives).

## Conclusion

La migration est faisable et presente un interet reel pour ce type de site (contenu statique, peu d'interactivite). Les principaux benefices sont la reduction du JS client, la simplification de l'architecture, et potentiellement une image Docker plus legere.

Les points de friction sont les OG images dynamiques (necessite du travail custom avec satori) et la perte de l'ISR (compensable par un rebuild cron).

Le code metier (API Meetup, data, types, utilitaires, CSS) est largement reutilisable. Le gros du travail est la reecriture des pages en syntaxe Astro et l'adaptation des composants interactifs en islands.

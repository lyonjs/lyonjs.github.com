export type LogoVariant = {
  format: string;
  filePath: string;
  previewPath?: string;
};

export type LogoAsset = {
  name: string;
  description: string;
  variants: LogoVariant[];
};

export type BrandColor = {
  name: string;
  description: string;
  hex: string;
  hsl: string;
  cssVariable: string;
};

export type GuidelineItem = {
  text: string;
};

export const logos: LogoAsset[] = [
  {
    name: 'Logo complet',
    description: 'Logo avec le texte "LyonJS". Version principale à privilégier.',
    variants: [
      { format: 'SVG', filePath: '/press-kit/lyon-js-complet.svg', previewPath: '/press-kit/lyon-js-complet.svg' },
      { format: 'PNG 128', filePath: '/press-kit/lyon-js-complet-128.png' },
      { format: 'PNG 256', filePath: '/press-kit/lyon-js-complet-256.png' },
      { format: 'PNG 512', filePath: '/press-kit/lyon-js-complet-512.png' },
      { format: 'PNG 1024', filePath: '/press-kit/lyon-js-complet-1024.png' },
      { format: 'WebP 128', filePath: '/press-kit/lyon-js-complet-128.webp' },
      { format: 'WebP 256', filePath: '/press-kit/lyon-js-complet-256.webp' },
      { format: 'WebP 512', filePath: '/press-kit/lyon-js-complet-512.webp' },
      { format: 'WebP 1024', filePath: '/press-kit/lyon-js-complet-1024.webp' },
    ],
  },
  {
    name: 'Icône seule',
    description: "Logo sans texte. À utiliser quand l'espace est limité (avatar, favicon…).",
    variants: [
      { format: 'SVG', filePath: '/press-kit/lyon-js.svg', previewPath: '/press-kit/lyon-js.svg' },
      { format: 'PNG 128', filePath: '/press-kit/lyon-js-128.png' },
      { format: 'PNG 256', filePath: '/press-kit/lyon-js-256.png' },
      { format: 'PNG 512', filePath: '/press-kit/lyon-js-512.png' },
      { format: 'PNG 1024', filePath: '/press-kit/lyon-js-1024.png' },
      { format: 'WebP 128', filePath: '/press-kit/lyon-js-128.webp' },
      { format: 'WebP 256', filePath: '/press-kit/lyon-js-256.webp' },
      { format: 'WebP 512', filePath: '/press-kit/lyon-js-512.webp' },
      { format: 'WebP 1024', filePath: '/press-kit/lyon-js-1024.webp' },
    ],
  },
];

export const brandColors: BrandColor[] = [
  {
    name: 'Jaune LyonJS',
    description: 'Couleur principale de la marque',
    hex: '#EDD533',
    hsl: 'hsl(52, 83%, 62%)',
    cssVariable: '--yellow-0',
  },
  {
    name: 'Noir LyonJS',
    description: 'Couleur secondaire de la marque',
    hex: '#323330',
    hsl: 'hsl(60, 5%, 19%)',
    cssVariable: '--black-0',
  },
];

export const guidelines: GuidelineItem[] = [
  { text: 'Utiliser le logo sur un fond sombre pour un meilleur contraste' },
  { text: 'Respecter une zone de protection autour du logo (min. 50% de sa hauteur)' },
  { text: 'Utiliser les couleurs officielles de la charte' },
  { text: "Pointer vers lyonjs.org lors de l'utilisation du logo" },
];

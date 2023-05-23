import { Metadata } from 'next';
// @ts-ignore
import Content from './content.mdx';

export default function CodeOfConduct() {
  return <Content />;
}

const title = 'LyonJS | Code de conduite';
const description =
  "Code de conduite et réglementation relative aux évènements de l'association LyonJS. Critères et application y sont détaillés";
export const metadata: Metadata = {
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

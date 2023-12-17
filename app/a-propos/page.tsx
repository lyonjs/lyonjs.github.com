import { Metadata } from 'next';
// @ts-ignore
import Content from './content.mdx';

export default function APropos() {
  return <Content />;
}
export const revalidate = 3600;
const title = 'LyonJS | À propos';
const description =
  "Qu'est-ce que LyonJS, comment le meetup est organisé ? Comment participer ? Qui sont les organisateurs ?";

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

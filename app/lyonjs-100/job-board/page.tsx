import { Metadata } from 'next';
// @ts-ignore
import Content from './content.mdx';

export const revalidate = 3600;
const title = "LyonJS | LyonJS 💯 | Offres d'emploi";
const description = "Les offres d'emploi de nos sponsors pour ce LyonJS 💯";

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

export default function JobBoard() {
  return <Content />;
}

import { Metadata } from 'next';
// @ts-ignore
import Content from './content.mdx';

export default function BecomeSponsor() {
  return (
    <main>
      <Content />
    </main>
  );
}
const title = 'LyonJS | Devenir sponsor';
const description = 'Vous souhaitez sponsoriser un événement de LyonJS, voici toutes les informations nécessaires';

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

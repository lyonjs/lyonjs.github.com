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
export const revalidate = 3600;
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

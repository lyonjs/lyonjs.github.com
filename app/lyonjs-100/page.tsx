import { Metadata } from 'next';
// @ts-ignore
import Content from './content.mdx';

export default function LyonJS100() {
  return <Content />;
}
export const revalidate = 3600;
const title = 'LyonJS | LyonJS 💯';
const description = "Qu'est ce que le LyonJS 100 ? Comment participer à la journée de conférence ?";

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

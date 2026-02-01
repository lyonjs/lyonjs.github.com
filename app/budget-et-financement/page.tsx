import { Metadata } from 'next';
// @ts-ignore
import Content from './content.mdx';

export default function BudgetEtFinancement() {
  return <Content />;
}
const title = 'LyonJS | Budget et financement de l’association';
const description = "Quelles sont les dépenses de l'association LyonJS, comment elle se finance";

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

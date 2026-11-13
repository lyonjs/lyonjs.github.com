import { ImageResponse } from 'next/og';
import { SimpleText } from '../../../modules/og/SimpleText';

export const alt = 'LyonJS logo';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Same params as the page so the images are generated at build time instead of on every request.
export { generateStaticParams } from './page';

export default async function Image({ params }: PageProps<'/evenements-precedents/[year]'>) {
  const { year } = await params;
  return new ImageResponse(<SimpleText text={`Nos évènements de l'année ${year}`} />, {
    ...size,
  });
}

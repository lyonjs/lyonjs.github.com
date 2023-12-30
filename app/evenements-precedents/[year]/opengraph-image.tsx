import { ImageResponse } from 'next/og';
import { SimpleText } from '../../../modules/og/SimpleText';
export const runtime = 'edge';

export const alt = 'LyonJS logo';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params: { year } }: { params: { year: string } }) {
  return new ImageResponse(<SimpleText text={`Nos évènements de l'année ${year}`} />, {
    ...size,
  });
}

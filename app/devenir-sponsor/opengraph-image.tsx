import { ImageResponse } from 'next/og';
import { SimpleText } from '../../modules/og/SimpleText';

export const runtime = 'edge';

export const alt = 'Devenir sponsor de LyonJS';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(<SimpleText text={`Devenir sponsor`} />, {
    ...size,
  });
}

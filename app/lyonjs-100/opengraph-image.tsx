import { ImageResponse } from 'next/og';
import { SimpleText } from '../../modules/og/SimpleText';

export const runtime = 'edge';

export const alt = 'LyonJS 100';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(<SimpleText text={`LyonJS 100`} />, size);
}

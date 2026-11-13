import { ImageResponse } from 'next/og';
import { SimpleText } from '../../../../../modules/og/SimpleText';

export const alt = 'LyonJS logo';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Same params as the page so the images are generated at build time instead of on every request.
export { generateStaticParams } from './page';

export default async function Image({ params }: PageProps<'/evenement/[slug]/replay/[talkSlug]'>) {
  const { talkSlug } = await params;
  const title = talkSlug.replace(/-/g, ' ');
  return new ImageResponse(<SimpleText text={title} />, {
    ...size,
  });
}

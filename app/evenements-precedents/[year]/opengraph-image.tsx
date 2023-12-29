import { ImageResponse } from 'next/og';
export const runtime = 'edge';

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params: { year } }: { params: { year: string } }) {
  const image = fetch(new URL('../../../public/android-chrome-192x192.png', import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: 'black',
          backgroundSize: '150px 150px',
          height: '100%',
          width: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          flexWrap: 'nowrap',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
          }}
        >
          <img
            alt="Vercel"
            height={200}
            src={image as unknown as string}
            style={{ margin: '0 30px' }}
            width={232}
          />
        </div>
        <div
          style={{
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            color: 'white',
            marginTop: 30,
            padding: '0 120px',
            lineHeight: 1.4,
            whiteSpace: 'pre-wrap',
          }}
        >
          {`Nos évènements de l'année ${year}`}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
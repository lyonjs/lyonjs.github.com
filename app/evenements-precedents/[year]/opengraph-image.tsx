import { ImageResponse } from 'next/og';
export const runtime = 'edge';

export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params: { year } }: { params: { year: string } }) {
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
            src="https://lyonjs.org/android-chrome-192x192.png"
            style={{ margin: '0 30px', objectFit: 'cover' }}
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
    },
  );
}

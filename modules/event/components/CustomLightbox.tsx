import React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Download from 'yet-another-react-lightbox/plugins/download';
import { PhotoSample } from '../types';
import 'yet-another-react-lightbox/styles.css';

export const CustomLightbox = ({
  openedImage,
  setOpenImage,
  photoSample,
}: {
  openedImage: number;
  setOpenImage: any;
  photoSample: PhotoSample[];
}) => {
  return (
    <Lightbox
      index={openedImage}
      open={openedImage >= 0}
      close={() => setOpenImage(-1)}
      slides={photoSample.map(({ source }) => {
        return {
          src: source,
          download: source,
        };
      })}
      plugins={[Download]}
    />
  );
};

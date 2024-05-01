'use client';
import React, { useState } from 'react';
import styles from './PhotoAlbum.module.css';
import { Heading } from '../../atoms/heading/Heading';
import dynamic from 'next/dynamic';
import { PhotoSample } from '../types';
import { PictureComponent } from './PictureComponent';

const LightBox = dynamic(() => import('./CustomLightbox').then((mod) => mod.CustomLightbox));

export function PhotoAlbum(props: { photoAlbum: { photoSample: PhotoSample[] } }) {
  const [openedImage, setOpenImage] = useState(-1);

  return (
    <section className={styles.imageCollection}>
      <Heading Component="h2">Les images</Heading>
      <div className={styles.lists}>
        <ul>
          {props.photoAlbum.photoSample.map((image, index) => (
            <PictureComponent key={image.source} image={image.source} onClick={() => setOpenImage(index)} />
          ))}
        </ul>
      </div>
      <LightBox openedImage={openedImage} setOpenImage={setOpenImage} photoSample={props.photoAlbum.photoSample} />
    </section>
  );
}

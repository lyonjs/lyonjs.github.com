import styles from './PictureComponent.module.css';
import Image from 'next/image';
import React from 'react';

export const PictureComponent = ({ image, onClick }: { image: string; onClick: () => any }) => {
  return (
    <li>
      <button type="button" onClick={onClick} className={styles.imageContainer}>
        <Image
          loading="lazy"
          src={image}
          sizes="(min-width: 320px) 768w, (min-width: 768px) 1024w, (min-width: 1024px) 1200w"
          width={224}
          height={224}
          alt=""
          aria-hidden="true"
        />
      </button>
    </li>
  );
};

import React, { FC } from 'react';
import styles from './Location.module.css';
import { Pin } from '../../icons/Pin';
import { Venue } from '../types';
import classNames from 'classnames';

type Props = {
  venue: Venue;
  className?: string;
};
export const Location: FC<Props> = ({ venue, className }) => (
  <a
    href={`http://maps.google.com/maps?q=loc:${venue.lat}+${venue.lng}`}
    target="_blank"
    rel="noreferrer noopener"
    className={classNames(styles.location, className)}
  >
    <Pin />
    <div className={styles.addressContainer}>
      <p>{venue.name}</p>
      <p>{venue.address}</p>
      <p>{venue.city}</p>
    </div>
  </a>
);

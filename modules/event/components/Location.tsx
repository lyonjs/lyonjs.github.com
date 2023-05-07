import React, { FC } from 'react';
import styles from './Location.module.css';
import { Pin } from '../../icons/Pin';
import type { Event } from '../types';
import classNames from 'classnames';

type Props = {
  event: Event;
  className?: string;
};
export const Location: FC<Props> = ({ event, className }) => (
  <a
    href={`http://maps.google.com/maps?q=loc:${event.venue.lat}+${event.venue.lng}`}
    target="_blank"
    rel="noreferrer noopener"
    className={classNames(styles.location, className)}
  >
    <Pin />
    <div className={styles.addressContainer}>
      <p>{event.venue.name}</p>
      <p>{event.venue.address}</p>
      <p>
        {event.venue.postalCode} {event.venue.city}
      </p>
    </div>
  </a>
);

import type { Event } from '../types';
import dayjs from 'dayjs';
import styles from './EventTile.module.css';
import _capitalize from 'lodash/capitalize';

type Props = { event: Event };
export const EventTile: React.FC<Props> = ({ event }) => {
  const dateParsed = dayjs(event.dateTime);
  const formattedDayAndMonth = _capitalize(dateParsed.format('dddd D MMMM YYYY à H:mm'));

  return (
    <article className={styles.eventTile} aria-label={event.title}>
      <img src={event.imageUrl} alt="" />
      <div className={styles.content}>
        <h2>{event.title}</h2>
        <div className={styles.time}>{formattedDayAndMonth}</div>
        {event.sponsor && (
          <div className={styles.sponsor}>
            Sponsorisé par <b>{event.sponsor.name}</b>
          </div>
        )}
      </div>
    </article>
  );
};

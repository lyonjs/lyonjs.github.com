import type { Event } from '../types';
import dayjs from 'dayjs';
import styles from './EventTile.module.css';
import _capitalize from 'lodash/capitalize';
import { Youtube } from '../../icons/Youtube';

type Props = { event: Event };
export const EventTile: React.FC<Props> = ({ event }) => {
  const dateParsed = dayjs(event.dateTime);
  const formattedDayAndMonth = _capitalize(dateParsed.format('dddd D MMMM YYYY à H:mm'));
  const hasReplay = event.talks?.some((talk) => talk.videoLink);

  return (
    <article className={styles.eventTile} aria-label={event.title}>
      <img src={event.imageUrl} alt="" />
      <div className={styles.content}>
        <h2>{event.title}</h2>
        <div className={styles.time}>{formattedDayAndMonth}</div>
        <div className={styles.footer}>
          {event.sponsor && (
            <div className={styles.sponsor}>
              Sponsorisé par <b>{event.sponsor.name}</b>
            </div>
          )}
          {hasReplay && (
            <div className={styles.replay}>
              Replay disponible <Youtube color="currentColor" size={16} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

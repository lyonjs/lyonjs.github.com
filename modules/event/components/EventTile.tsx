import type { Event } from '../types';
import styles from './EventTile.module.css';
import { formatEventDate } from '../dateUtils';
import { Youtube } from '../../icons/Youtube';
import Image from 'next/image';

type Props = { event: Event };
export const EventTile: React.FC<Props> = ({ event }) => {
  const formattedDayAndMonth = formatEventDate(event.dateTime);
  const hasReplay = event.talks?.some((talk) => talk.videoLink);

  return (
    <article className={styles.eventTile} aria-label={event.title}>
      <Image src={event.featuredEventPhoto?.highResUrl ?? '/lyonjs.webp'} alt="" width={160} height={90} />
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

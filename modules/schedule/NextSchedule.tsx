import { schedule } from '../../data/schedule';
import styles from './NextSchedule.module.css';

const sortSchedules = schedule
  .filter((event) => new Date(event.date).getTime() > Date.now())
  .sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
export const NextSchedule = () => {
  return (
    <ul className={styles.list}>
      {sortSchedules.map((event) => (
        <li key={event.date}>
          {new Date(event.date).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}{' '}
          {event.sponsor ? <strong>- Déjà réservé</strong> : null}
        </li>
      ))}
    </ul>
  );
};

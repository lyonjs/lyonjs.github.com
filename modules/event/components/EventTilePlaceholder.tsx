import styles from './EventTile.module.css';
import { LinePlaceholder } from '../../placeholder/LinePlaceholder';

export const EventTilePlaceholder = () => {
  return (
    <article className={styles.eventTile}>
      <div className={styles.fakeMedia} />
      <div className={styles.fakeContent}>
        <LinePlaceholder width="300px" height="1.5rem" />
        <LinePlaceholder width="120px" height="0.8rem" />
      </div>
    </article>
  );
};

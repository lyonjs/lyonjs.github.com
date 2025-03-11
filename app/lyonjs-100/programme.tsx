import { program } from '../../data/lyonjs100-speakers';
import { Talk } from '../../modules/program/Talk';
import styles from './Programme.module.css';

export const Programme = () => {
  return (
    <ul className={styles.container}>
      {program.map((slot) => (
        <li key={slot.youtubeId}>
          <Talk speakers={slot.speaker} talk={slot.talk} replay={`https://youtu.be/${slot.youtubeId}`} />
        </li>
      ))}
    </ul>
  );
};

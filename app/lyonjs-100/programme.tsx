import { program } from '../../data/lyonjs100-speakers';
import { Talk } from '../../modules/program/Talk';
import styles from './Programme.module.css';

export const Programme = () => {
  return (
    <div className={styles.container}>
      {program.map((slot) => (
        <Talk
          speakers={slot.speaker}
          talk={slot.talk}
          replay={`https://youtu.be/${slot.youtubeId}`}
          key={slot.youtubeId}
        />
      ))}
    </div>
  );
};

import { fetchNumbers } from '../meetup/queries/numbers.api';
import styles from './Numbers.module.css';

export const Numbers = async () => {
  const result = await fetchNumbers();

  return (
    <ul className={styles.list}>
      {result.map(({ value, text }) => (
        <li key={text}>
          <div>{value}</div>
          <div>{text}</div>
        </li>
      ))}
    </ul>
  );
};

import styles from './HeroTitle.module.css';

type Props = {
  title: string;
  strong: string;
};
export const HeroTitle: React.FC<Props> = ({ title, strong }) => {
  return (
    <h1 className={styles.title}>
      <span>{title}</span>
      <br />
      <strong>{strong}</strong>
    </h1>
  );
};

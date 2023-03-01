import { ButtonLink } from '../atoms/button/Button';
import { Edit } from '../icons/Edit';
import { People } from '../icons/People';
import styles from './Hero.module.css';

export const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.leftContainer}>
      <h1>
        <span>Meetup</span>
        <br />
        <strong>LyonJS</strong>
      </h1>
      <p>
        La communauté lyonnaise
        <br />
        des utilisateurs de JavaScript
      </p>

      <div className={styles.buttons}>
        <ButtonLink href="https://www.meetup.com/fr-FR/lyonjs/" target="_blank" rel="noreferrer noopener">
          <People /> Rejoindre le meetup
        </ButtonLink>
        <ButtonLink variant="secondary" href="https://bit.ly/lyonjs-cfp" target="_blank" rel="noreferrer noopener">
          <Edit /> Proposer un sujet
        </ButtonLink>
      </div>
    </div>

    <img
      src="/lion-1440.webp"
      srcSet={[360, 720, 1440].map((width) => `/lion-${width}.webp ${width}w`).join(',')}
      sizes="(max-width: 900px) 80vw, 720px"
      width={1440}
      height={810}
      alt="Lion jaune en 3D"
    />
  </section>
);

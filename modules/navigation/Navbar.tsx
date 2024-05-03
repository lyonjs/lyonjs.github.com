import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';
import { NavLink } from './links/NavLink';
import styles from './Navbar.module.css';

export const Navbar: FC<HTMLAttributes<HTMLElement>> = ({ className }) => (
  <nav className={classNames(styles.navbar, className)}>
    <ul>
      <li>
        <NavLink href="/">Accueil</NavLink>
      </li>
      <li>
        <NavLink href={'/evenements-precedents'} activeOnNestedRoute>
          Évènements
        </NavLink>
      </li>
      <li>
        <NavLink href="/a-propos">À&nbsp;propos</NavLink>
      </li>
      <li>
        <NavLink href="/devenir-sponsor">Devenir&nbsp;sponsor</NavLink>
      </li>
      <li>
        <NavLink href="/code-de-conduite">Code&nbsp;de&nbsp;conduite</NavLink>
      </li>
    </ul>
  </nav>
);

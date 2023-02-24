import styles from './MobileNavigationPanel.module.css';
import { FC, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { SocialLinks } from '../../../header/SocialLinks';
import { Navbar } from '../../Navbar';

type Props = HTMLAttributes<HTMLElement> & { expanded: boolean };

export const MobileNavigationPanel: FC<Props> = ({ expanded, className, ...props }) => (
  <div className={classnames(styles.mobilePanel, { [styles.expanded]: expanded }, className)} {...props}>
    <Navbar />
    <SocialLinks />
  </div>
);

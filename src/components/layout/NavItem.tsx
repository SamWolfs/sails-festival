import * as React from "react";
import styles from './NavItem.module.scss';

export const NavItem = (props: NavItemProps) => {
  return (
    <div className={`level-item ${styles.navItem}`}>
      <a className="is-size-6" href={props.route}>{props.title}</a>
    </div>
  );
};

export interface NavItemProps {
    route: string;
    title: string;
}

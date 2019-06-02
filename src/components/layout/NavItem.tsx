import * as React from "react";
import styles from './NavItem.module.scss';
import { NavLink } from "react-router-dom";

export const NavItem = (props: NavItemProps) => {
  return (
    <div className={`navbar-item ${styles.navItem}`}>
      <NavLink className="is-size-5" activeClassName={styles.linkActive} to={props.route}>{props.title}</NavLink>
    </div>
  );
};

export interface NavItemProps {
    route: string;
    title: string;
}

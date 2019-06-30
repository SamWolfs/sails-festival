import * as React from "react";
import { SailsLogo } from "./SailsLogo";
import { NavItem } from "./NavItem";
import styles from "./Header.module.scss";

export const Header = (props: HeaderProps) => {
  return (
    <header className={styles.container}>
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <SailsLogo />
          <a
            onClick={props.toggleMenu}
            role="button"
            className={`navbar-burger ${props.expanded ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className={`navbar-menu ${props.expanded ? 'is-active' : ''}`}>
          <div className="navbar-start" />
          <div className="navbar-end">
            <NavItem title="Home" route="/home" />
            <NavItem title="Lineup" route="/lineup" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export interface HeaderProps {
  expanded: boolean;
  toggleMenu: any;
}

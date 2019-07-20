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
            <NavItem title="Home" route="/home" onClick={props.toggleMenu} />
            <NavItem title="Lineup" route="/lineup" onClick={props.toggleMenu} />
            <NavItem title="About" route="/about" onClick={props.toggleMenu} />
            <a style={{ marginLeft: '10px' }} href="https://entrytickets.be/sails/festival?fbclid=IwAR1IgEbfJ3krn0P2jUOxEHQt9Lhqwl30uqzR9p3L6ty_6IueRRXf8-TadfQ" className="button is-primary is-inverted is-rounded">Tickets</a>
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

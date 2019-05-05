import * as React from "react";
import { SailsLogo } from "./SailsLogo";
import { NavItem } from "./NavItem";

export const Header = () => {
  return (
    <header>
      <nav className="level">
        <div className="level-left">
          <SailsLogo />
        </div>
        <div className="level-right">
          <NavItem title="Home" route="/home" />
          <NavItem title="Lineup" route="/lineup" />
        </div>
      </nav>
    </header>
  );
};

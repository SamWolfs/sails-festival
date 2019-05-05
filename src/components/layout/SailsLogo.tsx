import * as React from "react";
import logo from "../../assets/images/sails-logo.png";
import name from "../../assets/images/sails-name.png";
import styles from "./SailsLogo.module.scss";
import { Link } from 'react-router-dom';

export const SailsLogo = () => {
  return (
    <div>
      <Link to="/home">
        <img className={styles.brandLogo} src={logo} alt="" />
        <img className={styles.brandName} src={name} alt="Sails" />
      </Link>
    </div>
  );
};

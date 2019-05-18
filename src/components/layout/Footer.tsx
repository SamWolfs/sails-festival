import * as React from "react";
import logo from "../../assets/images/sails-logo.png";
import styles from './Footer.module.scss';
import { FAwesomeButton, FAwesomeButtonProps } from "../FAwesomeButton";

export const Footer = () => {
  const socialPlatforms: FAwesomeButtonProps[] = [
    { link: 'https://www.facebook.com/SAILS-314736112299811/', logo: ['fab','facebook-f']},
    { link: 'https://www.instagram.com/sailsfestival/', logo: ['fab','instagram']}
  ]

  return (
    <footer>
      <div className={`level ${styles.container}`}>
        <div className="level-item">
          {socialPlatforms.map((button: FAwesomeButtonProps) => {
            return <FAwesomeButton {...button} />
          })}
        </div>
        <div className="level-item">
          <a href="www.sailsfestival.be"><img className={styles.logo} src={logo} /></a>
        </div>
        <div className="level-item">
          <FAwesomeButton link="mailto:organisatie@sailsfestival.be" logo={['far', 'envelope']} />
          <FAwesomeButton link="https://goo.gl/maps/rR3Wsjt1uGzddLdaA" logo={['far', 'map']} />
        </div>
      </div>
    </footer>
  );
};

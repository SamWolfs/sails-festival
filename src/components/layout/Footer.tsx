import * as React from "react";
import logo from "../../assets/images/sails-logo.png";
import styles from './Footer.module.scss';
import { FAwesomeButton } from "../buttons/FAwesomeButton";
import { SocialPlatform, SocialButtonProps, SocialButton } from "../buttons/SocialButton";

export const Footer = () => {
  const socialPlatforms: SocialButtonProps[] = [
    { link: 'https://www.facebook.com/SAILS-314736112299811/', platform: SocialPlatform.Facebook},
    { link: 'https://www.instagram.com/sailsfestival/', platform: SocialPlatform.Instagram}
  ];

  return (
    <footer>
      <div className={`level ${styles.container}`}>
        <div className="level-item">
          {socialPlatforms.map((button: SocialButtonProps) => {
            return <SocialButton {...button} />
          })}
        </div>
        <div className="level-item">
          <a href="www.sailsfestival.be"><img className={styles.logo} src={logo} /></a>
        </div>
        <div className="level-item">
          <FAwesomeButton link="mailto:organisatie@sailsfestival.be" icon={['far', 'envelope']} />
          <FAwesomeButton link="https://goo.gl/maps/rR3Wsjt1uGzddLdaA" icon={['far', 'map']} />
        </div>
      </div>
    </footer>
  );
};

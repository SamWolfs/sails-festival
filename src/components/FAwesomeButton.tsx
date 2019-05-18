import React from "react";
import styles from "./FAwesomeButton.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const FAwesomeButton: React.FC<FAwesomeButtonProps> = (button: FAwesomeButtonProps) => {
  return (
    <div className={styles.container}>
        <a href={button.link}><FontAwesomeIcon icon={button.logo}/></a>
    </div>
  );
};

export interface FAwesomeButtonProps {
    logo: IconProp;
    link: string;
}

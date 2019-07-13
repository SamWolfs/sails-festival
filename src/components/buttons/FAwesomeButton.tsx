import React from "react";
import styles from "./FAwesomeButton.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const FAwesomeButton: React.FC<FAwesomeButtonProps> = (button: FAwesomeButtonProps) => {
  return (
    <div className={styles.container}>
        <a href={button.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={button.icon}/></a>
    </div>
  );
};

export interface FAwesomeButtonProps {
    icon: IconProp;
    link: string;
}

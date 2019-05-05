import React from "react";
import styles from "./Polaroid.module.scss";

export const Polaroid: React.FC<PolaroidProps> = (artist: PolaroidProps) => {
  return (
    <div className={styles.polaroidContainer}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.polaroidImage}
          src={artist.image}
          alt={artist.name}
        />
      </div>
      <div className={styles.polaroidTitle}>{artist.name}</div>
    </div>
  );
};

export interface PolaroidProps {
    image: string;
    name: string;
}

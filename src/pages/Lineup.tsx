import * as React from "react";
import artists from "../assets/data/lineup.json";
import styles from "./Lineup.module.scss";
import LazyLoad from "react-lazy-load";
import { PerformanceProps, Performance } from "../components/Performance";

export const Lineup = () => {
  return (
    <>
      <div className={styles.title}>Lineup</div>
      <div className={styles.container}>
        {artists.map((artist: ArtistCardProps) => (
          <LazyLoad id={artist.key} key={artist.key} height={400} offset={700}>
            <ArtistCard {...artist} />
          </LazyLoad>
        ))}
      </div>
    </>
  );
};

export const ArtistCard = (props: ArtistCardProps) => {
  return (
    <div className={styles.cardBody}>
      <img className={styles.lineupImage} src={props.image} />
      <div className={styles.descriptionContainer}>
        <div className={styles.artist}>
          <h3>{props.name}</h3>
          <hr />
        </div>
        <div className={styles.description}>{props.description}</div>
      </div>
      <div className={styles.playlistContainer}>
        <Performance {...props.performance} />
        {props.playlist ? (
          <iframe
            className={styles.playlist}
            src={props.playlist}
            width="300"
            height="80"
            allow="encrypted-media"
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export interface ArtistCardProps {
  key: string;
  name: string;
  description: string;
  image: string;
  playlist: string;
  performance: PerformanceProps;
}

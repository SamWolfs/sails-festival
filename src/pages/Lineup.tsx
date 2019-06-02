import * as React from "react";
import artists from "../assets/data/lineup.json";
import styles from "./Lineup.module.scss";
import LazyLoad from "react-lazy-load";
import { Performance, PerformanceProps } from "../components/Performance";
import {
  SocialButton,
  SocialPlatform
} from "../components/buttons/SocialButton";

export const Lineup = () => {
  const [selectedArtist, setSelectedArtist] = React.useState(artists[0]);

  const selectArtist = (index: number) => {
    setSelectedArtist(artists[index]);
  };

  return (
    <>
      <div className={styles.title}>Lineup</div>
      <div className={styles.pageContainer}>
        <div className={styles.container}>
          {artists.map((artist: ArtistProps, index: number) => (
            <ArtistCard index={index} {...artist} select={selectArtist} />
          ))}
        </div>
        {selectedArtist ? <ArtistDetail {...selectedArtist} /> : <></>}
      </div>
    </>
  );
};

export const ArtistCard = (props: ArtistCardProps) => {
  return (
    <div className={styles.artistContainer}>
      <LazyLoad height={275} width={275} offset={700}>
        <img
          onClick={() => props.select(props.index)}
          className={styles.lineupImage}
          src={props.image}
        />
      </LazyLoad>

      <div className={styles.artistName}>{props.name}</div>
    </div>
  );
};

const ArtistDetail = (props: ArtistProps) => {
  return (
    <div className={styles.detailContainer}>
      <h3>{props.name}</h3>
      <div className={styles.descriptionContainer}>{props.description}</div>
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
      <div className={styles.socialsContainer}>
        {Object.keys(props.socials).map((key: string) => {
          return (
            <SocialButton
              link={props.socials[key]}
              platform={key as SocialPlatform}
            />
          );
        })}
      </div>
    </div>
  );
};

export interface ArtistProps {
  key: string;
  name: string;
  description: string;
  image: string;
  playlist: string;
  performance: PerformanceProps;
  socials: any;
}

export interface ArtistCardProps {
  index: number;
  key: string;
  name: string;
  description: string;
  image: string;
  playlist: string;
  performance: PerformanceProps;
  select: any;
}

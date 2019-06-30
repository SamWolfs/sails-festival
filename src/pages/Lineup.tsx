import * as React from "react";
import artists from "../assets/data/lineup.json";
import styles from "./Lineup.module.scss";
import LazyLoad from "react-lazy-load";
import { Performance, PerformanceProps } from "../components/Performance";
import {
  SocialButton,
  SocialPlatform
} from "../components/buttons/SocialButton";

export const Lineup = (props: any) => {
  const initLineupDetail = (): ArtistProps | undefined => {
    let artist: ArtistProps | undefined;
    if (props.location.hash) {
      artist = artists.find(artist => artist.key === props.location.hash.slice(1));
    }

    return artist;
  }

  const [selectedArtist, setSelectedArtist] = React.useState(initLineupDetail());
  const [selectedDay, setSelectedDay] = React.useState(" ");

  const selectArtist = (index: number) => {
    console.log(props.location.hash);
    setSelectedArtist(artists[index]);
  };

  return (
    <>
      <div className={styles.title}>Lineup</div>
      <div className="buttons has-addons">
        <button
          className={`button ${
            selectedDay === " " ? "is-primary is-selected" : "is-transparent"
          }`}
          onClick={() => setSelectedDay(" ")}
        >
          All
        </button>
        <button
          className={`button ${
            selectedDay === "VRIJDAG" ? "is-primary is-selected" : "is-transparent"
          }`}
          onClick={() => setSelectedDay("VRIJDAG")}
        >
          Friday
        </button>
        <button
          className={`button ${
            selectedDay === "ZATERDAG" ? "is-primary is-selected" : "is-transparent"
          }`}
          onClick={() => setSelectedDay("ZATERDAG")}
        >
          Saturday
        </button>
      </div>
      <div className={styles.pageContainer}>
        <div className={styles.container}>
          {artists
            .filter((artist: ArtistProps) =>
              artist.performance.date.includes(selectedDay)
            )
            .map((artist: ArtistProps, index: number) => (
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

export interface LineupProps {
  artist?: string;
}

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

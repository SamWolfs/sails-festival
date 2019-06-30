import * as React from "react";
import { ArtistDetail } from "./Lineup";
import artists from "../assets/data/lineup.json";
import styles from "./Artist.module.scss";

export const Artist = (props: any) => {
  const getArtist = () => {
    return (
      artists.find(artist => artist.key === props.match.params.artist) ||
      artists[0]
    );
  };

  const [artist, setArtist] = React.useState(getArtist());

  return (
    <div className={styles.pageContainer}>
      <ArtistDetail {...artist} />
    </div>
  );
};

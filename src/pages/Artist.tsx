import * as React from "react";
import { ArtistDetail } from "./Lineup";
import artists from "../assets/data/lineup.json";
import styles from "./Artist.module.scss";
import { Helmet } from "react-helmet";

export const Artist = (props: any) => {
  const getArtist = () => {
    return (
      artists.find(artist => artist.key === props.match.params.artist) ||
      artists[0]
    );
  };

  const [artist, setArtist] = React.useState(getArtist());

  return (
    <>
    <Helmet>
      <title>{artist.name}</title>
      <meta name="description" content={artist.description} />
      <meta name="og:image" content={artist.image} />
    </Helmet>
      <div className={styles.pageContainer}>
        <ArtistDetail {...artist} />
      </div>
    </>
  );
};

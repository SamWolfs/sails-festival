import * as React from "react";
import artists from "../assets/data/lineup.json";
import styles from "./Lineup.module.scss";
import LazyLoad from "react-lazy-load";
import { Performance, PerformanceProps } from "../components/Performance";
import {
  SocialButton,
  SocialPlatform
} from "../components/buttons/SocialButton";
import enquire from "enquire.js";
import { Link } from "react-router-dom";

export const Lineup = (props: any) => {
  type ArtistDetailType = "Desktop" | "Mobile";

  const initLineupDetail = (): ArtistProps | undefined => {
    let artist: ArtistProps | undefined;
    if (props.location.hash) {
      artist = artists.find(
        artist => artist.key === props.location.hash.slice(1)
      );
    }

    return artist;
  };

  React.useEffect(() => {
    enquire.register("screen and (max-width: 767px)", {
      deferSetup: true,
      match: () => {
        setDetailType("Mobile");
      }
    });
    enquire.register("screen and (min-width: 768px)", {
      deferSetup: true,
      match: () => {
        setDetailType("Desktop");
      }
    });

    return () => {
      enquire.unregister("screen and (max-width: 767px)");
      enquire.unregister("screen and (min-width: 768px)");
    };
  });

  const [selectedArtist, setSelectedArtist] = React.useState(
    initLineupDetail()
  );
  const [selectedDay, setSelectedDay] = React.useState(" ");
  const [detailType, setDetailType] = React.useState<ArtistDetailType>(
    "Desktop"
  );

  const selectArtist = (key: string) => {
    setSelectedArtist(artists.find(artist => artist.key === key));
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
            selectedDay === "VRIJDAG"
              ? "is-primary is-selected"
              : "is-transparent"
          }`}
          onClick={() => setSelectedDay("VRIJDAG")}
        >
          Friday
        </button>
        <button
          className={`button ${
            selectedDay === "ZATERDAG"
              ? "is-primary is-selected"
              : "is-transparent"
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
            .map(
              (artist: ArtistProps) =>
                (detailType === "Desktop" && (
                  <ArtistCard key={artist.key} artistKey={artist.key} {...artist} select={selectArtist} />
                )) ||
                (detailType === "Mobile" && (
                  <Link key={artist.key} to={`/lineup/${artist.key}`}>
                    <ArtistCard
                      artistKey={artist.key}
                      {...artist}
                      select={selectArtist}
                    />
                  </Link>
                ))
            )}
        </div>
        {selectedArtist ? (
          <div className={styles.artistDetailWrapper}>
            <ArtistDetail {...selectedArtist} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export const ArtistCard = (artist: ArtistCardProps) => {
  return (
    <div
      className={styles.artistContainer}
      onClick={() => artist.select(artist.artistKey)}
    >
      <LazyLoad height={275} width={275} offset={700}>
        <img
          className={styles.lineupImage}
          src={artist.image}
          alt={artist.name}
        />
      </LazyLoad>
      <div className={styles.artistName}>{artist.name}</div>
    </div>
  );
};

export const ArtistDetail = (props: ArtistProps) => {
  return (
    <div className={styles.detailContainer}>
      <h3>{props.name}</h3>
      <div className={styles.descriptionContainer}>{props.description}</div>
      <Performance {...props.performance} />
      {props.playlist ? (
        <iframe
          title={`${props.key}-playlist`}
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
              key={props.socials[key]}
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
  artistKey: string;
  name: string;
  description: string;
  image: string;
  playlist: string;
  performance: PerformanceProps;
  select: any;
}

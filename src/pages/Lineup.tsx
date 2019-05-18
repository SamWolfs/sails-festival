import * as React from "react";
import artists from "../assets/data/lineup.json";
import styles from "./Lineup.module.scss";
import LazyLoad from 'react-lazy-load';

export const Lineup = () => {
//   return (
//     <div className={styles.container}>
//         {artists.map((artist: ArtistCardProps) => (
//             <LazyLoad key={artist.name} height={400} offset={700}>
//                 <ArtistCard name={artist.name} description={artist.description} image={artist.image} playlist={artist.playlist} />
//             </LazyLoad>
//         ))}
//     </div>
//   );
    return (
        <></>
    );
};

export const ArtistCard = (props: ArtistCardProps) => {
    return (
        <div className={styles.cardBody}>
            <img className={styles.lineupImage} src={props.image} />
            <div className={styles.descriptionContainer}><h3>{props.name}</h3><p>{props.description}</p></div>
            <div className={styles.playlistContainer}>{ props.playlist ? <iframe className={styles.playlist} src={props.playlist} width="300" height="80" allow="encrypted-media"></iframe> : <></> }</div>
        </div>
    );
}

export interface ArtistCardProps {
    name: string;
    description: string;
    image: string;
    playlist: string;
}
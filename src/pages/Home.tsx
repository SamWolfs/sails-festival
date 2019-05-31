import * as React from "react";
import logo from "../assets/images/sails-logo.png";
import styles from "./Home.module.scss";
import { Polaroid, PolaroidProps } from "../components/Polaroid";
import Slider from "react-slick";
import artists from "../assets/data/lineup.json";
import sponsors from "../assets/data/sponsors.json";
import playlists from "../assets/data/playlists.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Home = () => {
  return (
    <>
      <Banner />
      <Subtitle text="The Artists" />
      <LineupCarousel />
      <Separator />
      <Subtitle text="The 2019 Playlists" />
      <Playlist />
      <Separator />
      <Subtitle text="Our Sponsors" />
      <SponsorCarousel />
      <Separator />
    </>
  );
};

const Banner = () => {
  return (
    <>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerColumn}>
          <img className={styles.bannerLogo} src={logo} />
          {/* <h1 className={styles.bannerTitle}>Sails</h1> */}
        </div>
        <div className={styles.bannerColumn}>
          <div className={styles.bannerInfo}>OUTDOOR MUSIC FESTIVAL</div>
          <div className={styles.bannerInfo}>
            6 &amp; 7 SEPTEMBER OPHOVEN, BE
          </div>
          <div className={styles.bannerInfo}>3 STAGES</div>
        </div>
      </div>
    </>
  );
};

const LineupCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    lazyload: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider className={styles.lineupCarousel} {...settings}>
      {artists.map((artist: PolaroidProps) => (
        <Polaroid key={artist.name} name={artist.name} image={artist.image} />
      ))}
    </Slider>
  );
};

const Playlist = () => {
  const [currentTab, setCurrentTab] = React.useState('youtube');
  const sailsPlaylists: PlaylistItem = playlists;
  const switchTab = (tab: string, e: any) => {
    if (tab in playlists && tab !== currentTab) {
      setCurrentTab(tab);
    }
  };

  return (
    <div className={styles.playlistContainer}>
      <div className={`tabs is-centered is-medium ${styles.tabsContainer}`}>
        <ul>
          <li className={currentTab === 'youtube' ? 'is-active' : ''}>
            <a onClick={(e) => switchTab('youtube', e)}>
              <FontAwesomeIcon icon={["fab", "youtube"]} />
              <span>Youtube</span>
            </a>
          </li>
          <li className={currentTab === 'spotify' ? 'is-active' : ''}>
            <a onClick={(e) => switchTab('spotify', e)}>
              <FontAwesomeIcon icon={["fab", "spotify"]} />
              <span>Spotify</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <iframe
          className={styles.ytPlayer}
          id="ytplayer"
          width="640px"
          height="360px"
          src={sailsPlaylists[currentTab]}
        />
      </div>
    </div>
  );
};

const SponsorCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    lazyload: true,
    autoplaySpeed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      {sponsors.map((sponsor: SponsorProps, index: number) => {
        let offset = index % 2 === 0 ? "0 20px 0 0" : "0px";
        return (
          <a style={{ margin: offset }} href={sponsor.url}>
            <img src={sponsor.logo} alt={sponsor.name} />
          </a>
        );
      })}
    </Slider>
  );
};

const Separator = () => {
  return <div className={styles.separator} />;
};

const Subtitle = (props: any) => {
  return (
    <div className={styles.subtitle}>
      <h2>{props.text}</h2>
      <hr />
    </div>
  );
};

interface SponsorProps {
  name: string;
  logo: string;
  url: string;
}

interface PlaylistItem {
  [key: string]: string;
}
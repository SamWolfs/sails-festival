import * as React from "react";
import logo from "../assets/images/sails-logo.png";
import styles from "./Home.module.scss";
import { Polaroid } from "../components/Polaroid";
import Slider from "react-slick";
import artists from "../assets/data/lineup.json";
import sponsors from "../assets/data/sponsors.json";
import playlists from "../assets/data/playlists.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArtistProps } from "./Lineup";
import { Link } from "react-router-dom";
import enquire from "enquire.js";
import Helmet from "react-helmet";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sails 2019 | Maasplassen Ophoven</title>
        <meta name="description" content="Al twee zomers is Sails Festival het trefpunt voor jong en oud aan de oevers van de maasplassen. Hoog tijd dus voor een derde editie, en wat voor één… De derde editie omhelst een bonte mix van artiesten, gaat door op de meest idyllische setting van Ophoven (Kinrooi) en is verspreid over twee dagen. Vrijdag 6 september schiet het festival uit de startblokken met Disco & Funk. Draaiend met vinyl platen krijgen artiesten als Jef Klock, Solco, Bearsome & Cheap Charly gegarandeerd het festivalterrein aan het dansen. Zaterdag 7 september zet Sails voort met Limburgs talent van alle leeftijden. De backyard Giants uit Maaseik brengen Maaslandse Blues met hun diepe, warme klanken. Met bands als Baltimore en The Candle Bags zet Sails veelbelovend jong gitaargeweld op het podium. Als kers op de taart zakken de lokale helden van Schmutz af naar hun thuisstreek voor een optreden van formaat. Nu al overdonderd? Sails slaagde erin om internationale naam DJ Dunya te strikken, een vaste waarde in de electro-swing scene. Hij staat alvast te popelen om de menigte helemaal te laten losgaan op swingende muziek. Daar stopt het natuurlijk niet bij, op zaterdag bemannen talentvolle artiesten (Mambele, Fourflake, Vermile, Pastige) het ‘bosje’ waar funky elektronische muziek in het thema staat." />
      </Helmet>
      <Banner />
      <Separator />
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
          <img className={styles.bannerLogo} src={logo} alt="sails-logo" />
        </div>
        <div className={styles.bannerColumn}>
          <div className={styles.bannerInfo}>OUTDOOR MUSIC FESTIVAL</div>
          <div className={styles.bannerInfo}>
            6 &amp; 7 SEPTEMBER OPHOVEN, BE
          </div>
        </div>
      </div>
      <div>
        <video width="100%" height="auto" controls>
          <source src="sails-movie.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

const LineupCarousel = () => {
  const [urlSeparator, setUrlSeparator] = React.useState("/");

  React.useEffect(() => {
    enquire.register("screen and (max-width: 767px)", {
      deferSetup: true,
      match: () => {
        if (urlSeparator !== "/") setUrlSeparator("/");
      }
    });
    enquire.register("screen and (min-width: 768px)", {
      deferSetup: true,
      match: () => {
        if (urlSeparator !== "#") setUrlSeparator("#");
      }
    });

    return () => {
      enquire.unregister("screen and (max-width: 767px)");
      enquire.unregister("screen and (min-width: 768px)");
    };
  });

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
      {artists.map((artist: ArtistProps) => {
        const link = `/lineup${urlSeparator}${artist.key}`;
        return (
          <Link key={artist.name} to={link}>
            <Polaroid name={artist.name} image={artist.image} />
          </Link>
        );
      })}
    </Slider>
  );
};

const Playlist = () => {
  const [currentTab, setCurrentTab] = React.useState("soundcloud");
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
          <li className={currentTab === "soundcloud" ? "is-active" : ""}>
            <a onClick={e => switchTab("soundcloud", e)}>
              <FontAwesomeIcon icon={["fab", "soundcloud"]} />
              <span>Soundcloud</span>
            </a>
          </li>
          <li className={currentTab === "spotify" ? "is-active" : ""}>
            <a onClick={e => switchTab("spotify", e)}>
              <FontAwesomeIcon icon={["fab", "spotify"]} />
              <span>Spotify</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <iframe
          title={`openshot${currentTab}-playlist`}
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
    autoplaySpeed: 1500,
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
        return (
          <div key={sponsor.name} className={styles.sponsorCard}>
            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
              <img src={sponsor.logo} alt={sponsor.name} />
            </a>
          </div>
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

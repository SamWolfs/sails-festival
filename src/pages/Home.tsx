import * as React from "react";
import logo from "../assets/images/sails-logo.png";
import styles from "./Home.module.scss";
import { Polaroid, PolaroidProps } from "../components/Polaroid";
import Slider from "react-slick";
import artists from "../assets/data/lineup.json";

export const Home = () => {
  return (
    <>
      <Banner />
      <Subtitle text="The Artists" />
      <LineupCarousel />
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

const Subtitle = (props: any) => {
  return (
    <div className={styles.subtitle}>
      <h2>{props.text}</h2>
      <hr />
    </div>
  );
};

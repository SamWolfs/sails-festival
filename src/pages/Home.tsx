import * as React from 'react';
import logo from '../images/sails-logo.png';
import styles from './Home.module.scss';

export const Home = () => {
    return (
        <div>
            <Banner />
        </div>
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
                <div className={styles.bannerInfo}>6 &amp; 7 SEPTEMBER OPHOVEN, BE</div>
                <div className={styles.bannerInfo}>3 STAGES</div>
            </div>
        </div>
        <h1 className={styles.bannerTitle}>Sails</h1>
        </>
    );
};
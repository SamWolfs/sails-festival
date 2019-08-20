import * as React from "react";
import styles from "./About.module.scss";
import { Helmet } from "react-helmet";

export const About = (props: any) => {
  return (
    <>
      <Helmet>
        <title>Sails 2019 | Maasplassen Ophoven</title>
        <meta
          name="description"
          content="Al twee zomers is Sails Festival het trefpunt voor jong en oud aan de oevers van de maasplassen. Hoog tijd dus voor een derde editie, en wat voor één… De derde editie omhelst een bonte mix van artiesten, gaat door op de meest idyllische setting van Ophoven (Kinrooi) en is verspreid over twee dagen. Vrijdag 6 september schiet het festival uit de startblokken met Disco & Funk. Draaiend met vinyl platen krijgen artiesten als Jef Klock, Solco, Bearsome & Cheap Charly gegarandeerd het festivalterrein aan het dansen. Zaterdag 7 september zet Sails voort met Limburgs talent van alle leeftijden. De backyard Giants uit Maaseik brengen Maaslandse Blues met hun diepe, warme klanken. Met bands als Baltimore en The Candle Bags zet Sails veelbelovend jong gitaargeweld op het podium. Als kers op de taart zakken de lokale helden van Schmutz af naar hun thuisstreek voor een optreden van formaat. Nu al overdonderd? Sails slaagde erin om internationale naam DJ Dunya te strikken, een vaste waarde in de electro-swing scene. Hij staat alvast te popelen om de menigte helemaal te laten losgaan op swingende muziek. Daar stopt het natuurlijk niet bij, op zaterdag bemannen talentvolle artiesten (Mambele, Fourflake, Vermile, Pastige) het ‘bosje’ waar funky elektronische muziek in het thema staat."
        />
      </Helmet>
      <div className={styles.pageContainer}>
        <div className={styles.colContainer}>
          <div className={styles.subtitle}>
            <h4 className="is-size-4">Who</h4>
            <hr />
          </div>
          <p className={styles.description}>
            Sails wordt mede georganiseerd door zeescouting Pebbles. Het
            festival vindt plaats op het terrein van de scouting group en biedt
            een directe toegang tot de maasplassen. Elke lekker pint of frisse
            cocktail wordt dan ook voorgeschoteld door iemand met een passie
            voor zeilen, scouts, jeugd en deze ontzettend mooie streek.
          </p>
          <div className={styles.subtitle}>
            <h4 className="is-size-4">What</h4>
            <hr />
          </div>
          <p className={styles.description}>
            Al twee zomers is Sails Festival het trefpunt voor jong en oud aan
            de oevers van de maasplassen. Hoog tijd dus voor een derde editie,
            en wat voor één… De derde editie omhelst een bonte mix van
            artiesten, gaat door op de meest idyllische setting van Ophoven
            (Kinrooi) en is verspreid over twee dagen.{" "}
            <b>Vrijdag 6 september </b>
            schiet het festival uit de startblokken met Disco & Funk. Draaiend
            met vinyl platen krijgen artiesten als Jef Klock, Solco, Bearsome &
            Cheap Charly gegarandeerd het festivalterrein aan het dansen.
            <b> Zaterdag 7 september</b> zet Sails voort met Limburgs talent van
            alle leeftijden. De backyard Giants uit Maaseik brengen Maaslandse
            Blues met hun diepe, warme klanken. Met bands als Baltimore en The
            Candle Bags zet Sails veelbelovend jong gitaargeweld op het podium.
            Als kers op de taart zakken de lokale helden van Schmutz af naar hun
            thuisstreek voor een optreden van formaat. Nu al overdonderd? Sails
            slaagde erin om internationale naam DJ Dunya te strikken, een vaste
            waarde in de electro-swing scene. Hij staat alvast te popelen om de
            menigte helemaal te laten losgaan op swingende muziek. Daar stopt
            het natuurlijk niet bij, op zaterdag bemannen talentvolle artiesten
            (Mambele, Fourflake, Vermile, Pastige) het ‘bosje’ waar funky
            elektronische muziek in het thema staat.
          </p>
        </div>
        <div className={styles.colContainer}>
          <div className={styles.subtitle}>
            <h4 className="is-size-4">When</h4>
            <hr />
          </div>
          <p className={styles.description}>
            Vrijdag 6 en Zaterdag 7 september 2019
          </p>
          <div className={styles.subtitle}>
            <h4 className="is-size-4">Where</h4>
            <hr />
          </div>
          <div className={styles.mapsContainer}>
            <iframe
              title="map"
              width="600"
              height="450"
              src="https://www.google.com/maps/embed/v1/place?q=place_id:EiFEYWxlcndlZyAzLCAzNjQwIEtpbnJvb2ksIEJlbGdpdW0iMBIuChQKEgmrtPY73cvARxEbKB6HSAW1pBADKhQKEgm_HqQu3cvARxE-5QSjz5GAHQ&key=AIzaSyA_ezpAtMwnAhQYwRPrJlk11pwFuYZCZaQ"
            />
          </div>
        </div>
      </div>
    </>
  );
};

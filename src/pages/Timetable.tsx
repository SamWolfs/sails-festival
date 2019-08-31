import * as React from "react";
import styles from "./Timetable.module.scss";
import { Helmet } from "react-helmet";

export const Timetable = (props: any) => {
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
        <div className={styles.title}>Timetable</div>
        <img src="https://drive.google.com/uc?export=view&id=1Tfi88xW7YJSMDtZuE9DZN5Vl6ndo81qy" alt="Sails 2019 Timetable" />
      </div>
    </>
  );
};

import * as React from "react";
import styles from "./Layout.module.scss";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";

export const Layout = (props: any) => {
  const [headerExpanded, setHeaderExpanded] = React.useState(false);
  const toggleMenu = () => {
    setHeaderExpanded(!headerExpanded);
  }

  const closeMenu = () => {
    setHeaderExpanded(false);
  }

  return (
    <div className={styles.container}>
      <Header expanded={headerExpanded} toggleMenu={toggleMenu} />
      <main onClick={closeMenu}>{props.children}</main>
      <Footer />
    </div>
  );
};

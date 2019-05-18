import * as React from "react";
import styles from "./Layout.module.scss";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";

export const Layout = (props: any) => {
  return (
    <div className={styles.container}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

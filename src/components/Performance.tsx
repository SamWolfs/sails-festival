import React from "react";
import styles from "./Performance.module.scss";

export const Performance: React.FC<PerformanceProps> = (performance: PerformanceProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.dateTime}>
        {performance.date}
      </div>
      {/* <div className={styles.dateTime}>
        {performance.time}
      </div>
      <div className={styles.stage}>
        {performance.stage}
      </div> */}
    </div>
  );
};

export interface PerformanceProps {
    stage: string;
    date: string;
    time: string;
}
import React from "react";
import styles from "./DisplayPairWrapper.module.scss";
import MatrixDisplay from "../MatrixDisplay";
import DotterSplit from "../DotterSplit/DotterSplit";

// eslint-disable-next-line react/prop-types
function DisplayPairWrapper({ value, title, isDotter }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.display_body}>
        <MatrixDisplay valueNum={value[0]} />
        <MatrixDisplay valueNum={value[1]} />

        {isDotter && <DotterSplit />}
      </div>
      <div className={styles.title_display}>{title} </div>
    </div>
  );
}

export default DisplayPairWrapper;

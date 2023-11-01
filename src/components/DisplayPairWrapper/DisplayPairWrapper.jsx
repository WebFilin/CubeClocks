import React from "react";
import styles from "./DisplayPairWrapper.module.scss";
import MatrixDisplay from "../MatrixDisplay";
import DotterSplit from "../DotterSplit/DotterSplit";

function DisplayPairWrapper({ value, title, isDotter }) {
  const [numbersValue, setNumbersValue] = React.useState([0, 0]);

  React.useEffect(() => {
    if (value) {
      setNumbersValue(value);
    }
  }, [value]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.display_body}>
        <MatrixDisplay valueNum={numbersValue[0]} />
        <MatrixDisplay valueNum={numbersValue[1]} />

        {isDotter && <DotterSplit />}
      </div>
      <div className={styles.title_display}>{title} </div>
    </div>
  );
}

export default DisplayPairWrapper;

import React from "react";
import styles from "./DisplayPairWrapper.module.scss";
import MatrixDisplay from "../MatrixDisplay";
import DotterSplit from "../DotterSplit/DotterSplit";
function DisplayPairWrapper({ value }) {
  const [isStyle, setIsStyle] = React.useState(styles.display_base);

  //   React.useEffect(() => {
  //     if (!isDotter) {
  //       setIsStyle(styles.display_noDotter);
  //     }
  //   }, [isDotter]);

  return (
    <div className={styles.wrapper}>
      <div className={isStyle}>
        {/* <MatrixDisplay valueNum={value1} /> */}
        {/* <MatrixDisplay valueNum={value2} /> */}

        {/* {isDotter && <DotterSplit />} */}
      </div>
      <div className={styles.title_display}>{value } </div>
    </div>
  );
}

export default DisplayPairWrapper;

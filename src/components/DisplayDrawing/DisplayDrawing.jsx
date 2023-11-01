import React from "react";
import styles from "./DisplayDrawing.module.scss";
import MatrixDisplay from "../MatrixDisplay/MatrixDisplay";
// import useMatchMedia from "../../hooks/useMatchMedia";
import DotterSplit from "../DotterSplit";
import store from "../../store/store";
import { observer } from "mobx-react-lite";
import DisplayPairWrapper from "../DisplayPairWrapper";

const DisplayDrawing = observer(() => {
  const { days, hours, minutes, seconds } = store.splitedTime;

 
  return (
    <div className={styles.wrapper}>
      <div className={styles.displays_body}>
<DisplayPairWrapper/>

        {/* <MatrixDisplay valueNum={store.splitedTime.days1} /> */}
        {/* <MatrixDisplay valueNum={store.splitedTime.days2} /> */}
        {/* <DotterSplit /> */}
        {/* <MatrixDisplay valueNum={store.splitedTime.hour1} /> */}
        {/* <MatrixDisplay valueNum={store.splitedTime.hour2} /> */}
        {/* <DotterSplit /> */}
        {/* <MatrixDisplay valueNum={store.splitedTime.minute1} /> */}
        {/* <MatrixDisplay valueNum={store.splitedTime.minute2} /> */}
        {/* <DotterSplit /> */}
        {/* <MatrixDisplay valueNum={store.splitedTime.second1} /> */}
        {/* <MatrixDisplay valueNum={store.splitedTime.second2} /> */}

        <div className={styles.wrapper_display}></div>
      </div>
    </div>
  );
});

export default DisplayDrawing;

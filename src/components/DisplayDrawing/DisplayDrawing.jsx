import React from "react";
import styles from "./DisplayDrawing.module.scss";
import MatrixDisplay from "../MatrixDisplay/MatrixDisplay";
// import useMatchMedia from "../../hooks/useMatchMedia";
import DotterSplit from "../DotterSplit";
import store from "../../store/store";
import { observer } from "mobx-react-lite";

const DisplayDrawing = observer(() => {
  //   const { isMobile, isTablet } = useMatchMedia();

  const [styleValue, setStyleValue] = React.useState(styles.wrapper);
  const [isHoursDotter, setIsHoursDotter] = React.useState(true);
  const [isMinuteDotter, setIsMinuteDotter] = React.useState(true);

  const ref = React.useRef();

  //   React.useEffect(() => {
  //     if (isMobile || isTablet) {
  //       const sumDisplay = ref.current.children.length;
  //       checkSumDisplay(sumDisplay);
  //     } else {
  //       baseStyle();
  //     }

  //     function checkSumDisplay(sumDisplay) {
  //       switch (sumDisplay) {
  //         case 2:
  //           setStyleValue(styles.wrapper_display);
  //           setIsHoursDotter(false);
  //           setIsMinuteDotter(true);
  //           break;

  //         case 3:
  //           setStyleValue(styles.wrapper_three);
  //           setIsHoursDotter(true);
  //           setIsMinuteDotter(false);
  //           break;

  //         case 4:
  //           setStyleValue(styles.wrapper_four);
  //           setIsHoursDotter(false);
  //           setIsMinuteDotter(true);
  //           break;

  //         default:
  //           baseStyle();
  //           break;
  //       }
  //     }

  //     function baseStyle() {
  //       setStyleValue(styles.wrapper_display);
  //       setIsMinuteDotter(true);
  //       setIsHoursDotter(true);
  //     }
  //   }, [isMobile, isTablet]);

  return (
    <div className={styles.wrapper}>
      <div ref={ref} className={styleValue}>
        <MatrixDisplay valueNum={store.splitedTime.days1} />
        <MatrixDisplay valueNum={store.splitedTime.days2} />
        <DotterSplit />
        <MatrixDisplay valueNum={store.splitedTime.hour1} />
        <MatrixDisplay valueNum={store.splitedTime.hour2} />
        <DotterSplit />
        <MatrixDisplay valueNum={store.splitedTime.minute1} />
        <MatrixDisplay valueNum={store.splitedTime.minute2} />
        <DotterSplit />
        <MatrixDisplay valueNum={store.splitedTime.second1} />
        <MatrixDisplay valueNum={store.splitedTime.second2} />

        <div className={styles.wrapper_display}></div>
      </div>
    </div>
  );
});

export default DisplayDrawing;

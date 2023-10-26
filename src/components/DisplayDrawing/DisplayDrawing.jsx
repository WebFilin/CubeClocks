import React from "react";
import styles from "./DisplayDrawing.module.scss";
// import DisplayPairWrapper from "../DisplayPairWrapper";
import MatrixDisplay from "../MatrixDisplay/MatrixDisplay";
import useMatchMedia from "../../hooks/useMatchMedia";
import DotterSplit from "../DotterSplit";
import displaySplitValuesTime from "../../utils/displaySplitValuesTime";

function DisplayDrawing({ time, isDays, isHour, isMinute }) {
  const { days1, days2, hour1, hour2, minute1, minute2, second1, second2 } =
    displaySplitValuesTime(time);

  const { isMobile, isTablet } = useMatchMedia();

  const [styleValue, setStyleValue] = React.useState(styles.wrapper);
  const [isHoursDotter, setIsHoursDotter] = React.useState(true);
  const [isMinuteDotter, setIsMinuteDotter] = React.useState(true);

  const ref = React.useRef();

  React.useEffect(() => {
    if (isMobile || isTablet) {
      const sumDisplay = ref.current.children.length;
      checkSumDisplay(sumDisplay);
    } else {
      baseStyle();
    }

    function checkSumDisplay(sumDisplay) {
      switch (sumDisplay) {
        case 2:
          setStyleValue(styles.wrapper_display);
          setIsHoursDotter(false);
          setIsMinuteDotter(true);
          break;

        case 3:
          setStyleValue(styles.wrapper_three);
          setIsHoursDotter(true);
          setIsMinuteDotter(false);
          break;

        case 4:
          setStyleValue(styles.wrapper_four);
          setIsHoursDotter(false);
          setIsMinuteDotter(true);
          break;

        default:
          baseStyle();
          break;
      }
    }

    function baseStyle() {
      setStyleValue(styles.wrapper_display);
      setIsMinuteDotter(true);
      setIsHoursDotter(true);
    }
  }, [isMobile, isTablet, isDays, isHour, isMinute]);

  return (
    <div className={styles.wrapper}>
      <div ref={ref} className={styleValue}>
        <MatrixDisplay valueNum={days1} />
        <MatrixDisplay valueNum={days2} />
        <DotterSplit />
        <MatrixDisplay valueNum={hour1} />
        <MatrixDisplay valueNum={hour2} />
        <DotterSplit />
        <MatrixDisplay valueNum={minute1} />
        <MatrixDisplay valueNum={minute2} />
        <DotterSplit />
        <MatrixDisplay valueNum={second1} />
        <MatrixDisplay valueNum={second2} />

        {isDays && (
          <div className={styles.wrapper_display}>
            {/* <DisplayPairWrapper
              value1={days1}
              value2={days2}
              title="Days"
              isDotter={true}
            /> */}
          </div>
        )}

        {isHour && (
          <div className={styles.wrapper_display}>
            {/* <DisplayPairWrapper
              value1={hour1}
              value2={hour2}
              title="Hours"
              isDotter={isHoursDotter}
            /> */}
          </div>
        )}

        {isMinute && (
          <div className={styles.wrapper_display}>
            {/* <DisplayPairWrapper
              value1={minute1}
              value2={minute2}
              title="Minute"
              isDotter={isMinuteDotter}
            /> */}
          </div>
        )}
        <div className={styles.wrapper_display}>
          {/* <DisplayPairWrapper
            value1={second1}
            value2={second2}
            title="Seconds"
            isDotter={false}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default DisplayDrawing;

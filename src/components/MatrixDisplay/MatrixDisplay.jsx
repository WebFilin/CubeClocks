import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./MatrixDisplay.module.scss";
import Cube from "../Cube";
import SetNumber from "../SetNumber/SetNumber";
import { observer } from "mobx-react-lite";

const ClockDisplay = observer(({ valueNum }) => {
  const [matrixForDispl, setMatrixForDispl] = React.useState([]);

  React.useEffect(() => {
    const matrix = SetNumber(valueNum).matrix;

    setMatrixForDispl(matrix);
  }, [valueNum]);

  return (
    <div className={styles.wrapper}>
      {matrixForDispl.map((row) => {
        return row.map((elem) => {
          return (
            <div key={uuidv4()} className={styles.cell}>
              {elem !== 0 ? <Cube /> : null}
            </div>
          );
        });
      })}
    </div>
  );
});

export default ClockDisplay;

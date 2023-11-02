import React from "react";
import styles from "./Timer.module.scss";
import DisplayDrawing from "../DisplayDrawing";
import Btn from "../UI/Btns/Btn";
import store from "../../store/store";
import { observer } from "mobx-react-lite";
import InputTimeWraper from "../InputTimeWraper";
import TimeCreation from "../TimeCreation";
import TimeCalculation from "../TimeCalculation";
import SplitValueForDisplays from "../SplitValueForDisplays/SplitValueForDisplays";
import ErrorsHandler from "../ErrorsHandler/ErrorsHandler";

const Timer = observer(() => {
  const [btnTitle, setBtnTitle] = React.useState("");

  const isStart = store.isStart;

  React.useEffect(() => {
    if (isStart) {
      setBtnTitle("Stop");
    } else {
      setBtnTitle("Start");
    }
  }, [isStart]);

  function handllerStart() {
    store.handleStartTimer();
  }

  function handlerRest() {
    store.handlerReset();
  }

  return (
    <div className={styles.wrapper}>
      <DisplayDrawing />

      <div className={styles.input_wrapper}>
        <InputTimeWraper />
      </div>
      <div className={styles.btns_wrapper}>
        <Btn funcClick={handllerStart} title={btnTitle} />
        <Btn funcClick={handlerRest} title="Reset" />
      </div>
      <TimeCreation />
      <TimeCalculation />
      <SplitValueForDisplays />
      <ErrorsHandler />
    </div>
  );
});

export default Timer;

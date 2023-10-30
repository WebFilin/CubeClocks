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

const Timer = () => {
  const [btnTitle, setBtnTitle] = React.useState("");

  React.useEffect(() => {
    if (store.isStart) {
      setBtnTitle("Stop");
    } else {
      setBtnTitle("Start");
    }
  }, [store.isStart]);

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
    </div>
  );
};

export default observer(Timer);

import React from "react";
import styles from "./Timer.module.scss";
// import getTimeForMiliseconds from "../../utils/getTimeForMiliseconds/getTimeForMiliseconds";
import DisplayDrawing from "../DisplayDrawing";
import Btn from "../UI/Btns/Btn";
import store from "../../store/store";
import { observer } from "mobx-react-lite";
import ChangeInputTimeValue from "../ChangeInputTimeValue/ChangeInputTimeValue";

const Timer = () => {
  const [inputValue, setInputValue] = React.useState("");

  const [isDays, setIsDays] = React.useState(true);
  const [isHour, setIsHour] = React.useState(true);
  const [isMinute, setIsMinute] = React.useState(true);

  const [time, setTime] = React.useState({
    days: 10,
    hour: 20,
    minute: 30,
    second: 40,
  });

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
      <DisplayDrawing
        time={time}
        //   isDays={isDays}
        //   isHour={isHour}
        //   isMinute={isMinute}
      />

      <div className={styles.input_wrapper}>
        <ChangeInputTimeValue />
      </div>
      <div className={styles.btns_wrapper}>
        <Btn funcClick={handllerStart} title={btnTitle} />
        <Btn funcClick={handlerRest} title="Reset" />
      </div>
    </div>
  );
};

export default observer(Timer);

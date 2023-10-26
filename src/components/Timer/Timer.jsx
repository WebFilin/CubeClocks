import React from "react";
import styles from "./Timer.module.scss";
import getTimeForMiliseconds from "../../utils/getTimeForMiliseconds/getTimeForMiliseconds";
import DisplayDrawing from "../DisplayDrawing";
import Btn from "../UI/Btns/Btn";

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

  function handllerStart(params) {}

  return (
    <div className={styles.wrapper}>
      <DisplayDrawing
        time={time}
        //   isDays={isDays}
        //   isHour={isHour}
        //   isMinute={isMinute}
      />

      <div className={styles.input_wrapper}></div>
      <div className={styles.btns_wrapper}>
        <Btn funcClick={handllerStart} value="Start" />
        <Btn funcClick={""} value="Reset" />
      </div>
    </div>
  );
};

export default React.memo(Timer);

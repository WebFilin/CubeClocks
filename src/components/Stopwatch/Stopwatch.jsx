import React from "react";
import styles from "./Stopwatch.module.scss";
import DisplayDrawing from "../DisplayDrawing";
import store from "../../store/store";
import { observer } from "mobx-react-lite";
import SplitValueForDisplays from "../SplitValueForDisplays/SplitValueForDisplays";
import ErrorsHandler from "../ErrorsHandler/ErrorsHandler";
import Btn from "../UI/Btns/Btn";

const Stopwatch = observer(() => {
  const [btnTitle, setBtnTitle] = React.useState("");

  const isStart = store.isStart;

  const [time, setTime] = React.useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    if (isStart) {
      setBtnTitle("Stop");
    } else {
      setBtnTitle("Start");
    }
  }, [isStart]);

  React.useEffect(() => {
    let timer;

    if (isStart) {
      time();
    } else {
      clearInterval(timer);
    }

    function time() {
      timer = setInterval(() => {
        setTime((prevTime) => {
          const newSeconds = prevTime.seconds + 1;
          const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
          const newHours = prevTime.hours + Math.floor(newMinutes / 60);

          return {
            hours: newHours,
            minutes: newMinutes % 60,
            seconds: newSeconds % 60,
          };
        });
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isStart]);

  React.useEffect(() => {
    const days = 0;
    const { hours, minutes, seconds } = time;

    const isHours = hours !== 0;
    const isMinutes = minutes !== 0;

    store.getValuesTime({ days, hours, minutes, seconds });
    store.handlerdisplayVisability(false, isHours, isMinutes);
  }, [time]);

  function handllerStart() {
    store.handleStartTimer();
  }

  function handlerRest() {
    const days = 0;

    setTime({
      seconds: 0,
      minutes: 0,
      hours: 0,
    });

    const { hours, minutes, seconds } = time;

    store.handlerReset();

    store.getValuesTime({ days, hours, minutes, seconds });
    store.handlerdisplayVisability(false, false, false);
  }

  return (
    <div className={styles.wrapper}>
      <DisplayDrawing displType="clock" />

      <div className={styles.btns_wrapper}>
        <Btn funcClick={handllerStart} title={btnTitle} />
        <Btn funcClick={handlerRest} title="Reset" />
      </div>

      <SplitValueForDisplays />
      <ErrorsHandler />
    </div>
  );
});

export default Stopwatch;

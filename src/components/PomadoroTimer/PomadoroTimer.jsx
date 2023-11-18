import React from "react";
import styles from "./PomadoroTimer.module.scss";
import DisplayDrawing from "../DisplayDrawing";
import store from "../../store/store";
import { observer } from "mobx-react-lite";
import SplitValueForDisplays from "../SplitValueForDisplays/SplitValueForDisplays";
import ErrorsHandler from "../ErrorsHandler/ErrorsHandler";
import Btn from "../UI/Btns/Btn";
import errorMessages from "../../constants/errorsMesages";

const PomadoroTimer = observer(() => {
  const [btnTitle, setBtnTitle] = React.useState("");

  const [pomodoroTime, setPomodoroTime] = React.useState(0);

  const [breaksCounter, setBreaksCounter] = React.useState(0);

  const [breakTime, setBreakTime] = React.useState(5);

  const [isBreakTitle, setIsBreakTitle] = React.useState(false);

  const isStart = store.isStart;

  React.useEffect(() => {
    store.handlerdisplayVisability(false, false, true);
  }, []);

  React.useEffect(() => {
    let timer;

    if (isStart) {
      getTime();
      setBtnTitle("Stop");
    } else {
      clearInterval(timer);
      setBtnTitle("Start");
    }

    function getTime() {
      if (pomodoroTime !== 0) {
        countdownTimer(pomodoroTime, breakTime);
      } else {
        store.handleStopTimer();
        store.handlerErrors(errorMessages.pomadoroError);
      }
    }

    function countdownTimer(pomodoro, breakTime) {
      let isPomodoro = true;
      let secondsBase = pomodoro;

      timer = setInterval(() => {
        if (secondsBase === 0) {
          // состояние перерыва
          if (isPomodoro) {
            secondsBase = breakTime * 60;
            setBreaksCounter((prev) => prev + 1);
            setIsBreakTitle(true);
            store.cubesStyleHandler();
          } else {
            secondsBase = pomodoro;
            setIsBreakTitle(false);
            store.cubesStyleHandler();
          }
          isPomodoro = !isPomodoro;
        }

        calcTime(secondsBase);

        secondsBase--;
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isStart, pomodoroTime, breakTime]);

  React.useEffect(() => {
    if (breaksCounter > 4) {
      handlerPomadoroTime(30);
      setBreaksCounter(0);
    }
  }, [breaksCounter]);

  function handllerStart() {
    if (!isStart) {
      store.handleStartTimer();
    } else {
      store.handleStopTimer();
    }
  }

  function handlerReset() {
    store.handlerReset();
    setPomodoroTime(0);
    setBreaksCounter(0);

    store.getValuesTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    store.handlerdisplayVisability(false, false, true);
  }

  function handlerPomadoroTime(value) {
    const secondsBase = value * 60;

    setPomodoroTime(secondsBase);

    calcTime(secondsBase);
  }

  function calcTime(valueTime) {
    let mins = Math.floor(valueTime / 60);
    let secs = valueTime % 60;

    const minutes = mins < 10 ? "0" + mins : mins;
    const seconds = secs < 10 ? "0" + secs : secs;

    store.getValuesTime({ days: 0, hours: 0, minutes, seconds });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.pomadoro_btns_value_wrapper}>
        <Btn funcClick={() => handlerPomadoroTime(15)} title="15 min" />
        <Btn funcClick={() => handlerPomadoroTime(25)} title="25 min" />
        <Btn funcClick={() => handlerPomadoroTime(35)} title="35 min" />
        <Btn funcClick={() => handlerPomadoroTime(45)} title="45 min" />
      </div>

      <div className={styles.break_title_wrapper}>
        {isBreakTitle && "Break!"}
      </div>

      <DisplayDrawing displType="clock" />

      <div className={styles.btns_wrapper}>
        <Btn funcClick={handllerStart} title={btnTitle} />
        <Btn funcClick={handlerReset} title="Reset" />
      </div>

      <SplitValueForDisplays />
      <ErrorsHandler />
    </div>
  );
});

export default PomadoroTimer;

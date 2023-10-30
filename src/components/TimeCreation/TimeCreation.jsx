import { observer } from "mobx-react-lite";
import store from "../../store/store";
import React from "react";

const TimeCreation = observer(() => {
  const isRuning = store.isStart;
  const isReset = store.isReset;

  React.useEffect(() => {
    let tickInterval;
    const currentTimeMilliseconds = Date.now();

    if (isRuning) {
      tickInterval = setInterval(() => {
        checkValueTime(currentTimeMilliseconds);
      }, 1000);
    } else {
      clearInterval(tickInterval);
    }

    function checkValueTime(currentTimeMilliseconds) {
      const checkboxValue = store.checkedTimeValue.name;
      const inputDate = store.inputTimeAndDate.date;
      const inputTime = store.inputTimeAndDate.time;
      const singleValue = store.inputSingleValue;

      switch (checkboxValue) {
        case "data and time":
          createDateAndTime(inputDate, inputTime);
          break;
        case "date":
          createDateAndTime(singleValue, "");
          break;

        case "hour":
          createDateAndTime("", singleValue);
          break;

        case "minutes":
          minutesHandler(singleValue, currentTimeMilliseconds);
          break;

        case "seconds":
          secondsHandler(singleValue, currentTimeMilliseconds);
          break;

        default:
          break;
      }
    }

    return () => clearInterval(tickInterval);
  }, [isRuning]);

  function secondsHandler(seconds, currentTimeMilliseconds) {
    const targetDateTime = new Date(currentTimeMilliseconds + seconds * 1000);

    timeCalculation(targetDateTime);
  }

  function minutesHandler(minutes, currentTimeMilliseconds) {
    const targetDateTime = new Date(
      currentTimeMilliseconds + minutes * 60 * 1000
    );

    timeCalculation(targetDateTime);
  }

  // Создаем время из значений инпутов даты и часов
  function createDateAndTime(date, time) {
    if (date && time) {
      const targetDate = new Date(`${date} ${time}`);
      timeCalculation(targetDate);
    } else if (date) {
      const targetDate = new Date(`${date} 00:00`);

      timeCalculation(targetDate);
    } else if (time) {
      const targetDate = new Date();
      const [hours, minutes] = time.split(":").map(Number);

      targetDate.setHours(hours, minutes, 0);

      timeCalculation(targetDate);
    }
  }

  // Расчитываем разницу времени, получаем актуальные значения времени
  function timeCalculation(targetDate) {
    const baseDate = new Date();

    const diffTime = targetDate - baseDate;

    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    if (diffTime > 0) {
      splitValueTime(days, hours, minutes, seconds);
    } else {
      store.handleStopTimer();
    }
  }

  // Разбиваем время на значения для каждого экрана отдельно
  function splitValueTime(days, hours, minutes, seconds) {
    const splitNum = (value) => {
      return value ? value.toString().split("").map(Number) : [];
    };

    const splitDays = splitNum(days);
    const splitHour = splitNum(hours);
    const splitMinute = splitNum(minutes);
    const splitSecond = splitNum(seconds);

    const splitedTime = {
      days1: days <= 9 ? 0 : splitDays[0],
      days2: days <= 9 ? days : splitDays[1],
      hour1: hours <= 9 ? 0 : splitHour[0],
      hour2: hours <= 9 ? hours : splitHour[1],
      minute1: minutes <= 9 ? 0 : splitMinute[0],
      minute2: minutes <= 9 ? minutes : splitMinute[1],
      second1: seconds <= 9 ? 0 : splitSecond[0],
      second2: seconds <= 9 ? seconds : splitSecond[1],
    };

    store.handlerSplitedTime(splitedTime);
  }
});

export default TimeCreation;

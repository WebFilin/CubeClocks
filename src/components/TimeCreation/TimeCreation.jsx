import { observer } from "mobx-react-lite";
import store from "../../store/store";
import React from "react";
import endTimes from "../../constants/endTime";

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

    if (isReset) {
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
  }, [isRuning, isReset]);

  function secondsHandler(seconds, currentTimeMilliseconds) {
    const targetDateTime = new Date(currentTimeMilliseconds + seconds * 1000);
    store.setTargetDate(targetDateTime);
  }

  function minutesHandler(minutes, currentTimeMilliseconds) {
    const targetDateTime = new Date(
      currentTimeMilliseconds + minutes * 60 * 1000
    );
    store.setTargetDate(targetDateTime);
  }

  // Создаем время из значений инпутов даты и часов
  function createDateAndTime(date, time) {
    if (date && time) {
      const targetDate = new Date(`${date} ${time}`);
      store.setTargetDate(targetDate);
    } else if (date) {
      const targetDate = new Date(`${date} ${endTimes.endDay}`);
      store.setTargetDate(targetDate);
    } else if (time) {
      const targetDate = new Date();
      const [hours, minutes] = time.split(":").map(Number);

      targetDate.setHours(hours, minutes, 0);
      store.setTargetDate(targetDate);
    }
  }

  return <></>;
});

export default TimeCreation;

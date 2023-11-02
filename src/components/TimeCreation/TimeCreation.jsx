import { observer } from "mobx-react-lite";
import store from "../../store/store";
import React from "react";
import endTimes from "../../constants/endTime";
import errorMessages from "../../constants/errorsMesages";

const TimeCreation = observer(() => {
  const isRuning = store.isStart;
  const isReset = store.isReset;

  const currentTimeMilliseconds = Date.now();

  React.useEffect(() => {
    let tickInterval;

    if (isRuning) {
      tickInterval = setInterval(() => {
        checkValueTime();
      }, 1000);
    } else {
      clearInterval(tickInterval);
    }

    if (isReset) {
      clearInterval(tickInterval);
    }

    function checkValueTime() {
      const { date, time } = store.inputTimeAndDate;
      const singleValue = store.inputSingleValue;
      const checkboxValue = store.checkedTimeValue.name;

      switch (checkboxValue) {
        case "date and time":
          if (date || time) {
            createDateAndTime(date, time);
          } else {
            errorsHandler(errorMessages.noEnteredTimeAndDate);
          }
          break;

        case "date":
          if (singleValue) {
            createDateAndTime(singleValue, "");
          } else {
            errorsHandler(errorMessages.noEnteredDate);
          }
          break;

        case "hour":
          if (singleValue) {
            createDateAndTime("", singleValue);
          } else {
            errorsHandler(errorMessages.noEnteredHours);
          }
          break;

        case "minutes":
          if (singleValue) {
            minutesHandler(singleValue, currentTimeMilliseconds);
          } else {
            errorsHandler(errorMessages.noEnteredMinutes);
          }
          break;

        case "seconds":
          if (singleValue) {
            secondsHandler(singleValue, currentTimeMilliseconds);
          } else {
            errorsHandler(errorMessages.noEnteredSeconds);
          }
          break;

        case "":
          errorsHandler(errorMessages.noTimeCheckbox);
          break;

        default:
          break;
      }
    }

    return () => clearInterval(tickInterval);
  }, [isRuning, isReset]);

  function secondsHandler(seconds, currentTimeMilliseconds) {
    const targetDateTime = new Date(
      currentTimeMilliseconds + Number(seconds) * 1000
    );
    store.setTargetDate(targetDateTime);
  }

  function minutesHandler(minutes, currentTimeMilliseconds) {
    const targetDateTime = new Date(
      currentTimeMilliseconds + Number(minutes) * 60 * 1000
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
      const currentTarget = new Date();
      const [hours, minutes] = time.split(":").map(Number);

      currentTarget.setHours(hours, minutes, 0);

      store.setTargetDate(currentTarget);
    }
  }

  function errorsHandler(errorMessages) {
    store.handlerErrors(errorMessages);
    store.handleStopTimer();
  }

  return <></>;
});

export default TimeCreation;

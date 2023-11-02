import { observer } from "mobx-react-lite";
import React from "react";
import store from "../../store/store";
import endTimes from "../../constants/endTime";
import errorMessages from "../../constants/errorsMesages";

const TimeCreation = observer(() => {
  const {
    isStart,
    isReset,
    inputTimeAndDate,
    inputSingleValue,
    checkedTimeValue,
  } = store;

  React.useEffect(() => {
    let tickInterval;

    if (isStart) {
      tickInterval = setInterval(() => {
        checkValueTime();
      }, 1000);
    } else {
      clearInterval(tickInterval);
    }

    if (isReset) {
      clearInterval(tickInterval);
    }

    return () => clearInterval(tickInterval);
  }, [isStart, isReset]);

  function checkValueTime() {
    const { date, time } = inputTimeAndDate;
    const currentTimeMilliseconds = Date.now();

    switch (checkedTimeValue.name) {
      case "date and time":
        if (date && time) {
          createDateAndTime(date, time);
        } else {
          errorsHandler(errorMessages.noEnteredTimeAndDate);
        }
        break;

      case "date":
        if (inputSingleValue) {
          createDateAndTime(inputSingleValue, "");
        } else {
          errorsHandler(errorMessages.noEnteredDate);
        }
        break;

      case "hour":
        if (inputSingleValue) {
          createDateAndTime("", inputSingleValue);
        } else {
          errorsHandler(errorMessages.noEnteredHours);
        }
        break;

      case "minutes":
        if (inputSingleValue) {
          minutesHandler(inputSingleValue, currentTimeMilliseconds);
        } else {
          errorsHandler(errorMessages.noEnteredMinutes);
        }
        break;

      case "seconds":
        if (inputSingleValue) {
          secondsHandler(inputSingleValue, currentTimeMilliseconds);
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

  function errorsHandler(errorMessage) {
    store.handlerErrors(errorMessage);
    store.handleStopTimer();
  }

  return <></>;
});

export default TimeCreation;

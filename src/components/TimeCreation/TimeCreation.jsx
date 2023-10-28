import { observer } from "mobx-react-lite";
import store from "../../store/store";
import React from "react";

const TimeCreation = observer(() => {
  const inputDate = store.inputTimeAndDate.date;
  const inputTime = store.inputTimeAndDate.time;
  const singleValue = store.inputSingleValue;

  React.useEffect(() => {
    let timer;

    if (store.isStart) {
      timer = setInterval(() => {
        const currentTime = new Date();
        createTime(currentTime);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [store.isStart]);

  function createTime(currentDate) {
    switch (store.checkedTimeValue.name) {
      case "data and time":
        createDateAndTime(inputDate, inputTime, currentDate);
        break;
      case "date":
        createDateAndTime(singleValue, "", currentDate);
        break;

      case "hour":
        createDateAndTime("", singleValue, currentDate);
        break;

      case "minutes":
        minutsHandler(singleValue, currentDate);
        break;

      case "seconds":
        secondsHandler(singleValue, currentDate);
        break;

      default:
        break;
    }
  }
});

function secondsHandler(timeValue, currentDate) {
  const miliseconds = timeValue * 1000;

  setTargetDate(miliseconds, currentDate);
}

function minutsHandler(timeValue, currentDate) {
  const miliseconds = timeValue * 60 * 1000;

  setTargetDate(miliseconds, currentDate);
}

// Расчет даты для минут и секунд
function setTargetDate(miliseconds, currentDate) {
  const date = new Date(currentDate.getTime() + miliseconds);

  timeCalculation(currentDate, date);
}

// Создаем время из значений инпутов даты и часов
function createDateAndTime(date, time, currentDate) {
  let targetDate;

  if (date && time) {
    targetDate = new Date(`${date} ${time}`);
  } else if (date) {
    targetDate = new Date(date);
  } else if (time) {
    const [hours, minutes] = time.split(":");

    targetDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      hours,
      minutes
    );
  }

  timeCalculation(currentDate, targetDate);
}

// Расчитываем разницу времени, получаем актуальные значения времени
function timeCalculation(currentTime, targetTime) {
  let diffTime = targetTime.getTime() - currentTime.getTime();

  const date = new Date(diffTime);
  const days = date.getUTCDate() - 1;
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

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

export default TimeCreation;

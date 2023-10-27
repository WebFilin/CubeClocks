import React from "react";
import { observer } from "mobx-react-lite";
import styles from "./TimeCreation.module.scss";
import store from "../../store/store";

const TimeCreation = observer(() => {
  //   const inputDate = store.inputDataValue;
  //   const inputTime = store.inputTimeValue;

  const inputDate = store.inputTimeAndDate.time;
  const inputTime = store.inputTimeAndDate.date;
  const singleValue = store.inputSingleValue;

  //   console.log(inputDate);
  //   console.log(inputTime);

  if (store.isStart) {
    createTime();
  }

  function createTime() {
    switch (store.checkedTimeValue.name) {
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
        break;

      case "seconds":
        break;

      default:
        break;
    }
  }
});

// Создаем время из значений инпутов
function createDateAndTime(date, time) {
  const currentDate = new Date();
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

// Расчитываем разницу во времени
function timeCalculation(currentTime, targetTime) {
  const diffTime = targetTime.getTime() - currentTime.getTime();

  const date = new Date(diffTime);
  const days = date.getUTCDate() - 1;
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  console.log("days " + days);
  //   console.log("hours " + hours);
  //   console.log(" minutes " + minutes);
  //   console.log("seconds " + seconds);
}

export default TimeCreation;

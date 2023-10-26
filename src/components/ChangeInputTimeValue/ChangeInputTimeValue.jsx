import React from "react";
import styles from "./ChangeInputTimeValue.module.scss";
import CheckboxTimeValue from "../CheckboxTimeValue/CheckboxTimeValue";
import { observer } from "mobx-react-lite";
// import CheckDataTimeInput from "../CheckDataTimeInput/CheckDataTimeInput";
// import InputsWrapper from "../InputsWrapper/InputsWrapper";

const ChangeInputTimeValue = (
  {
    //   keyDown,
    //   getMiliseconds,
    //   isRunning,
    //   handllerChangeChecbox,
    //   isReset,
  }
) => {
  function minutesHandler(valueInput) {
    const minutes = Number(valueInput) * 60 * 1000;
    // getMiliseconds(minutes);
  }

  function secondsHandler(valueInput) {
    const seconds = Number(valueInput) * 1000;
    // getMiliseconds(seconds);
  }

  function dataHandler(value) {
    //  setDeadlineDate(value);
  }

  function hourHandler(value) {
    //  setDeadlineTime(value);
  }

  //   Проверяем и устанавливаем нужное поле в чекбоксе, останавливаем отсчет, очищаем инпут
  function checkedValue(value) {
    //  clearValueInput();
    //  handllerChangeChecbox(true);
    //  setCheckedTimeValue(value);
    //  setIsChekedBox(true);
  }

  //   считаем количество милисекунд от установленой даты или времени
  function handlerMiliseconds(time) {
    const millisecondsDiff = new Date(time).getTime() - Date.now();
   //  getMiliseconds(millisecondsDiff);
  }

  function clearValueInput() {
   //  setValueInput("");
  }

  function inputHandler(value) {
   //  setValueInput(value);
  }

  return (
    <div className={styles.wrapper}>
      <CheckboxTimeValue checkedValue={checkedValue} />
    </div>
  );
};

export default observer(ChangeInputTimeValue);

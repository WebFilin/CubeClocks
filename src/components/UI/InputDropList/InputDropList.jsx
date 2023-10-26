import React from "react";
import styles from "./InputDropList.module.scss";
import presetTime from "../../../constants/presetTime";
import store from "../../../store/store";
import { observer } from "mobx-react-lite";

const InputDropList = ({ name, type }) => {
  function clearValue() {
    if (store.inputTimeValue) {
      store.setValueDateOrTime("", "");
    }
  }

  function handlerChange(e) {
    store.handlerInputTimeValue(e.target.value);
  }

  function handlerKeyPress(e) {
    if (e.key === "Enter") {
      store.handlerPressEnterInValue();
    }
  }

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        list="time"
        onChange={(e) => handlerChange(e)}
        onKeyPress={(e) => handlerKeyPress(e)}
        onClick={clearValue}
        type={type}
        value={store.inputTimeValue}
      />

      {type === "numbers" && (
        <datalist id="time">
          {presetTime.map((elem, index) => {
            return <option key={index} value={elem} />;
          })}
        </datalist>
      )}
      <span className={styles.title}> {name} </span>
    </div>
  );
};

export default observer(InputDropList);

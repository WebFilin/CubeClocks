import React from "react";
import styles from "./InputDropList.module.scss";
import presetTime from "../../../constants/presetTime";
import store from "../../../store/store";
import { observer } from "mobx-react-lite";

const InputDropList = observer(({ title, type, handlerInputValue }) => {
  const [inputValue, setInputValue] = React.useState("");

  function clearValue() {
    if (inputValue) {
      store.setValueDateOrTime("", "");
      setInputValue("");
    }
  }

  function handlerChange(e) {
    const value = e.target.value;

    setInputValue(value);
    handlerInputValue(value);
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
        onChange={handlerChange}
        onKeyPress={handlerKeyPress}
        onClick={clearValue}
        type={type}
        value={inputValue}
      />

      {type === "numbers" && (
        <datalist id="time">
          {presetTime.map((elem, index) => {
            return <option key={index} value={elem} />;
          })}
        </datalist>
      )}
      <span className={styles.title}> {title} </span>
    </div>
  );
});

export default InputDropList;

import React from "react";
import styles from "./InputDropDown.module.scss";
import presetTime from "../../../utils/constants/presetTime";

function InputDropDown({
  getValue,
  type,
  title,
  onKeyDown,
  clearValue,
  valueInput,
}) {
  function handlerChange(e) {
    getValue(e.target.value);
  }

  function handlerKeyPress(e) {
    if (e.key === "Enter") {
      onKeyDown();
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
        value={valueInput}
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
}

export default InputDropDown;

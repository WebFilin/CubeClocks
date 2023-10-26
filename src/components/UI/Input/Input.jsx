import styles from "./Input.module.scss";
import React from "react";

function Input({ getValue, type, valueInput, onKeyDown }) {
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
        type={type}
        className={styles.input}
        onChange={(e) => handlerChange(e)}
        onKeyPress={(e) => handlerKeyPress(e)}
        value={valueInput}
      ></input>

      <span className={styles.title}> {type} </span>
    </div>
  );
}

export default Input;

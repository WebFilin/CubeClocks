import React from "react";
import styles from "./Checkbox.module.scss";
import store from "../../../../store/store";

// eslint-disable-next-line react/display-name
const Checkbox = React.memo(({ isChecked, value }) => {
  function handlerClick() {
    const { name, type } = value;

    store.handlerValueChecked(name, type);
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        <input
          className={styles.custom_checkbox}
          type="checkbox"
          checked={isChecked}
          onChange={handlerClick}
        />
        <span className={styles.title}> {value.name}</span>
      </label>
    </div>
  );
});

export default Checkbox;

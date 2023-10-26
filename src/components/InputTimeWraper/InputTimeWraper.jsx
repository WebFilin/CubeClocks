import React from "react";
import styles from "./InputTimeWraper.module.scss";
import CheckboxTimeValue from "../CheckboxTimeValue/CheckboxTimeValue";
import { observer } from "mobx-react-lite";
import InputDropList from "../UI/InputDropList";
import store from "../../store/store";

const InputTimeWraper = () => {
  const { name, type } = store.checkedTimeValue;

  return (
    <div className={styles.wrapper}>
      <CheckboxTimeValue />
      {!store.isReset && (
        <>
          {type !== "date_and_time" && (
            <InputDropList name={name} type={type} />
          )}
          {type === "date_and_time" && (
            <>
              <InputDropList name="date" type="date" />
              <InputDropList name="time" type="time" />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default observer(InputTimeWraper);

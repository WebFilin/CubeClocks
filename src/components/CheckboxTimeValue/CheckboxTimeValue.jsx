import React from "react";
import styles from "./CheckboxTimeValue.module.scss";
import valuesTimeForCheckbox from "../../constants/valuesTimeForCheckbox";
import Checkbox from "../UI/Btns/Checkbox/Checkbox";
import store from "../../store/store";
import { observer } from "mobx-react-lite";

const CheckboxTimeValue = observer(() => {
  const currentValue = store.checkedTimeValue.name;

  return (
    <div className={styles.wrapper}>
      {valuesTimeForCheckbox.map((elem) => {
        return (
          <div className={styles.body} key={elem.name}>
            <Checkbox isChecked={currentValue === elem.name} value={elem} />
          </div>
        );
      })}
    </div>
  );
});

export default CheckboxTimeValue;

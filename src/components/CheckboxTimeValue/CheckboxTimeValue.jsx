import React from "react";
import styles from "./CheckboxTimeValue.module.scss";
import valuesTimeForCheckbox from "../../constants/valuesTimeForCheckbox";
import Checkbox from "../UI/Btns/Checkbox/Checkbox";
import store from "../../store/store";
import { observer } from "mobx-react-lite";

const CheckboxTimeValue = observer(() => {
  const currentValue = store.checkedTimeValue.name;

  function handlerCheckboxChange(elem) {
    const { name, type } = elem;
    store.handlerValueChecked(name, type);
  }

  console.log(store.checkedTimeValue.name);

  return (
    <div className={styles.wrapper}>
      {valuesTimeForCheckbox.map((elem) => {
        return (
          <div key={elem.name}>
            <Checkbox
              isChecked={currentValue === elem.name}
              value={elem}
              handlerCheckbox={handlerCheckboxChange}
            />
          </div>
        );
      })}
    </div>
  );
});

export default CheckboxTimeValue;

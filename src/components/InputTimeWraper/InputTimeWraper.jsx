import styles from "./InputTimeWraper.module.scss";
import CheckboxTimeValue from "../CheckboxTimeValue/CheckboxTimeValue";
import { observer } from "mobx-react-lite";
import InputDropList from "../UI/InputDropList";
import store from "../../store/store";

const InputTimeWraper = observer(() => {
  const isReset = store.isReset;
  const { name, type } = store.checkedTimeValue;

  function handlerData(value) {
    store.handlerInputDataValue(value);
  }

  function handlerTime(value) {
    store.handlerInputTimeValue(value);
  }

  function handlerInputSingleValue(value) {
    store.handlerInputSingleValue(value);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.checkbox_wrapper}>
        <CheckboxTimeValue />

        <div className={styles.inputs_wrapper}>
          {!isReset && (
            <>
              {type !== "date and time" && (
                <>
                  {type !== "" && (
                    <InputDropList
                      title={name}
                      type={type}
                      handlerInputValue={handlerInputSingleValue}
                    />
                  )}
                </>
              )}
              {type === "date and time" && (
                <>
                  <InputDropList
                    title="date"
                    type="date"
                    handlerInputValue={handlerData}
                  />
                  <InputDropList
                    title="time"
                    type="time"
                    handlerInputValue={handlerTime}
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
});

export default InputTimeWraper;

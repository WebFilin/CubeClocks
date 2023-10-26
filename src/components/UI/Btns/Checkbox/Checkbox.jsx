import styles from "./Checkbox.module.scss";
import store from "../../../../store/store";

function Checkbox({ isChecked, value }) {
  function handler(elem) {
    const { name, type } = elem;
    store.handlerValueChecked(name, type);
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        <input
          className={styles.custom_checkbox}
          type="checkbox"
          checked={isChecked}
          onChange={() => handler(value)}
        />
        <span className={styles.title}> {value.name}</span>
      </label>
    </div>
  );
}

export default Checkbox;

import styles from "./Checkbox.module.scss";

function Checkbox({ isChecked, value, handlerCheckbox }) {
  function handler(name) {
    handlerCheckbox(name);
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

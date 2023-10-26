import styles from "./Btn.module.scss";

function Btn({ funcClick, value }) {
  function handlerCkick() {
    funcClick();
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.btn} onClick={() => handlerCkick()}>
        {value}
      </button>
    </div>
  );
}

export default Btn;

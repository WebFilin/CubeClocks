import styles from "./Btn.module.scss";

function Btn({ funcClick, title }) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.btn} onClick={funcClick}>
        <span className={styles.btn_title}> {title} </span>
      </button>
    </div>
  );
}

export default Btn;

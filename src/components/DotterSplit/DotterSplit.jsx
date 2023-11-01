import styles from "./DotterSplit.module.scss";

function DotterSplit() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_points}>
        <div className={styles.points}></div>
        <div className={styles.points}></div>
      </div>
    </div>
  );
}

export default DotterSplit;

import { observer } from "mobx-react-lite";
import styles from "./DotterSplit.module.scss";
import store from "../../store/store";

const DotterSplit = observer(() => {
  const isCubeBreak = store.isCubeBreak;

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_points}>
        <div className={isCubeBreak ? styles.in_break : styles.points}></div>
        <div className={isCubeBreak ? styles.in_break : styles.points}></div>
      </div>
    </div>
  );
});

export default DotterSplit;

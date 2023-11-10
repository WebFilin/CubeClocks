import { observer } from "mobx-react-lite";
import styles from "./Cube.module.scss";
import store from "../../store/store";

const Cube = observer(() => {
  const isCubeBreak = store.isCubeBreak;
  
  return (
    <div className={styles.wrapper}>
      <div className={isCubeBreak ? styles.in_break : styles.base}></div>
    </div>
  );
});

export default Cube;

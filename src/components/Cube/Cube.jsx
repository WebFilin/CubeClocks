import { observer } from "mobx-react-lite";
import styles from "./Cube.module.scss";

const Cube = observer(() => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cube_front}></div>
    </div>
  );
});

export default Cube;

import styles from "./App.module.scss";
import Timer from "../Timer/Timer";

function App() {
  return (
    <div className={styles.wrapper}>
      <Timer />
    </div>
  );
}

export default App;

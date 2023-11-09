import styles from "./App.module.scss";
import Timer from "../Timer/Timer";
import Clocks from "../Clocks/Clocks";
import Stopwatch from "../Stopwatch";

function App() {
  return (
    <div className={styles.wrapper}>
      {/* <Timer /> */}
      {/* <Clocks /> */}
      <Stopwatch />
    </div>
  );
}

export default App;

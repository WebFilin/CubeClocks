import styles from "./App.module.scss";
import Timer from "../Timer/Timer";
import Clocks from "../Clocks/Clocks";
import Stopwatch from "../Stopwatch";
import PomadoroTimer from "../PomadoroTimer/PomadoroTimer";

function App() {
  return (
    <div className={styles.wrapper}>
      {/* <Timer /> */}
      {/* <Clocks /> */}
      {/* <Stopwatch /> */}
      <PomadoroTimer />
    </div>
  );
}

export default App;

import styles from "./App.module.scss";
import Timer from "../Timer/Timer";
import Clocks from "../Clocks/Clocks";
function App() {
  return (
    <div className={styles.wrapper}>
      {/* <Timer /> */}
      <Clocks />
    </div>
  );
}

export default App;

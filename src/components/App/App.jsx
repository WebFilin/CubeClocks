import styles from "./App.module.scss";
import React, { Suspense } from "react";

const PomadoroTimer = React.lazy(() =>
  import("../PomadoroTimer/PomadoroTimer")
);
const Timer = React.lazy(() => import("../Timer/Timer"));
const Clocks = React.lazy(() => import("../Clocks/Clocks"));
const Stopwatch = React.lazy(() => import("../Stopwatch"));

function App() {
  return (
    <div className={styles.wrapper}>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <PomadoroTimer /> */}

        {/* <Timer /> */}
        {/* <Clocks /> */}
        <Stopwatch />
      </Suspense>
    </div>
  );
}

export default App;

import styles from "./App.module.scss";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "../Loader";
import routes from "../../constants/routes";

const PomadoroTimer = React.lazy(() =>
  import("../PomadoroTimer/PomadoroTimer")
);
const Timer = React.lazy(() => import("../Timer/Timer"));
const Clocks = React.lazy(() => import("../Clocks/Clocks"));
const Stopwatch = React.lazy(() => import("../Stopwatch"));

function App() {
  return (
    <div className={styles.wrapper}>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Clocks />} />
            <Route path={routes.pomadoro} element={<PomadoroTimer />} />
            <Route path={routes.timer} element={<Timer />} />
            <Route path={routes.stopwatch} element={<Stopwatch />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

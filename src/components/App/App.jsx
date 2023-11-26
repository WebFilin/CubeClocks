import styles from "./App.module.scss";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../Loader";
import routes from "../../constants/routes";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const PomadoroTimer = React.lazy(() =>
  import("../PomadoroTimer/PomadoroTimer")
);
const Timer = React.lazy(() => import("../Timer/Timer"));
const Clocks = React.lazy(() => import("../Clocks/Clocks"));
const Stopwatch = React.lazy(() => import("../Stopwatch"));

function App() {
  return (
    <div className={styles.wrapper}>
      <BurgerMenu />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={routes.clock} element={<Clocks />} />
          <Route path={routes.pomadoro} element={<PomadoroTimer />} />
          <Route path={routes.timer} element={<Timer />} />
          <Route path={routes.stopwatch} element={<Stopwatch />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

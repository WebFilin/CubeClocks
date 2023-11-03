import React from "react";
import styles from "./Clocks.module.scss";
import DisplayDrawing from "../DisplayDrawing";
import store from "../../store/store";
import { observer } from "mobx-react-lite";
import SplitValueForDisplays from "../SplitValueForDisplays/SplitValueForDisplays";
import ErrorsHandler from "../ErrorsHandler/ErrorsHandler";

const Clocks = observer(() => {
  React.useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();

      const days = 0;
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      store.getValuesTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <DisplayDrawing />
      <SplitValueForDisplays />
      <ErrorsHandler />
    </div>
  );
});

export default Clocks;

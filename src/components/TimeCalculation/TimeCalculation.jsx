import { observer } from "mobx-react-lite";
import store from "../../store/store";
import React from "react";

const SplitValueForDisplays = observer(() => {
  React.useEffect(() => {
    const baseDate = new Date();

    const diffTime = store.targetDate - baseDate;

    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    if (diffTime > 0) {
      store.setValuesTime({ days, hours, minutes, seconds });
    } else {
      store.handleStopTimer();
    }
  }, [store.targetDate]);

  return <></>;
});

export default SplitValueForDisplays;

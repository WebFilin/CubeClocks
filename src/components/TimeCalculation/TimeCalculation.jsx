import { observer } from "mobx-react-lite";
import store from "../../store/store";
import React from "react";
import errorMessages from "../../constants/errorsMesages";

const SplitValueForDisplays = observer(() => {
  const targetDate = store.targetDate;
  const isRuning = store.targetDate;

  React.useEffect(() => {
    const baseDate = new Date();

    const diffTime = targetDate - baseDate;

    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    if (diffTime > 0) {
      store.setValuesTime({ days, hours, minutes, seconds });
      store.handlerErrors("");
    } else {
      store.handleStopTimer();
    }

    if (isRuning && diffTime < 0) {
      store.handlerErrors(errorMessages.dateInPast);
    }
  }, [targetDate, isRuning]);

  return <></>;
});

export default SplitValueForDisplays;

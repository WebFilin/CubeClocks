import { observer } from "mobx-react-lite";
import store from "../../store/store";
import React from "react";

// Разбиваем время на значения для каждого экрана отдельно
const SplitValueForDisplays = observer(() => {
  const { days, hours, minutes, seconds } = store.valuesTime;

  React.useEffect(() => {
    const splitNum = (value) => {
      return value ? value.toString().split("").map(Number) : [];
    };

    const splitDays = splitNum(days);
    const splitHour = splitNum(hours);
    const splitMinute = splitNum(minutes);
    const splitSecond = splitNum(seconds);

    const splitedTime = {
      days: [days <= 9 ? 0 : splitDays[0], days <= 9 ? days : splitDays[1]],
      hours: [hours <= 9 ? 0 : splitHour[0], hours <= 9 ? 0 : splitHour[1]],
      minutes: [
        minutes <= 9 ? 0 : splitMinute[0],
        minutes <= 9 ? 0 : splitMinute[1],
      ],
      seconds: [
        seconds <= 9 ? 0 : splitSecond[0],
        seconds <= 9 ? 0 : splitSecond[1],
      ],
    };

    store.setSplitedTime(splitedTime);
  }, [days, hours, minutes, seconds]);
});

export default SplitValueForDisplays;

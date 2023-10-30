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
      days1: days <= 9 ? 0 : splitDays[0],
      days2: days <= 9 ? days : splitDays[1],
      hour1: hours <= 9 ? 0 : splitHour[0],
      hour2: hours <= 9 ? hours : splitHour[1],
      minute1: minutes <= 9 ? 0 : splitMinute[0],
      minute2: minutes <= 9 ? minutes : splitMinute[1],
      second1: seconds <= 9 ? 0 : splitSecond[0],
      second2: seconds <= 9 ? seconds : splitSecond[1],
    };

    store.setSplitedTime(splitedTime);
  }, [days, hours, minutes, seconds]);
});

export default SplitValueForDisplays;

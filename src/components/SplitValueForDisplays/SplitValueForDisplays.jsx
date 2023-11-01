import { observer } from "mobx-react-lite";
import store from "../../store/store";
import React from "react";

// Разбиваем время на значения для каждого экрана отдельно
const SplitValueForDisplays = observer(() => {
  const { days, hours, minutes, seconds } = store.valuesTime;

  React.useEffect(() => {
    const splitNum = (value) => {
      return value ? value.toString().split("").map(Number) : 0;
    };

    const splitValue = (value) => {
      const splitArr = splitNum(value);
      const firstDigit = value <= 9 ? 0 : splitArr[0];
      const secondDigit = value <= 9 ? value : splitArr[1];
      return [firstDigit, secondDigit];
    };

    const splitedTime = {
      days: splitValue(days),
      hours: splitValue(hours),
      minutes: splitValue(minutes),
      seconds: splitValue(seconds),
    };

    store.setSplitedTime(splitedTime);
  }, [days, hours, minutes, seconds]);
});

export default SplitValueForDisplays;

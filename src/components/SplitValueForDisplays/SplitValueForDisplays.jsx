import { observer } from "mobx-react-lite";
import store from "../../store/store";
import React from "react";

// Разбиваем время на значения для каждого экрана отдельно
const SplitValueForDisplays = observer(() => {
  const { days, hours, minutes, seconds } = store.valuesTime;

  React.useEffect(() => {
    const splitValue = (value) => {
      const [num1, num2] = value ? value.toString().split("").map(Number) : [];
      const firstDigit = value <= 9 ? 0 : num1;
      const secondDigit = value <= 9 ? value : num2;
      return [firstDigit, secondDigit];
    };

    const splitedTime = {
      splitedDays: splitValue(days),
      splitedHours: splitValue(hours),
      splitedMinutes: splitValue(minutes),
      splitedSeconds: splitValue(seconds),
    };

    store.setSplitedTime(splitedTime);
  }, [days, hours, minutes, seconds]);
});

export default SplitValueForDisplays;

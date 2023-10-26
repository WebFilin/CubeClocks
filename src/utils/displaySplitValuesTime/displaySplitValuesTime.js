import React from "react";

function DisplayControllerValue({ days, hour, minute, second }) {
  const [time, setTime] = React.useState({
    days1: 0,
    days2: 0,
    hour1: 0,
    hour2: 0,
    minute1: 0,
    minute2: 0,
    second1: 0,
    second2: 0,
  });

  React.useEffect(() => {
    const splitNum = (value) => {
      return value ? value.toString().split("").map(Number) : [];
    };

    const splitDays = splitNum(days);
    const splitHour = splitNum(hour);
    const splitMinute = splitNum(minute);
    const splitSecond = splitNum(second);

    setTime({
      days1: days <= 9 ? 0 : splitDays[0],
      days2: days <= 9 ? days : splitDays[1],
      hour1: hour <= 9 ? 0 : splitHour[0],
      hour2: hour <= 9 ? hour : splitHour[1],
      minute1: minute <= 9 ? 0 : splitMinute[0],
      minute2: minute <= 9 ? minute : splitMinute[1],
      second1: second <= 9 ? 0 : splitSecond[0],
      second2: second <= 9 ? second : splitSecond[1],
    });
  }, [days, hour, minute, second]);

  return time;
}

export default DisplayControllerValue;

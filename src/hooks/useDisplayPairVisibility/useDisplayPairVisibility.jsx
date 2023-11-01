import React from "react";
import store from "../../store/store";
import { toJS } from "mobx";

const useDisplayPairVisibility = () => {
  const { days, hours, minutes } = toJS(store.valuesTime);

  const [isDays, setIsDays] = React.useState(true);
  const [isHour, setIsHour] = React.useState(true);
  const [isMinute, setIsMinute] = React.useState(true);

  React.useEffect(() => {
    switch (days) {
      case 0:
        setIsDays(false);
        break;

      default:
        setIsDays(true);
        break;
    }
  }, [days]);

  React.useEffect(() => {
    switch (hours) {
      case 0:
        setIsHour(false);
        break;

      default:
        setIsHour(true);
        break;
    }
  }, [hours]);

  React.useEffect(() => {
    switch (minutes) {
      case 0:
        setIsMinute(false);
        break;

      default:
        setIsMinute(true);
        break;
    }
  }, [minutes]);

  return { isDays, isHour, isMinute };
};

export default useDisplayPairVisibility;

import React from "react";
import useMatchMedia from "../../hooks/useMatchMedia";
import store from "../../store/store";

const useDotterSplitVisibility = () => {
  const [isHourDotter, setIsHourDotter] = React.useState(true);
  const [isMinuteDotter, setIsMinuteDotter] = React.useState(true);

  const { isMobile, isTablet } = useMatchMedia();

  const { isDays, isHour, isMinute } = store.displayVisibility;

  React.useEffect(() => {
    if (isMobile || isTablet) {
      const sumDispl =
        (isDays ? 1 : 0) + (isHour ? 1 : 0) + (isMinute ? 1 : 0) + 1;
      switch (sumDispl) {
        case 2:
          setIsMinuteDotter(true);
          setIsHourDotter(true);
          break;
        case 3:
          setIsMinuteDotter(false);
          setIsHourDotter(true);
          break;
        case 4:
          setIsHourDotter(false);
          setIsMinuteDotter(true);
          break;
        default:
          setIsHourDotter(true);
          setIsMinuteDotter(true);
          break;
      }
    } else {
      setIsHourDotter(true);
      setIsMinuteDotter(true);
    }
  }, [isMobile, isTablet, isDays, isHour, isMinute]);

  return {
    isHourDotter,
    isMinuteDotter,
  };
};

export default useDotterSplitVisibility;

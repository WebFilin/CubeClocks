import React from "react";

const useDotterSplitVisibility = (displRef, isMobile, isTablet) => {
  const [isHourDotter, setIsHourDotter] = React.useState(true);
  const [isMinuteDotter, setIsMinuteDotter] = React.useState(true);

  React.useEffect(() => {
    const sumDispl = displRef.current.children.length;

    if (isMobile || isTablet) {
      setIsMinuteDotter(false);

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
  }, [displRef, isMobile, isTablet]);

  return {
    isHourDotter,
    isMinuteDotter,
  };
};

export default useDotterSplitVisibility;

import React from "react";

// Медиазапросы для совпадений
const queries = [
  "(max-width: 766px)",
  "(max-width: 767px) and (max-width: 1199px)",
  "(max-width: 1200px)",
];

function useMatchMedia() {
  const mediaQueryList = queries.map((query) => {
    return matchMedia(query);
  });

  const getValues = () => mediaQueryList.map((mql) => mql.matches);

  const [values, setValues] = React.useState(getValues);

  React.useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryList.forEach((mql) => mql.addEventListener("change", handler));

    return () =>
      mediaQueryList.forEach((mql) =>
        mql.removeEventListener("change", handler)
      );
  });

  return ["isMobile", "isTablet", "isDesktop"].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  );
}

export default useMatchMedia;

import styles from "./ErrorsHandler.module.scss";
import store from "../../store/store";
import { observer } from "mobx-react-lite";
import React from "react";

const ErrorsHandler = observer(() => {
  const error = store.error;
  const [isOpen, setIsOpen] = React.useState(false);
  const popupRef = React.useRef(null);

  React.useEffect(() => {
    if (error) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [error]);

  //   const togglePopup = () => {
  //     setIsOpen(!isOpen);
  //   };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div ref={popupRef} className={styles.wrapper}>
          {store.error}
        </div>
      )}
    </>
  );
});

export default ErrorsHandler;

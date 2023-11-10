import styles from "./ErrorsHandler.module.scss";
import store from "../../store/store";
import { observer } from "mobx-react-lite";
import React from "react";

const ErrorsHandler = observer(() => {
  const error = store.error;
  const [isOpen, setIsOpen] = React.useState(false);
  const popUpRef = React.useRef(null);

  React.useEffect(() => {
    if (error) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [error]);

  const handleClickOutside = (event) => {
    if (popUpRef.current && !popUpRef.current.contains(event.target)) {
      setIsOpen(false);
      store.handlerErrors("");
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
        <div className={styles.wrapper}>
          <div ref={popUpRef} className={styles.modal_content}>
            {store.error}
          </div>
        </div>
      )}
    </>
  );
});

export default ErrorsHandler;

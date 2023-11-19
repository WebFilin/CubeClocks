import { observer } from "mobx-react-lite";
import React from "react";
import styles from "./BtnBurgerMenu.module.scss";

const BtnBurgerMenu = observer(() => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={isOpen ? styles.wrapper_active : styles.wrapper}
      onClick={handleClick}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  );
});

export default BtnBurgerMenu;

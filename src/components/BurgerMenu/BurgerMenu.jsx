import React from "react";
import { observer } from "mobx-react-lite";
import styles from "./BurgerMenu.module.scss";
import BtnBurgerMenu from "../UI/Btns/BtnBurgerMenu";
import BurgerMenuContent from "../BurgerMenuContent";

const BurgerMenu = observer(() => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  function openHandler() {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <nav className={isOpenMenu ? styles.wrapper_active : styles.wrapper}>
      <div className={styles.btn_wraper}>
        <BtnBurgerMenu
          isOpenMenu={isOpenMenu}
          burgerOpenHandler={openHandler}
        />
      </div>

      <BurgerMenuContent isOpen={isOpenMenu} burgerOpenHandler={openHandler} />
    </nav>
  );
});

export default BurgerMenu;

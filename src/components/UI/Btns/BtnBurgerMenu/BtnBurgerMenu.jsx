import { observer } from "mobx-react-lite";
import styles from "./BtnBurgerMenu.module.scss";

const BtnBurgerMenu = observer(({ isOpenMenu, burgerOpenHandler }) => {
  return (
    <div
      className={isOpenMenu ? styles.wrapper_active : styles.wrapper}
      onClick={burgerOpenHandler}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  );
});

export default BtnBurgerMenu;

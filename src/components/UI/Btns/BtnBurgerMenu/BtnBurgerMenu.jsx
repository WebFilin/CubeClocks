import { observer } from "mobx-react-lite";
import store from "../../../../store/store";
import styles from "./BtnBurgerMenu.module.scss";

const BtnBurgerMenu = observer(() => {
  const isOpen = store.isBurgerMenuOpen;

  const handleClick = () => {
    store.burgerOpenHandler();
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

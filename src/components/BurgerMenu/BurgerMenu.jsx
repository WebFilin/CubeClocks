import { observer } from "mobx-react-lite";
import styles from "./BurgerMenu.module.scss";
import store from "../../store/store";
import BtnBurgerMenu from "../UI/Btns/BtnBurgerMenu";
import BurgerMenuContent from "../BurgerMenuContent";

const BurgerMenu = observer(() => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.btn_wraper}>
        <BtnBurgerMenu />
      </div>

      {store.isBurgerMenuOpen && <BurgerMenuContent />}
    </nav>
  );
});

export default BurgerMenu;

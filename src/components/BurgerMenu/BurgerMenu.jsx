import { observer } from "mobx-react-lite";
import styles from "./BurgerMenu.module.scss";
import store from "../../store/store";
import BtnBurgerMenu from "../UI/Btns/BtnBurgerMenu";

const BurgerMenu = observer(() => {
  return (
    <div className={styles.wrapper}>
      <BtnBurgerMenu />
    </div>
  );
});

export default BurgerMenu;

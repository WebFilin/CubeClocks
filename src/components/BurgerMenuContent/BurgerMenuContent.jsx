import { observer } from "mobx-react-lite";
import styles from "./BurgerMenuContent.module.scss";
import store from "../../store/store";
import routes from "../../constants/routes";

const BurgerMenuContent = observer(() => {
  const isOpen = store.isBurgerMenuOpen;

  const arrRoutes = Object.values(routes);

  function outMenuCkickHandler() {
    store.burgerOpenHandler();
  }

  function checkOutMenu(e) {
    e.stopPropagation();
  }

  return (
    <div
      className={isOpen ? styles.wrapper_active : styles.wrapper}
      onClick={outMenuCkickHandler}
    >
      <div className={styles.blur}></div>

      <ul className={styles.content_list} onClick={checkOutMenu}>
        {arrRoutes.map((route) => {
          const routeName = route.substring(1);
          return (
            <li className={styles.txt} key={routeName}>
              {routeName}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default BurgerMenuContent;

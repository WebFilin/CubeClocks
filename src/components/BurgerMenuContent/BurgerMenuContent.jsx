import { observer } from "mobx-react-lite";
import styles from "./BurgerMenuContent.module.scss";
import store from "../../store/store";
import routes from "../../constants/routes";
import { NavLink } from "react-router-dom";

const BurgerMenuContent = observer(() => {
  const isOpen = store.isBurgerMenuOpen;

  const arrRoutes = Object.entries(routes);

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
      <ul className={styles.content_list} onClick={checkOutMenu}>
        {arrRoutes.map(([name, route]) => {
          return (
            <li className={styles.txt} key={name}>
              <NavLink to={route}> {name}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default BurgerMenuContent;

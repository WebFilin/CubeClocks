import { observer } from "mobx-react-lite";
import styles from "./BurgerMenuContent.module.scss";
import routes from "../../constants/routes";
import { NavLink } from "react-router-dom";

const BurgerMenuContent = observer(({ isOpen, burgerOpenHandler }) => {
  const arrRoutes = Object.entries(routes);

  function outMenuCkickHandler() {
    burgerOpenHandler();
  }

  function checkOutMenu(e) {
    e.stopPropagation();
  }

  return (
    <div
      className={isOpen ? styles.wrapper_active : styles.wrapper}
      onClick={outMenuCkickHandler}
    >
      {isOpen && <div className={styles.blur}></div>}

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

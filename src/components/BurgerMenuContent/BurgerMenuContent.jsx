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

  const setActive = ({ isActive }) =>
    isActive ? styles.nav_link_active : styles.nav_link;

  return (
    <div
      className={isOpen ? styles.wrapper_active : styles.wrapper}
      onClick={outMenuCkickHandler}
    >
      {isOpen && (
        <div className={styles.body_wrapper}>
          <div className={styles.body}>
            <ul className={styles.content_list} onClick={checkOutMenu}>
              {arrRoutes.map(([name, route]) => {
                return (
                  <li className={styles.txt} key={name}>
                    <NavLink to={route} className={setActive}>
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles.blur}></div>
        </div>
      )}
    </div>
  );
});

export default BurgerMenuContent;

import style from './style.module.css';
import { Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <nav className={style.nav_bar} role="navigation">
      <ul className={style.nav_list}>
        <li className={style.nav_item}>
          <Link to="/" className={style.no_link_style}>ГЛАВНАЯ</Link>
        </li>
        <div className={style.dot}></div>
        <li className={style.nav_separator}></li>
        <li className={style.nav_item}>
          <Link to="/" className={style.no_link_style}>
            ТАБЛИЦА
          </Link>
        </li>
        <li className={style.nav_separator}></li>
        <li className={style.nav_item}>
          <Link to="/calendar" className={style.no_link_style}>
            КАЛЕНДАРЬ
          </Link>
        </li>
        <li className={style.nav_separator}></li>
        <li className={style.nav_item}>
          <Link to="/stats" className={style.no_link_style}>
            СТАТИСТИКА
          </Link>
        </li>
        <li className={style.nav_separator}></li>
        <li className={style.nav_item}>
          <Link to="/" className={style.no_link_style}>
            ГАЛЕРЕЯ
          </Link>
        </li>
        <li className={style.nav_separator}></li>
        <li className={style.nav_item}>
          <Link to="/contacts" className={style.no_link_style}>
            ИНФО
          </Link>
        </li>
      </ul>
    </nav>
  );
};
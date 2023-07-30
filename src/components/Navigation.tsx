import style from './style.module.css';
import { Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <nav className={style.nav_bar} role="navigation">
      <ul className={style.nav_list}>
        
        <li className={style.nav_item}>
            <Link to= "/">ГЛАВНАЯ</Link>
        </li>
        <div className={style.dot}></div>
        <li className={style.nav_separator}></li>
        <li className={style.nav_item}>ТАБЛИЦА</li>
        <li className={style.nav_separator}></li>
        <li className={style.nav_item}><Link to= "/calendar">КАЛЕНДАРЬ</Link></li>
        <li className={style.nav_separator}></li>
        <li className={style.nav_item}>СТАТИСТИКА</li>
        <li className={style.nav_separator}></li>
        <li className={style.nav_item}>ГАЛЕРЕЯ</li>
        <li className={style.nav_separator}></li>
        <li className={style.nav_item}><Link to= "/contacts">ИНФО</Link></li>
      </ul>
    </nav>
  );
};
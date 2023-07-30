import style from './style.module.css'
import contactLOGO from '../../assets/FooterLogo.png'
export const Footer = () => {

    return (
        <div className={style.container}>
            <img src={contactLOGO}  />
            <div className={style.container_column}>
                <h3> Команды </h3>
                <a href="#">UNLIMITED</a>
                <a href="#">BROKE BOYS</a>
                <a href="#">А КОГДА НЕ ФК</a>
                <a href="#">GSW</a>
                <a href="#">RATEBOR</a>
                <a href="#">TITAN CHERTANOVO</a>
                <a href="#">SPARTANEC</a>
                <a href="#">RED MOSCOW</a>
            </div>
            <div className={style.container_column}>
                <h3> Разделы </h3>
                <a href="#">ГЛАВНАЯ</a>
                <a href="#">ТАБЛИЦА</a>
                <a href="#">СТАТИСТИКА</a>
                <a href="#">КАЛЕНДАРЬ</a>
                <a href="#">ГАЛЕРЕЯ</a>
                <a href="#">ИНФО</a>
            </div>
            <div className={style.container_column}>
                <h3> Организатор </h3>
                <a href="#">TELEGRAM</a>
                <a href="#">VKONTAKTE</a>
            </div>
            <div className={style.container_column}>
                <h3> Дизайнер </h3>
                <a href="#">TELEGRAM</a>
                <a href="#">VKONTAKTE</a>
                <a href="#">BEHANCE</a>
            </div>
            <div className={style.container_column}>
                <h3> Разработчик </h3>
                <a href="#">TELEGRAM</a>
                <a href="#">VKONTAKTE</a>
                <a href="#">GITHUB</a>
            </div>

        </div>
    )
}
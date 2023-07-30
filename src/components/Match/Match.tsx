import style from './style.module.css'

export const Match = () => {
    return (
        <div className={style.container}>
                
                <div className={style.match_info}>
                    <h2>1 РАУНД ВЕРХНЯЯ СЕТКА</h2>
                    <div className={style.data}>
                        <div className={style.left_data}>
                            <a href="#">тест</a>
                            <a href="#">тест</a>
                            <a href="#">тест</a>
                        </div>
                        <div className={style.main_set}>
                            ЛОГО
                            СЧЕТ
                            ЛОГО
                        </div>
                        <div className={style.right_data}>
                            <a href="#">тест</a>
                            <a href="#">тест</a>
                            <a href="#">тест</a>
                        </div>
                    </div>
                    <a href="#">ПОДРОБНЕЕ</a>
                </div>
            </div>
    )
}
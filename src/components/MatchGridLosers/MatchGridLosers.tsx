import style from './style.module.css'
import { MiniMatch } from '../MiniMatch/MiniMatch'
export const MatchGridLosers = () => {
    return (
        <div className={style.container}>
            <div className={style.first_round}>
                <div className={style.pe}>
                    <p>1 РАУНД</p>
                </div>
                <div className={style.mini_match_container}>
                            <MiniMatch />
                        </div>
                        <div className={style.mini_match_container}>
                            <MiniMatch />
                        </div>

            </div>
            <div className={style.second_round}>
                <div className={style.pe}>
                    <p>2 РАУНД</p>
                </div>
                <div className={style.mini_match_container}>
                    <MiniMatch />
                </div>
                <div className={style.mini_match_container}>
                     <MiniMatch />
                </div>


            </div>
            <div className={style.three_round}>
                <div className={style.pe}>
                    <p>3 РАУНД</p>
                </div>
                <div className={style.mini_match_container2}>
                    <MiniMatch />
                </div>



            </div>
            <div className={style.four_round}>
                <div className={style.pe}>
                    <p>ФИНАЛ НИЖНЯЯ СЕТКА</p>
                </div>
                <div className={style.mini_match_container3}>
                    <MiniMatch />
                </div>



            </div>
        </div>
    )
}
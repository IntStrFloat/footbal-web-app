import style from './style.module.css'
import commandLogo from '../../assets/commandLogo2.svg'
export const MatchCard = ()=> {
    const time = '12:00'
    const date = '24.09'
    const round = '1-РАУНД'
    const elimination = 'ВЕРХНЯЯ СЕТКА'
    return (
        <div className={style.container}>
            <div className={style.fist_section}>
                <div className={style.date_time}>
                    <p className={style.date}>{time}</p>
                    <p className={style.date}>{date}</p>
                </div>
                <div className={style.versus}>
                    <img src={commandLogo} alt="" />
                    <h3>VS</h3>
                    <img src={commandLogo} alt="" />
                </div>
            </div>
            <div className={style.second_section}>
                <p className={style.text}>{round}</p>
                <p className={style.text}>{elimination}</p>
            </div>
        </div>
    )
}
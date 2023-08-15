import style from './style.module.css'
import commandLogo from '../../assets/commandLogo2.svg'
export const MatchGridWinner = () => {
    return (
        <div className={style.container}>
            <h3>ГРАНД - ФИНАЛ</h3>
            <div className={style.container2}>
                {/* <img src={commandLogo} alt="" />
                <p>VS</p>
                <img src={commandLogo} alt="" /> */}
            </div>

        </div>
    )
}
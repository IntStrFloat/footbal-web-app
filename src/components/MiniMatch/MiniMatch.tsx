import style from './style.module.css'
import ytMiniLogo from '../../assets/ytMiniLogo.svg'
import miniSep from '../../assets/miniSep.svg'
export const MiniMatch = () => {
    return (
        <>
        
            <div className={style.container}>
                <div> 
                    <div className={style.first_command}>
                        <p>
                            UNLIMITED
                        </p>
                    </div>
                    <div className={style.second_command}>
                        <p>
                            UNLIMITED
                        </p>
                    </div>
                </div>
                <div className={style.seporations}>
                    <div className={style.sep1}>

                    </div>
                    <div className={style.sep2}>

                    </div>
                </div>
                <div className={style.yt_block}>
                    <img className={style.yt_logo} src={ytMiniLogo} alt="" width="10.522" height="7.015" />
                </div>
                <div className = {style.mini_sep}>
                    <img  src={miniSep} alt="" />
                </div>
                
            </div>
        </>
    )
} 
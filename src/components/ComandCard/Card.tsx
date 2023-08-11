import style from './style.module.css'
import TGLOGO from '../../assets/TGLOGO.png'
interface FootballPlayer {
    id: number;
    logo: string;
    comandName: string;
  }
  
  interface FootballPlayerCardProps {
    player: FootballPlayer;
  }
export const Card: React.FC<FootballPlayerCardProps> = ({player}) => {
    return (
        <>
            {player.id === 1 ? 
            <div className={style.active}>
                <div className={style.container}>
                    <div className={style.dat}>
                        <p className={style.p}>
                            0{player.id}.
                        </p>
                        <div className={style.separator}></div>
                    </div>
                    <div className={style.logo}>

                    </div>
                    <div className={style.data}>
                        <h2>
                            {player.comandName}
                        </h2>
                        <a href='#'>ПОДРОБНЕЕ</a>
                    </div>
                </div>
            </div> 
                :
                <div className={style.noactive}>
                    <div className={style.container}>
                        <div className={style.dat}>
                            <p className={style.p}>
                                0{player.id}.
                            </p>
                            <div className={style.separator}></div>
                        </div>
                        <div className={style.logo}>

                        </div>
                        <div className={style.data}>
                            <h2>
                                {player.comandName}
                            </h2>
                            <a href='#'>ПОДРОБНЕЕ</a>
                        </div>
                    </div>
                </div>}
        </>
    )
}
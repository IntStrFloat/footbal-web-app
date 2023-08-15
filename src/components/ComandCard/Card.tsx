import style from './style.module.css'
import TGLOGO from '../../assets/TGLOGO.png'
interface CardProps {
    player: {
      _id: number;
      name: string;
      logo:string;
      // ... другие свойства игрока
    };
  }
export const Card: React.FC<CardProps> = ({player}) => {
    return (
        <>
            {player._id === 1 ? 
            <div className={style.active}>
                <div className={style.container}>
                    <div className={style.dat}>
                        <p className={style.p}>
                            0{player._id}.
                        </p>
                        <div className={style.separator}></div>
                    </div>
                    <div className={style.logo}>
                        <img src={player.logo} alt="" />
                    </div>
                    <div className={style.data}>
                        <h2>
                            {player.name}
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
                                0{player._id}.
                            </p>
                            <div className={style.separator}></div>
                        </div>
                        <div className={style.logo}>
                            <img src={player.logo} alt="" />
                        </div>
                        <div className={style.data}>
                            <h2>
                                {player.name}
                            </h2>
                            <a href='#'>ПОДРОБНЕЕ</a>
                        </div>
                    </div>
                </div>}
        </>
    )
}
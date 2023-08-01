import style from './style.module.css'
import TGLOGO from '../../assets/TGLOGO.png'
interface Props {
    id: number;
    elements: string;
}
export const Card = (children : Props) => {
    return (
        <>
            {children.id === 1 ? 
            <div className={style.active}>
                <div className={style.container}>
                    <div className={style.dat}>
                        <p className={style.p}>
                            0{children.id}.
                        </p>
                        <div className={style.separator}></div>
                    </div>
                    <div className={style.logo}>

                    </div>
                    <div className={style.data}>
                        <h2>
                            {children.elements}
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
                                0{children.id}.
                            </p>
                            <div className={style.separator}></div>
                        </div>
                        <div className={style.logo}>

                        </div>
                        <div className={style.data}>
                            <h2>
                                {children.elements}
                            </h2>
                            <a href='#'>ПОДРОБНЕЕ</a>
                        </div>
                    </div>
                </div>}
        </>
    )
}
import style from './style.module.css'
interface Props {
    leftData :string[];
    rightData :string[];
}


export const Match = (children :Props) => {
    return (
        <div className={style.container}>
                
                <div className={style.match_info}>
                    <h2>1 РАУНД ВЕРХНЯЯ СЕТКА</h2>
                    <div className={style.data}>
                        <div className={style.left_data}>
                            {children.leftData.map((elem,index)=>{return <a  href='#'> {elem}</a>;})}
                        </div>
                        <div className={style.main_set}>
                            00:00
                        </div>
                        <div className={style.right_data}>
                            {children.rightData.map((elem,index)=>{return <a  href='#'> {elem}</a>;})}
                        </div>
                    </div>
                    <a href="#">ПОДРОБНЕЕ</a>
                </div>
            </div>
    )
}
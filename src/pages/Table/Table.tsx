import style from './style.module.css'
import table_img from '../../assets/table_img.png'
import { MatchCard } from '../../components/MatchCard/MatchCatd'
function Table () {
    const weeks = ['week 1', 'week 2', 'week 3', 'week 4', 'week 5','week 6']
    return (
        <div className={style.container}>
            <div className={style.first_section}>
                <img src={table_img} alt="" />
                <div className={style.first_section_item}>
                    <h2>DOUBLE ELIMINATION</h2>
                    <p>Участвуют 8 команд</p>
                    <p>Все команды начинают игру в верхней сетке турнира</p>
                    <p>Проигравшие команды продолжают участие в нижней сетке турнира</p>
                    <p>Команда, проигравшая дважды, выбывает</p>
                </div>
            </div>
            <h2>РАСПИСАНИЕ CHERTANOVO CUP 2</h2>
            <div className={style.second_section}>
                {weeks.map((elem,index)=> {return <div className={style.item}>
                    {elem}
                </div>})}
                
            </div>
            <MatchCard/>
        </div>
    )
}
export default Table;
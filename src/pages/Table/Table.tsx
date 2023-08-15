import style from './style.module.css'
import table_img from '../../assets/table_img.png'
import small_table from '../../assets/small_table.png'
import { MatchCard } from '../../components/MatchCard/MatchCatd'
import { MatchGrid } from '../../components/MatchGrid/MatchGrid'
import { MatchGridLosers } from '../../components/MatchGridLosers/MatchGridLosers'
import { MatchGridWinner } from '../../components/MatchGridWinner/MatchGridWinner'
function Table () {
    const indexes = [1,2,3,4]
    const indexes2 = [1,2,3,4]
    const indexes3 = [1,2]
    const indexes4 = [1,2]
    const indexes5 = [1]
    const indexes6 = [1]
    const weeks = ['WEEK 1', 'WEEK 2', 'WEEK 3', 'WEEK 4', 'WEEK 5','WEEK 6']
    return (
        <div className={style.container}>
            <div className={style.first_section}>


            <div className={style.circle_container}>
                <img src={table_img} alt="Big Image" className={style.big_circle} />
                <div className={style.small_image_container}>
                <img src={small_table} alt="Small Image" className={style.small_circle} />
                </div>
            </div>
                <div className={style.first_section_item}>
                    <h2>DOUBLE ELIMINATION</h2>
                    <p>Участвуют 8 команд</p>
                    <p>Все команды начинают игру в верхней сетке турнира</p>
                    <p>Проигравшие команды продолжают участие в нижней сетке турнира</p>
                    <p>Команда, проигравшая дважды, выбывает</p>
                </div>
            </div>
            <h2>СЕТКА</h2>
            <div className={style.three_section}>
                <div>
                    <MatchGrid/>
                    <div className={style.losers}>
                        <MatchGridLosers/>
                    </div>
                </div>
                <div className={style.setka}>
                    <MatchGridWinner/>
                </div>
                
            </div>
            <h2>РАСПИСАНИЕ CHERTANOVO CUP 2</h2>
            <div className={style.second_section}>
            {weeks.map((week, weekIndex) => (
                <div className={style.local_container} key={weekIndex}>
                    <div className={style.item}>
                        {week}
                    </div>
                    <div className={style.cards}>
                        {weekIndex === 0 ? indexes.map((elem, index) => (
                            <MatchCard key={index} />
                        )) : weekIndex === 1 ? indexes2.map((elem, index) => (
                            <MatchCard key={index} />
                        )) : weekIndex === 2 ? indexes3.map((elem, index) => (
                            <MatchCard key={index} />
                        )) : weekIndex === 3 ? indexes4.map((elem, index) => (
                            <MatchCard key={index} />
                        )) : weekIndex === 4 ? indexes5.map((elem, index) => (
                            <MatchCard key={index} />
                        )) : weekIndex === 5 ? indexes6.map((elem, index) => (
                            <MatchCard key={index} />
                        )) : null}
                    </div>
                </div>
    ))}
            </div>
            
        </div>
    )
}
export default Table;
import style from './style.module.css'
import { Match } from '../../components/Match/Match';
function Calendar () {
    const left = ['day', 'month', 'year']
    const right = ['04.11', '15:00', '657']
    return (
        <div className={style.body}>
            <Match leftData={left} rightData={right}/>
            <Match leftData={left} rightData={right}/>

        </div>
    )
}

export default Calendar;
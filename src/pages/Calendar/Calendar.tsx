import style from './style.module.css'
import { Match } from '../../components/Match/Match';
function Calendar () {
    return (
        <div className={style.body}>
            <Match/>
            <Match/>

        </div>
    )
}

export default Calendar;
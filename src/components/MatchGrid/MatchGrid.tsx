import { MiniMatch } from "../MiniMatch/MiniMatch"
import style from './style.module.css'
import { MatchGridWinner } from "../MatchGridWinner/MatchGridWinner"
export const MatchGrid = () => {
    return (
        <div className={style.finish}>
            <div className={style.contact123}>
                <div className={style.container}>
                    <div className={style.left_corner}></div>
                    <div className={style.left_bottom_corner}></div>
                    <div className={style.first_round}>
                        <div className={style.pe}>
                            <p>1 РАУНД</p>
                        </div>
                        
                        <div className={style.first_matches}>
                            <div className={style.first_matches1}>
                                <div className={style.mini_match_container1}>
                                    <MiniMatch />
                                </div>
                                <div className={style.mini_match_container1}>
                                    <MiniMatch />
                                </div>
                            </div>
                                <div className={style.mini_match_container1}>
                                    <MiniMatch />
                                </div>
                                <div className={style.mini_match_container1}>
                                    <MiniMatch />
                                </div>
                        </div>
                    </div>
                    <div className={style.second_round}>
                        <div className={style.pe}>
                            <p>2 РАУНД</p>
                        </div>
                    
                        <div className={style.second_matches}>
                            <div className={style.mini_match_container}>
                                <MiniMatch />
                            </div>
                            <div className={style.mini_match_container2}>
                                <MiniMatch />
                            </div>
                        </div>
                        
                    </div>

                    
                    <div className={style.three_round}>
                        <div className={style.pe}>
                            <p>ФИНАЛ</p>
                        </div>
                        <div className={style.three_matches}>
                            <MiniMatch/>
                        </div>
                        
                    </div>
                    
                </div>
                
                
            </div>

        </div>
    )
}
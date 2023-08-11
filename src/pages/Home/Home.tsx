import style from './style.module.css'
import mainLogo from '../../assets/mainLogo.png'
import { Card } from '../../components/ComandCard/Card';
import Carousel from '../../components/FootballPlayerCards/CenteredFootballPlayerCards';
import YouTube from 'react-youtube';
function Home () {
    const id = 1;
    const id2 = 2;
    const elem = 'RED MOSCOW'
    const players = [
        {
            id:1,
            logo:elem,
            comandName: elem
        }, {
            id:2,
            logo:elem,
            comandName: elem
        },
        {
            id:3,
            logo:elem,
            comandName: elem
        }, {
            id:4,
            logo:elem,
            comandName: elem
        },
        {
            id:id,
            logo:elem,
            comandName: elem
        }, {
            id:id,
            logo:elem,
            comandName: elem
        },
        {
            id:id,
            logo:elem,
            comandName: elem
        }, {
            id:id,
            logo:elem,
            comandName: elem
        },
        {
            id:id,
            logo:elem,
            comandName: elem
        }, {
            id:id,
            logo:elem,
            comandName: elem
        },
        {
            id:id,
            logo:elem,
            comandName: elem
        }, {
            id:id,
            logo:elem,
            comandName: elem
        },
        {
            id:id,
            logo:elem,
            comandName: elem
        }, {
            id:id,
            logo:elem,
            comandName: elem
        },
        {
            id:id,
            logo:elem,
            comandName: elem
        }, {
            id:id,
            logo:elem,
            comandName: elem
        },
    ]
    const opts = {
        height: '387',
        width: '690',
        border:'100px solid black',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    return (
        <>
            <div className={style.css_selector}>
                <img className={style.mainLogo} src={mainLogo} alt="" />
            </div>
            <div className={style.container}>
                
                <div className={style.second_section}>
                    <div className={style.head}>
                        <h2>
                            01.
                        </h2>
                       <h2>
                            О ТУРНИРЕ
                        </h2>
                    </div>
                        
                    <p className={style.pe}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                    </p>
                    <div className={style.photos}>
                        <div className={style.item_left}>
                        </div>
                        <div className={style.item_right}>
                            <div className={style.item}></div>
                            <div className={style.item}></div>
                        </div>
                    </div>
                    <div className={style.head}>
                        <h2>
                            01.
                        </h2>
                       <h2>
                            О ТУРНИРЕ
                        </h2>
                    </div>
                        
                    <p className={style.pe}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                    </p>
                    <div className={style.com_cards}>
                        <Card player={players[0]}/>
                        <Card player={players[1]}/>
                        <Card player={players[2]}/>
                        <Card player={players[3]}/>
                    </div>
                    
                </div>
                <div className={style.last_section}>
                    <div className={style.cont}>
                        <div className={style.head}>
                                <h2>
                                    01.
                                </h2>
                            <h2>
                                    О ТУРНИРЕ
                                </h2>
                            </div>
                                
                            <p className={style.pe}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                            </p>
                        </div>
                        <div className={style.nadp}>
                            <h2>YouTube</h2>
                            <h2>Telegram</h2>
                        </div>
                        
                        <div className={style.media}>
                        
                            <YouTube className={style.yt} videoId="cGQovSJMFyw" opts={opts} />
                            <iframe id="preview" className={style.winget} src="https://xn--r1a.website/s/hpdeal"></iframe>
                        
                        </div>
                </div>

            </div>
        </>
    ) 
}
export default Home;
import style from './style.module.css'
import mainLogo from '../../assets/mainLogo.png'
import { Card } from '../../components/ComandCard/Card';
function Home () {
    const id = 1;
    const id2 = 2;
    const elem = 'RED MOSCOW'
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
                        
                    <p>
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
                        
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                    </p>
                    <div className={style.com_cards}>
                        <Card id={id} elements={elem}/>
                        <Card id={id2} elements={elem}/>
                        <Card id={id2} elements={elem}/>
                        <Card id={id2} elements={elem}/>
                        


                    </div>
                </div>
            </div>
        </>
    ) 
}
export default Home;
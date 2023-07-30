import style from './style.module.css'
import VKLOGO from '../../assets/VKLOGO.png'
import TGLOGO from '../../assets/TGLOGO.png'
import INSTLOGO from '../../assets/INSTLOGO.png'
import contactLOGO from '../../assets/contactLOGO.png'
function Contacts() {
    return(
        <div className={style.body}>
        
        <div className ={style.container}>
            <h1>КОНТАКТЫ</h1>
            <div className={style.contact_data}>
                <div className={style.contact}>
                    <h2>АКИФ</h2>
                    <div className={style.contact_links}>
                        <a href='https://vk.com/feed'>
                            <img src={VKLOGO} />
                        </a>
                        <a href='https://vk.com/feed'>
                            <img src={TGLOGO} />
                        </a>
                        <a href='https://vk.com/feed'>
                            <img src={INSTLOGO} />
                        </a>
                    </div>
            {/* Дополнительные данные для контакта 1 */}
                </div>
                <div className={style.contact}>
                    <h2>ЯРОСЛАВ</h2>
                    <div className={style.contact_links}>
                        <img src={VKLOGO} />
                        <img src={TGLOGO} />
                        <img src={INSTLOGO} />
                    </div>
                </div>
            </div>
            <img className = {style.logo} src={contactLOGO} />
            <div className={style.contact_links2}>
                        <img src={VKLOGO} />
                        <img src={TGLOGO} />
                        <img src={INSTLOGO} />
                    </div>
        </div>
        </div>
    );
};

export default Contacts;
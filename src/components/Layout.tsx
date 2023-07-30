import { Outlet } from 'react-router-dom'
import { Navigation } from './Navigation';
import { Footer } from './Footer/Footer';

function Layout () {
    return (
        <>
            <header>
                <Navigation/>
            </header>

            <Outlet/>

            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Layout;
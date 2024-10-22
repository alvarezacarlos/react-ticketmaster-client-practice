import { Link, useLocation } from 'react-router-dom';



import './Navbar.css'

const Navbar = () => {
    const { pathname } = useLocation()

    return (
        <div className='nav-container'>
            <Link to={`/`} className={`nav-logo ${pathname === '/' ? 'active' : ''}`}>
                Eventos
            </Link>
            <div className='nav-items'>
                {/* TODO: profile screen */}
                <Link to={`/profile`} className={`profile ${pathname.includes('/profile') ? 'active' : ''}`}>
                    Perfil
                </Link>
            </div>
        </div>
    )
}

export default Navbar
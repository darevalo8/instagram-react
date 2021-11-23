// import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebase_service';
import './Navbar.css'

export const Navbar = () => {

    // const navigate = useNavigate();
    const logout = () => {
        auth.signOut();
    }

    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <img src="./assets/img/logo.png" className="instagram-logo" alt="logo" />
                <input type="text" className="search-box" placeholder="Buscar..."/>
                <div className="nav-items">
                    <img src="./assets/img/home.png" className="icon" alt="" />
                    <img src="./assets/img/messenger.png" className="icon" alt="" />
                    <img src="./assets/img/add.png" className="icon" alt="" />
                    <img src="./assets/img/explore.png" className="icon" alt="" />
                    <img src="./assets/img/like.png" className="icon" alt="" />
                    <div className="icon user-profile dropdown">
                        <div className="menu-content">
                        <button className="logout-btn" onClick={logout}>
                            Cerrar sesión
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </nav>
    )
}

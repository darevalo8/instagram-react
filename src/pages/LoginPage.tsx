// import { useNavigate } from 'react-router-dom'
import { provider,auth } from '../services/firebase_service';
import { user } from '../services/userService'

export const LoginPage = () => {

    // let navigate = useNavigate();
    const signin = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

    return (
        <>
            <div className="main-login">
                <div className="wrapper-login">
                    <img src="./assets/img/banner.png" className="banner-img" alt="" />
                </div>
                <div className="login-card">
                    <img src="./assets/img/logo.png" className="instagram-logo-login" alt="logo" />
                    <div className="profile-pic-login">
                        <img src={user.profilePic} alt="" className="user-login-pic" />
                    </div>
                    <button className="login-btn" onClick={signin}>
                        Iniciar sesion con google
                        {/* Continuar como {user.username} */}
                    </button>
                    <p className="change-account">¿No eres {user.username}? <span className="change-account-span">Cambiar de cuenta</span></p>

                </div>
            </div>
            <div className="information">
                <div className="info-texts">
                    <span className="info-label">Meta</span>
                    <span className="info-label">Información</span>
                    <span className="info-label">Blog</span>
                    <span className="info-label">Ayuda</span>
                    <span className="info-label">API</span>
                    <span className="info-label">Privacidad</span>
                    <span className="info-label">Condiciones</span>
                    <span className="info-label">Cuentas destacadas</span>
                    <span className="info-label">Hashtags</span>
                    <span className="info-label">Ubicaciones</span>
                    <span className="info-label">Instagram Lite</span>
                </div>
                <div className="info-texts">
                    <span className="info-label">Belleza</span>
                    <span className="info-label">Danza</span>
                    <span className="info-label">Fitness</span>
                    <span className="info-label">Comida y bebida</span>
                    <span className="info-label">Casa y jardín</span>
                    <span className="info-label">Música</span>
                    <span className="info-label">Artes visuales</span>
                </div>
                <div className="info-texts end-text">
                    <span className="info-label">Español &or;</span>
                    <span className="info-label cursor-text">&copy; 2021 Instagram from Meta</span>
                </div>
            </div>
        </>
    )
}

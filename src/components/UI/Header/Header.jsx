import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../../features/auth/authSlice';

import logo from '../../../assets/Logo.png'

import '../../../styles/main.scss';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };

  if (user === null) return <p>de perro</p>

  return (
    <nav className = "navbar card animate__animated animate__fadeIn">
        <Link to="/main/home">
        <div className='logo'>
          <div className="logo_principal">
          <img src={logo} alt="Logo Connecta2" width={40}/>
            <span className='logo_text'>Connecta2</span>
            </div>
            <div className="info_usuario">
              {user.user.image && <img src={`http://localhost:4000/images/users/` + user.user.image } alt="Imagen Usuario Conectado"/> }
                <h3>{user.user.name}</h3>
                <h4>{user.user.email}</h4>
            </div>
            
        </div>
        </Link>
        <ul className = "navlist">
        <Link to="/main/home"><li>Home</li></Link>
        <Link to="/main/profile"><li>Profile</li></Link>
        </ul>
            {user ?
            <div className="logout">
            <Link to="/login" onClick={onLogout}><p>Logout</p></Link>
            </div>
            :
            <ul>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/register"><li>Register</li></Link>
            </ul>
            }
    </nav>
  )
}

export default Header
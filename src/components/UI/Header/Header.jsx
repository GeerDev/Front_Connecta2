import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../../features/auth/authSlice';

import './Header.css';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = (e) => {
    e.preventDefault();
    console.log("Holi")
    dispatch(logout());
    navigate("/");
  };


  return (
    <nav className = "navbar">
        <Link to="/home">
        <div className='logo'>
            {/* <img src={} alt="Logo Food News"/> */}
            <span className='logo_text'>Reddit Setups</span>
        </div>
        </Link>
        <ul className = "navlist">
        <Link to="/home"><li>Home</li></Link>
        <Link to="/profile"><li>Profile</li></Link>
        </ul>
            {user ?
            <div className="logout">
            <Link to="/login" onClick={onLogout}><span>Logout</span></Link>
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
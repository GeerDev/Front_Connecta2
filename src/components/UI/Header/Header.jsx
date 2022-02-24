import { Link } from "react-router-dom";

import './Header.css';

const Header = () => {
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
        <div className="logut">
        <Link to="/logout"><span>Logout</span></Link>
        </div>
    </nav>
  )
}

export default Header
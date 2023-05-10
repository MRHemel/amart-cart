import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <nav className="nav">
                <img src={logo} alt="" />
                <div className="nav-items">
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/login">Log in</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
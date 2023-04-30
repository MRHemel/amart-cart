import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {

    return (
        <div>
            <nav className="nav">
                <img src={logo} alt="" />
                <div className="nav-items">
                    <a href="/shop">Shop</a>
                    <a href="/about_us">About us</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/contacts">Contacts</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;
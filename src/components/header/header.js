import {Link} from 'react-router-dom';
import './header.css';
const Header = () => {
    return(
        
         <header>
             <nav className="wrapper">
             <Link to="/" className="logo">eCommerce Site</Link>
             <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/order">My Orders</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/counter">conter</Link></li>
             </ul>
             </nav>
         </header>
        
    )
}
export default Header;
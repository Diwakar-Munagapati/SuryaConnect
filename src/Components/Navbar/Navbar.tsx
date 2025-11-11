import './Navbar.css'
import logo from '../../assets/react.svg'

function Navbar() {
    return(
        <nav className='navbar'>
            <div className='navbar-container'>
               <a href="/" className='navbar-logo'><img src={logo} alt="" />SuryaConnect</a>
               <div className='navbar-center'>
                <p>Dealer Directory</p>
               </div>
               <ul className='nav-menu'>
                <li><a href="/login" className='nav-links-login'>Login</a></li>
                <li><a href="/signup" className='nav-links-signup'>Sign Up</a></li>
               </ul>
            </div>
        </nav>
    );
};

export default Navbar;
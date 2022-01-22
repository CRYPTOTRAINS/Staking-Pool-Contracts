import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import Profile from '../../home/profile/Profile';

const Header = () => {
  return (
    <nav className="header">
      <img className='logo' src={logo} alt='logo' />
      <header className='link-container'>
        <Link className='link-item' to="/train">Trains</Link> 
        <Link className='link-item' to="/">Staking</Link>
      </header>
      <Profile />
    </nav>
  );
};

export default Header;

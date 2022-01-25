/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import Profile from '../../home/profile/Profile';

const Header = () => {
  return (
    <>
      <nav className="header">
        <img className="logo" src={logo} alt="logo" />
        <header className="link-container">
          <Link className="link-item" to="/train">
            Trains
          </Link>
          <Link className="link-item" to="/">
            Staking
          </Link>
          <Link className="link-item" to="/presale">
            Presale
          </Link>
        </header>
        <Profile />
      </nav>
      <nav id="hamnav">
        <img className="logo" src={logo} alt="logo" />
        <label htmlFor="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger" />

        <div id="hamitems">
          <Link className="link-item" to="/train">
            Trains
          </Link>
          <Link className="link-item" to="/">
            Staking
          </Link>
          <Profile />
        </div>
      </nav>
    </>
  );
};

export default Header;

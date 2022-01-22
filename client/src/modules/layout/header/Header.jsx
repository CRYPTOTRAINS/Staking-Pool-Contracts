import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <Link to="/train">Train</Link> | <Link to="/">Stake</Link> |{' '}
      <Link to="/presale">Presale</Link> | <Link to="/marketplace">MarketPlace</Link>
    </nav>
  );
};

export default Header;

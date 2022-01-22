import './App.css';
import backgroundImage from './assets/images/background.png';

import Header from './modules/layout/header/Header';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <img className='bg' src={backgroundImage} alt='background' />
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

import './App.css';
// import { StakeList } from './modules/home/stake/StakeList';
import Header from './modules/layout/header/Header';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <header className="App-header">
        <StakeList />
      </header> */}
      <Outlet />
    </div>
  );
}

export default App;

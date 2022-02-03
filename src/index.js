import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { StakeList } from './modules/home/stake/StakeList';
import { TrainList } from './modules/home/train/TrainList';
import { Presale } from './modules/home/presale/Presale';
import { MarketList } from './modules/home/marketplace/MarketPlaceList';
import backgroundImage from './assets/images/background.png';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <img className='bg' src={backgroundImage} alt='background' />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<StakeList />} />
          <Route path="train" element={<TrainList />} />
          <Route path="presale" element={<Presale />} />
          <Route path="marketplace" element={<MarketList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

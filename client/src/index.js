import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { PresaleList } from './modules/home/presale/PresaleList';
import { MarketPlaceList } from './modules/home/marketplace/MarketPlaceList';
import { StakeList } from './modules/home/stake/StakeList';
import { TrainList } from './modules/home/train/TrainList';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<StakeList />} />
          <Route path="train" element={<TrainList />} />
          <Route path="presale" element={<PresaleList />} />
          <Route path="marketplace" element={<MarketPlaceList />} />
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

/* eslint-disable no-unused-vars */
import './Profile.css';
import { useState } from 'react';

const Profile = () => {
  const [coins, setCoins] = useState(0);
  const [user, setUser] = useState('123..6777');
  
  return (
    <main className="profile">
      <div className="coin-img">
        <div className="coins">{coins}</div>
      </div>
      <div className="account-img">
        <div className="accounts">{user}</div>
      </div>
    </main>
  );
};

export default Profile;

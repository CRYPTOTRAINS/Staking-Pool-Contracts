/* eslint-disable no-unused-vars */
import './Profile.css';
import { useEffect, useState } from 'react';
import { connectWallet, getCurrentWalletConnected } from "../../../utils/wallet";

const Profile = () => {
  const [coins, setCoins] = useState(0);
  const [walletAddress, setWallet] = useState("");
  
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

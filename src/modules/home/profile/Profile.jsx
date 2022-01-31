/* eslint-disable no-unused-vars */
import './Profile.css';
import { useEffect, useState } from 'react';
import { connectWallet, getCurrentWalletConnected } from "../../../utils/wallet";
import Web3Modal from "web3modal"
import { ethers } from "ethers";
import ENMTAddress from "../../../contracts/ENMT-address.json";
import ENMTArtifact from "../../../contracts/ENMT.json";

const Profile = () => {
  const [walletAddress, setWallet] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    (async() => {
      const {address} = await getCurrentWalletConnected();
      setWallet(address)
      addWalletListener();
      updateBalance()
    }) ()
  }, []);


  async function updateBalance() {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    })

    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(ENMTAddress.ENMT, ENMTArtifact.abi, signer);
   const {address} = await getCurrentWalletConnected();
    const data = await contract.balanceOf(address);
    const number = data.toNumber()
    const numberToWei = number * 1000000000000000000
    setBalance(numberToWei)
    console.log(numberToWei)
      return data.toNumber()
  
      
  }

   // connect wallet 
  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setWallet(walletResponse.address);
  };

  // wallet listener to update UI when wallet's state changes, 
    // such as when the user disconnects or switches accounts.
  function addWalletListener() {
      if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
          if (accounts.length > 0) {
          setWallet(accounts[0]);
        
          } else {
          setWallet("");
          }
      });
      } 
  }

  // If window.ethereum has not been injected.
  if (window.ethereum === undefined) {
    return (
    <div>
      <a href="http://metamask.io" target="_blank" rel="noopener noreferrer"> 
      No Ethereum wallet was detected. Install metamask</a>
    </div>)
  }
  
  return (
    <main className="profile">
      <div className="coin-img">
        <div className="coins">{balance}</div>
      </div>
      <div className="account-img">
      {walletAddress.length > 0 ? (
        <div className="accounts">
          {String(walletAddress).substring(0, 6) +
              "..." +
              String(walletAddress).substring(38)}
        </div>
         ) : (
        <div className="accounts" role = "button" tabIndex={0} onClick={connectWalletPressed} onKeyDown={connectWalletPressed}>Connect Wallet</div>
        )}
      </div>
    </main>
  );
};

export default Profile;

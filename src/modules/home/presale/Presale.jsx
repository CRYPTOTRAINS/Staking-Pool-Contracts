/* eslint-disable  jsx-a11y/no-noninteractive-element-interactions
 */
/* eslint-disable  no-unused-vars
 */
import './Presale.css';
import backgroundImage from '../../../assets/images/fondoNFTPresale.png';
import approve from '../../../assets/images/approve.png';
import loading from '../../../assets/images/loading.png';
import CtrainAddress from "../../../contracts/ctrain-address.json";
import CtrainArtifact from "../../../contracts/Ctrain.json";
import ENMTAddress from "../../../contracts/ENMT-address.json";
import ENMTArtifact from "../../../contracts/ENMT.json";
import { ethers } from "ethers";
import { useState } from 'react';
// import moment from "moment";

const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

export const Presale = () => {
  const [status, setStatus] = useState("");
  const [formNumber, updateFormNumber] = useState({no:0});

  async function createToken() {
    const no = formNumber;
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CtrainAddress.Ctrain, CtrainArtifact.abi, signer);
    const token = new ethers.Contract(ENMTAddress.ENMT, ENMTArtifact.abi, signer);
    const num = no.no;
   
    const price = (num * 6000000000000000000000).toLocaleString("fullwide", { useGrouping: false });
    console.log(price);
    try {
      const tx = await token.approve(CtrainAddress.Ctrain, price);
      await tx.wait();
      const tokenUri = "https";
      const transaction = await contract.create(num, tokenUri);
      const receipt = await transaction.wait();
        if (receipt.status === 0) {
          console.log("failed transaction");
          setStatus("Transaction failed");
          throw new Error("Transaction failed");
        } else {
          setStatus("Transaction successful");
        }
    } catch(error) {
      if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
        return;
      }
      console.error(error.message);
      setStatus(console.error(error.message));
    }
  }
  
  return (
    <main>
      <img className="bg" src={backgroundImage} alt="background" />
      <h1 className="presale-header">NFT PRESALE</h1>
      <p>{status}</p>
      <section className="time-cards">
        <article className="card days">
          <p className="number">00</p>
          <p className="reminder">DAYS</p>
        </article>
        <article className="card days">
          <p className="number">00</p>
          <p className="reminder">HOURS</p>
        </article>
        <article className="card days">
          <p className="number">00</p>
          <p className="reminder">MINUTES</p>
        </article>
        <article className="card days">
          <p className="number">00</p>
          <p className="reminder">SECONDS</p>
        </article>
      </section>
      <section className="presale-main">
        <article className="presale-img">
          <div className="presale-main-items">
            <p className="quantity">QUANTITY:  <input placeholder="E.g 2" required className="no"
                  onChange={e => updateFormNumber({...formNumber, no: e.target.value})}  /></p>
           
            <button className="approve">
              <img src={approve} onClick={createToken} onKeyDown={createToken} alt="approve button" />
            </button>
            <p className="congrats">congrats your wallet is whitelisted</p>
            <div className="sales-progress">
              <p className="sales-progress-text">SALE PROGRESS</p>
              <img src={loading} alt="sales progress loading" />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};
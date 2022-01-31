/* eslint-disable  jsx-a11y/no-noninteractive-element-interactions
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

const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

export const Presale = () => {
  const [status, setStatus] = useState("");
  const [formInput, updateFormInput] = useState({no:0});

  async function createToken() {
    const no = formInput;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CtrainAddress.Ctrain, CtrainArtifact, signer);
    const token = new ethers.Contract(ENMTAddress.ENMT, ENMTArtifact.abi, signer);

    const price = await contract.getMintingPrice(no);
    const amount = JSON.stringify(price);
    try {
      const tx = await token.approve(CtrainAddress.Ctrain, amount);
      await tx.wait();

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
            <p className="quantity">QUANTITY: </p>
            <input placeholder="E.g 2" required className="no"
                  onChange={e => updateFormInput({...formInput, amount: e.target.value})}  />
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
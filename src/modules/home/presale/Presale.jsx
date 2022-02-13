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
import { useEffect, useState } from 'react';

const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

export const Presale = () => {
  const [status, setStatus] = useState("");
  const [presaleStatus, setPresaleStatus] = useState("");
  const [formNumber, updateFormNumber] = useState({no:0});
  const [time, setTimer] = useState('');

  useEffect(() => {
   timer();
  }, []);

  function timer() {
    // Set the date we're counting down to
    const countDownDate = new Date("Feb 13, 2022 21:25:25").getTime();

    // Update the count down every 1 second
    const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let time = {
      Day: days,
      Hour: hours,
      Minute: minutes,
      Second: seconds,
    }
    
    setTimer(time);

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      setPresaleStatus("Presale Period is over!");
      let days = 0;
      let hours = 0;
      let minutes = 0;
      let seconds = 0;

      let time = {
        Day: days,
        Hour: hours,
        Minute: minutes,
        Second: seconds,
      }

      setTimer(time);
    }
    return time;
  }, 1000);
  }

  async function createToken() {
    const no = formNumber;
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CtrainAddress.Ctrain, CtrainArtifact.abi, signer);
    const token = new ethers.Contract(ENMTAddress.ENMT, ENMTArtifact.abi, signer);
    const num = no.no;
   
    const price = (num * 600000000000000000000).toLocaleString("fullwide", { useGrouping: false });
    
    try {
      const tx = await token.approve(CtrainAddress.Ctrain, price);
      await tx.wait();
      const fee = (num * 5300000000000000).toLocaleString("fullwide", { useGrouping: false });
      const transaction = await contract.create(num, { value: fee });
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
<div id="flipdown" className="flipdown"></div>
    <h5 className='py-3'>{status}</h5>
      <img className="bg" src={backgroundImage} alt="background" />
      <h1 className="presale-header">NFT PRESALE</h1>
      <h5 className='py-3'>{presaleStatus}</h5>
      <section className="time-cards">
        <article className="card days">
          <p className="number">{time.Day}</p>
          <p className="reminder">DAYS</p>
        </article>
        <article className="card days">
          <p className="number">{time.Hour}</p>
          <p className="reminder">HOURS</p>
        </article>
        <article className="card days">
          <p className="number">{time.Minute}</p>
          <p className="reminder">MINUTES</p>
        </article>
        <article className="card days">
          <p className="number">{time.Second}</p>
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
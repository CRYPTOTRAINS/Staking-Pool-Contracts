import './StakeList.css';
import './StakeItem.css';
// import StakeItem from './StakeItem';
import banco1 from '../../../assets/images/banco1.png';
import banco2 from '../../../assets/images/banco2.png';
import banco3 from '../../../assets/images/banco3.png';
import banco4 from '../../../assets/images/banco4.png';
import button from '../../../assets/images/botondebanco.png';
import BackArrow from '../../common/BackArrow/BackArrow';
import { useState } from 'react';
import UnstakeButton from '../../common/UnstakeButton/UnstakeButton';
import StakingAddress from "../../../contracts/contract-address.json";
import StakingArtifact from "../../../contracts/StakeToken.json";
import ENMTAddress from "../../../contracts/ENMT-address.json";
import ENMTArtifact from "../../../contracts/ENMT.json";
import { ethers } from "ethers";

export const StakeList = () => {
  const [stakes, setStakes] = useState([]);
  // const [formInput, updateFormInput] = useState({amount:0});

  // // async function updateBalance() {
  // //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  // //   const signer = provider.getSigner();
  // //   // const contract = new ethers.Contract(ENMTAddress.ENMT, ENMTArtifact.abi, signer);
  // //   // const balance = await contract.balanceOf(signer);
  // //   console.log(signer);
  // //   // return balance;
  // // }

  // async function stake() {
  //   const {amount} = formInput;

  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();
  //   const contract = new ethers.Contract(StakingAddress.StakeToken, StakingArtifact.abi, signer);

  //   const token = new ethers.Contract(ENMTAddress.ENMT, ENMTArtifact.abi, signer);

  //   try {
  //     await token.approve(StakingAddress.StakeToken, amount);
  //     const transaction = await contract.stake(amount, { value: amount });
  //     const receipt = await transaction.wait();
  //     if (receipt.status === 0) {
  //       setStatus("Transaction failed");
  //       throw new Error("Transaction failed");
  //     } else {
  //       setStatus("Staking successful");
  //     }
  //   } catch(error) {
  //     if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
  //       return;
  //     }
  //     console.error(error);
  //   }

 // }
  
  // const handleOnClick = async (item) => {
  //   stake();
  //   // You will implement the logic to add a stake from the list here
  //   if (stakes.length) {
  //     stakes.map((stake) => {
  //       if (stake.name === item.name) {
  //         return;
  //       } else {
  //         setStakes((stakes) => stakes.concat(item));
  //       }
  //     });
  //   } else {
  //     setStakes((stakes) => stakes.concat(item));
  //   }
  // };

  const handleRemove = async (array, item) => {
    // You will implement the logic to remove a stake from the list here
    const newStakes = array.filter(stake => stake.name !== item.name );
    setStakes(newStakes);
  }

  return (
    <>
      <h2 className="title">POOLS</h2>
      <div className="stake-list">
        {/*=============POOL ONE ======================*/}
        <main className="stake"> 
            <img src={banco1} alt="banco" />
            <section className="item-container">
              <article className="item">
                Name: <span className="name">CTRAIN INVESTORS</span>
              </article>
              <article className="item">
                APR: <span className="apr">100%</span>
              </article>
              <article className="item">
                Min: <span className="min">Staking 100</span>
              </article>
              <article className="item">
                Max: <span className="min">Staking 500,000</span>
              </article>
              <article className="item">
                Lock Days: <span className="lockdays">12 days</span>
              </article>
            </section>
            <input placeholder="amount" required className="input"
                onChange={e => updateFormInput({...formInput, account: e.target.value})}  />
            <img src={button} alt="boton de banco" className="button"/>
        </main>
        {/*=============POOL TWO ======================*/}
        <main className="stake">
            <img src={banco2} alt="banco" />
            <section className="item-container">
              <article className="item">
                Name: <span className="name">CTRAIN ADVOCATE</span>
              </article>
              <article className="item">
                APR: <span className="apr">165%</span>
              </article>
              <article className="item">
                Min: <span className="min">Staking 50</span>
              </article>
              <article className="item">
                Max: <span className="min">Staking 625,000</span>
              </article>
              <article className="item">
                Lock Days: <span className="lockdays">28 days</span>
              </article>
            </section>
            <input placeholder="amount" required className="input"
                onChange={e => updateFormInput({...formInput, account: e.target.value})}  />
            <img src={button} alt="boton de banco" className="button"/>
        </main>
        {/*=============POOL THREE======================*/}
        <main className="stake">
            <img src={banco3} alt="banco" />
            <section className="item-container">
              <article className="item">
                Name: <span className="name">CTRAIN ADVOCATE</span>
              </article>
              <article className="item">
                APR: <span className="apr">245%</span>
              </article>
              <article className="item">
                Min: <span className="min">Staking 250</span>
              </article>
              <article className="item">
                Max: <span className="min">Staking 750,000</span>
              </article>
              <article className="item">
                Lock Days: <span className="lockdays">44 days</span>
              </article>
            </section>
            <input placeholder="amount" required className="input"
                onChange={e => updateFormInput({...formInput, account: e.target.value})}  />
            <img src={button} alt="boton de banco" className="button"/>
        </main>

        {/*=============POOL FOUR======================*/}
        <main className="stake">
            <img src={banco4} alt="banco" />
            <section className="item-container">
              <article className="item">
                Name: <span className="name">CTRAIN ADVOCATE</span>
              </article>
              <article className="item">
                APR: <span className="apr">300%</span>
              </article>
              <article className="item">
                Min: <span className="min">Staking 300</span>
              </article>
              <article className="item">
                Max: <span className="min">Staking 1,000,000</span>
              </article>
              <article className="item">
                Lock Days: <span className="lockdays">60 days</span>
              </article>
            </section>
            <input placeholder="amount" required className="input"
                onChange={e => updateFormInput({...formInput, account: e.target.value})}  />
            <img src={button} alt="boton de banco" className="button"/>
        </main>













        
      </div>
      <BackArrow />
      <h2 className="stake-title">Your Stakes</h2>
      {stakes.length === 0 ? (
        <div className='no-stake'>You do not have any Stake Yet, Choose from above to Place Your Stake</div>
      ) : (
        <div className="stake-list">
          {stakes.map((stake) => (
            <div className="stake" key={stake.image}>
              <section className="item-container">
                <article className="item">
                  Name: <span className="name">{stake.name}</span>
                </article>
                <article className="item">
                  APR: <span className="apr">{stake.apr}</span>
                </article>
                <article className="item">
                  Min: <span className="min">{stake.min}</span>
                </article>
                <article className="item">
                  Max: <span className="min">{stake.max}</span>
                </article>
                <article className="item">
                  Lock Days: <span className="lockdays">{stake.lockdays}</span>
                </article>
                {/* <article className="item">
                  Status: <span className="status">{stake.status}</span>
                </article> */}
              </section>
              <UnstakeButton handleRemove={() => handleRemove(stakes, stake)} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

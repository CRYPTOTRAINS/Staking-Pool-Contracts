/* eslint-disable  jsx-a11y/no-noninteractive-element-interactions
 */
/* eslint-disable no-unused-vars */
import './StakeList.css';
import './StakeItem.css';
import banco1 from '../../../assets/images/banco1.png';
import banco2 from '../../../assets/images/banco2.png';
import banco3 from '../../../assets/images/banco3.png';
import banco4 from '../../../assets/images/banco4.png';
import button from '../../../assets/images/botondebanco.png';
import BackArrow from '../../common/BackArrow/BackArrow';
import { useEffect, useState } from 'react';
import unstake from '../../../assets/images/unstake-web.png';
import StakingAddress from "../../../contracts/stakeToken-address.json";
import StakingArtifact from "../../../contracts/StakeToken.json";
import ENMTAddress from "../../../contracts/ENMT-address.json";
import ENMTArtifact from "../../../contracts/ENMT.json";
import { ethers } from "ethers";
import Web3Modal from "web3modal"
import moment from "moment";

const ERROR_CODE_TX_REJECTED_BY_USER = 4001;
export const StakeList = () => {
  const [stakes, setStakes] = useState([]);
  const [indexInput, updateIndexInput] = useState({index:0});
  const [formInput, updateFormInput] = useState({amount:0});
  const [status, setStatus] = useState("");
  
  useEffect(() => {
    fetchMyStakes();
  }, []);

  
// ================ pool one ======================
  async function stakeOne() {

    const amount = ethers.utils.parseEther(formInput.amount);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(StakingAddress.StakeToken, StakingArtifact.abi, signer);
    const token = new ethers.Contract(ENMTAddress.ENMT, ENMTArtifact.abi, signer); 
    try {
            const tx = await token.approve(StakingAddress.StakeToken, amount);  
            await tx.wait();                                              
            const transaction = await contract.stakePoolOne(amount);
            const receipt = await transaction.wait();
              if (receipt.status === 0) {
                setStatus("Transaction failed");
                throw new Error("Transaction failed");
              } else {
                setStatus("Transaction successful");
              }
        }catch(error) {
            if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
              setStatus("Transaction rejected by user");
              return;
            }
            // console.error(error.message);
            setStatus(error.data.message);
        }
 }

 // ======================== pool two ======================
 async function stakeTwo() {
  const amount = ethers.utils.parseEther(formInput.amount);
  // const amt = JSON.stringify(amount*1000000000000000000)
  // const amt = (num * 6000000000000000000000).toLocaleString("fullwide", { useGrouping: false });
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(StakingAddress.StakeToken, StakingArtifact.abi, signer);
  const token = new ethers.Contract(ENMTAddress.ENMT, ENMTArtifact.abi, signer); // ////
    try {
              const tx = await token.approve(StakingAddress.StakeToken, amount);  ////
              await tx.wait();                                              ///////
          const transaction = await contract.stakePoolTwo(amount);
          const receipt = await transaction.wait();
          
            if (receipt.status === 0) {
              setStatus("Transaction failed");
              throw new Error("Transaction failed");
            } else {
              setStatus("Transaction successful");
            }
      }catch(error) {
          if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
            setStatus("Transaction rejected by user");
            return;
          }
          setStatus(error.data.message);
      }
}
 
 // ======================== pool three ======================
 async function stakeThree() {
  const amount = ethers.utils.parseEther(formInput.amount);
  const amt = JSON.stringify(amount*1000000000000000000)
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(StakingAddress.StakeToken, StakingArtifact.abi, signer);
  const token = new ethers.Contract(ENMTAddress.ENMT, ENMTArtifact.abi, signer); // ////
    try {
              const tx = await token.approve(StakingAddress.StakeToken, amt);  ////
              await tx.wait();                                              ///////
          const transaction = await contract.stakePoolThree(amt);
          const receipt = await transaction.wait();
            if (receipt.status === 0) {
              setStatus("Transaction failed");
              throw new Error("Transaction failed");
            } else {
              setStatus("Transaction successful");
            }
      }catch(error) {
          if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
            setStatus("Transaction rejected by user");
            return;
          }
          setStatus(error.data.message);
      }
}


 // ======================== pool four ======================
 async function stakeFour() {
  const amount = ethers.utils.parseEther(formInput.amount);
  const amt = JSON.stringify(amount*1000000000000000000)
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(StakingAddress.StakeToken, StakingArtifact.abi, signer);
  const token = new ethers.Contract(ENMTAddress.ENMT, ENMTArtifact.abi, signer); // ////
    try {
              const tx = await token.approve(StakingAddress.StakeToken, amt);  ////
              await tx.wait();                                              ///////
          const transaction = await contract.stakePoolFour(amt);
          const receipt = await transaction.wait();
            if (receipt.status === 0) {
              setStatus("Transaction failed");
              throw new Error("Transaction failed");
            } else {
              setStatus("Transaction successful");
            }
      }catch(error) {
          if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
            return;
          }
          setStatus(error.data.message);
      }
}
  async function fetchMyStakes() {
   
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    })

    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(StakingAddress.StakeToken, StakingArtifact.abi, signer);
    const data = await contract.fetchMyStakes();
    
    let counter = 0;
    const stakes = await Promise.all(data.map(async i => {
      const time = moment.unix(i.since) // convert blocktime to actual time
      //Selective pool display
      const pool = i.pool.toNumber();
      
      let stake = {
        //Amount: i.amount.toNumber(),
        Amount: i.amount.toLocaleString("fullwide", { useGrouping: false }),
        Start: time.toString(),
        Pool: i.pool.toNumber(),
        Index: counter,
      }
      
      counter++;
      

      if(pool == 1) {
        stake.Pool = "Bullet Branch"
      } else if(pool == 2) {
        stake.Pool = "Rail X Branch"
      } else if(pool == 3) {
        stake.Pool = "North Star Branch"
      } else {
        stake.Pool = "Stellar Branch"
      }
      
      return stake;
    }))

    setStakes(stakes);
  }

  async function withdraw() {
    const amount = formInput;
    const index = indexInput;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(StakingAddress.StakeToken, StakingArtifact.abi, signer);
   
    const num = index.index;

    const object = stakes[num];
    
    const amt = (amount.amount);

    try{
      if(object.Pool == "Bullet Branch") {
        console.log(object.Pool);
        const transaction = await contract.withdrawStakePoolOne(amt, num);
      
        const receipt = await transaction.wait();
      
            if (receipt.status === 0) {
              setStatus("Transaction failed");
              throw new Error("Transaction failed");
            } else {
              setStatus("Withdrawal successful");
            }
       
      } else if(object.Pool == "Rail X Branch") {
        console.log(object.Pool);
        const transaction = await contract.withdrawStakePoolTwo(amt, num);
        const receipt = await transaction.wait();
            if (receipt.status === 0) {
              setStatus("Transaction failed");
              throw new Error("Transaction failed");
            } else {
              setStatus("Transaction successful");
            }
        
      } else if(object.Pool == "North Star Branch") {
        console.log(object.Pool);
        const transaction = await contract.withdrawStakePoolThree(amt, num);
        const receipt = await transaction.wait();
            if (receipt.status === 0) {
              setStatus("Transaction failed");
              throw new Error("Transaction failed");
            } else {
              setStatus("Transaction successful");
            }
      } else {
        const transaction = await contract.withdrawStakePoolFour(amt, num);
        const receipt = await transaction.wait();
            if (receipt.status === 0) {
              setStatus("Transaction failed");
              throw new Error("Transaction failed");
            } else {
              setStatus("Transaction successful");
            }
      }
    } catch(error) {
      if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
        return;
      }
      setStatus(error.data.message);
    }
  
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
                Name: <span className="name">Bullet Branch</span>
              </article>
              <article className="item">
                APR: <span className="apr">100%</span>
              </article>
              <article className="item">
                Min: <span className="min">Staking 50</span>
              </article>
              <article className="item">
                Max: <span className="min">Staking 500,000</span>
              </article>
              <article className="item">
                Lock Days: <span className="lockdays">12 days</span>
              </article>
            </section>
            <form>
              <input placeholder="amount" required className="input"
                  onChange={e => updateFormInput({...formInput, amount: e.target.value})}  />
              <img src={button} onClick={stakeOne} onKeyDown={stakeOne} alt="boton de banco" className="button"/>
            </form>
        </main>
        {/*=============POOL TWO ======================*/}
        <main className="stake">
            <img src={banco2} alt="banco" />
            <section className="item-container">
              <article className="item">
                Name: <span className="name">Rail X Branch</span>
              </article>
              <article className="item">
                APR: <span className="apr">165%</span>
              </article>
              <article className="item">
                Min: <span className="min">Staking 100</span>
              </article>
              <article className="item">
                Max: <span className="min">Staking 625,000</span>
              </article>
              <article className="item">
                Lock Days: <span className="lockdays">28 days</span>
              </article>
            </section>
            
            <input placeholder="amount" required className="input"
                onChange={e => updateFormInput({...formInput, amount: e.target.value})}  />
            <img src={button} onClick={stakeTwo} onKeyDown={stakeTwo} alt="boton de banco" className="button"/>
        </main>
        {/*=============POOL THREE======================*/}
        <main className="stake">
            <img src={banco3} alt="banco" />
            <section className="item-container">
              <article className="item">
                Name: <span className="name">North Star Branch</span>
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
                onChange={e => updateFormInput({...formInput, amount: e.target.value})}  />
            <img src={button} onClick={stakeThree} onKeyDown={stakeThree} alt="boton de banco" className="button"/>
        </main>

        {/*=============POOL FOUR======================*/}
        <main className="stake">
            <img src={banco4} alt="banco" />
            <section className="item-container">
              <article className="item">
                Name: <span className="name">Stellar Branch</span>
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
                onChange={e => updateFormInput({...formInput, amount: e.target.value})}  />
            <img src={button} onClick={stakeFour} onKeyDown={stakeFour} alt="boton de banco" className="button"/>
        </main>

      </div>
      <BackArrow />
      <h5 className="status">{status}</h5>
      <h2 className="stake-title">Your Stakes</h2>
      {stakes.length === 0 ? (
        <div className='no-stake'>You do not have any Stake Yet, Choose from above to Place Your Stake</div>
      ) : (
        <div className="stake-list">
          
          {
            stakes.map((stake, i) => (
              <div  className="stake" key={stake.Index}>
                {/* {console.log(key)} */}
                <section className="item-container">
                
                  <article className="item">
                    Name: <span>{stake.Pool}</span>
                  </article>
                  <article className="item">
                    Amount: <span>{stake.Amount} CTRAIN</span>
                  </article>
                  <article className="item">
                    Start Time: <span>{stake.Start} </span> 
                  </article>
                  <article className="item">
                    Stake Count: <span>{stake.Index}</span> 
                  </article>
                </section>
                <input placeholder="amount" required className="input"
                onChange={e => updateFormInput({...formInput, amount: e.target.value})}  onInput={e => updateIndexInput({...indexInput, index: stake.Index})}/>
                    <img src={unstake} className="unstake-button" onClick={withdraw} onKeyDown={withdraw} alt="boton de banco" />
              </div>
            ))
          }
      </div>
       )}
    </>
  );
};

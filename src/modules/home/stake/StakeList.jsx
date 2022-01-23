import './StakeList.css';
import StakeItem from './StakeItem';
import banco1 from '../../../assets/images/banco1.png';
import banco2 from '../../../assets/images/banco2.png';
import banco3 from '../../../assets/images/banco3.png';
import banco4 from '../../../assets/images/banco4.png';
import BackArrow from '../../common/BackArrow/BackArrow';
import { useState } from 'react';
import { ethers } from "ethers";
import UnstakeButton from '../../common/UnstakeButton/UnstakeButton';
import StakingAddress from "../../../contracts/contract-address.json";
import StakingArtifact from "../../../contracts/StakeToken.json";
import ENMTAddress from "../../../contracts/ENMT-address.json";
import ENMTArtifact from "../../../contracts/ENMT.json";

const ERROR_CODE_TX_REJECTED_BY_USER = 4001;
const listItem = [
  {
    image: banco1,
    name: 'CTRAIN INVESTORS',
    apr: '100%',
    min: 'Staking 50',
    max: 'Staking 500,000',
    lockdays: '12 days'
    // status: '199,990,000', //What is this?
  },
  {
    image: banco2,
    name: 'CTRAIN ADVOCATE',
    apr: '165%',
    min: 'Staking 100',
    max: 'Staking 625,000',
    lockdays: '28 days'
    // status: '19999,0000',
  },
  {
    image: banco3,
    name: 'CTRAIN MANSION',
    apr: '245%',
    min: 'Staking 250',
    max: 'Staking 750,000',
    lockdays: '44 days'
    // status: '19999,0000',
  },
  {
    image: banco4,
    name: 'CTRAIN INVESTOR',
    apr: '300%',
    min: 'Staking 300',
    max: 'Staking 1,000,000',
    lockdays: '60 days'
    // status: '19999,0000',
  },
];

export const StakeList = () => {
  const [stakes, setStakes] = useState([]);

  async function updateBalance() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(ENMTAddress.ENMT, ENMTArtifact.abi, signer);
    const balance = await contract.balancOf(signer);
    console.log(balance);
    return balance;
  }

  updateBalance();

  async function stake() {
    // const {amount} = formInput;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(StakingAddress.StakeToken, StakingArtifact.abi, signer);

    const token = new ethers.Contract(ENMTAddress.ENMT, ENMTArtifact.abi, signer);

    const amount = 1000;
    try {
      await token.approve(StakingAddress.StakeToken, amount);
      const transaction = await contract.stake(amount, { value: amount });
      const receipt = await transaction.wait();
      if (receipt.status === 0) {
        setStatus("Transaction failed");
        throw new Error("Transaction failed");
      } else {
        setStatus("Staking successful");
      }
    } catch(error) {
      if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
        return;
      }
      console.error(error);
    }

  }
  







  const handleOnClick = async (item) => {
    stake();
    // You will implement the logic to add a stake from the list here
    if (stakes.length) {
      stakes.map((stake) => {
        if (stake.name === item.name) {
          return;
        } else {
          setStakes((stakes) => stakes.concat(item));
        }
      });
    } else {
      setStakes((stakes) => stakes.concat(item));
    }
  };

  const handleRemove = async (array, item) => {
    // You will implement the logic to remove a stake from the list here
    const newStakes = array.filter(stake => stake.name !== item.name );
    setStakes(newStakes);
  }

  return (
    <>
      <h2 className="title">POOLS</h2>
      <div className="stake-list">
        {listItem.map((item) => (
          <StakeItem
            key={item.image}
            image={item.image}
            name={item.name}
            apr={item.apr}
            min={item.min}
            max={item.max}
            lockdays={item.lockdays}
            // status={item.status}
            handleOnClick={() => handleOnClick(item)}
          />
        ))}
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

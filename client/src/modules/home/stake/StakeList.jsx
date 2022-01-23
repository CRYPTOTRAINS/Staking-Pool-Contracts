import './StakeList.css';
import StakeItem from './StakeItem';
import banco1 from '../../../assets/images/banco1.png';
import banco2 from '../../../assets/images/banco2.png';
import banco3 from '../../../assets/images/banco3.png';
import banco4 from '../../../assets/images/banco4.png';
import BackArrow from '../../common/BackArrow/BackArrow';
import { useState } from 'react';
import UnstakeButton from '../../common/UnstakeButton/UnstakeButton';

const listItem = [
  {
    image: banco1,
    name: 'CTRIAN INVESTORS',
    apr: '150%',
    min: 'Staking 300',
    lockdays: '10 days',
    status: '19999,0000',
  },
  {
    image: banco2,
    name: 'CTRIAN ADVOCATE',
    apr: '170%',
    min: 'Staking 380',
    lockdays: '10 days',
    status: '19999,0000',
  },
  {
    image: banco3,
    name: 'CTRIAN MAMSION',
    apr: '140%',
    min: 'Staking 330',
    lockdays: '10 days',
    status: '19999,0000',
  },
  {
    image: banco4,
    name: 'CTRIAN INVESTOR',
    apr: '200%',
    min: 'Staking 700',
    lockdays: '10 days',
    status: '19999,0000',
  },
];

export const StakeList = () => {
  const [stakes, setStakes] = useState([]);

  const handleOnClick = async (item) => {
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
            lockdays={item.lockdays}
            status={item.status}
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
                  Lock Days: <span className="lockdays">{stake.lockdays}</span>
                </article>
                <article className="item">
                  Status: <span className="status">{stake.status}</span>
                </article>
              </section>
              <UnstakeButton handleRemove={() => handleRemove(stakes, stake)} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

import './StakeList.css';
import StakeItem from './StakeItem';
import banco1 from '../../../assets/images/banco1.png';
import banco2 from '../../../assets/images/banco2.png';
import banco3 from '../../../assets/images/banco3.png';
import banco4 from '../../../assets/images/banco4.png';

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
    name: 'CTRIAN INVESTORS',
    apr: '170%',
    min: 'Staking 380',
    lockdays: '10 days',
    status: '19999,0000',
  },
  {
    image: banco3,
    name: 'CTRIAN INVESTORS',
    apr: '140%',
    min: 'Staking 330',
    lockdays: '10 days',
    status: '19999,0000',
  },
  {
    image: banco4,
    name: 'CTRIAN INVESTORS',
    apr: '200%',
    min: 'Staking 700',
    lockdays: '10 days',
    status: '19999,0000',
  },
];

export const StakeList = () => {
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
          />
        ))}
      </div>
    </>
  );
};

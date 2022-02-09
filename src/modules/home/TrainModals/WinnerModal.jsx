import './FuelModal.css';
import Modal from '../../common/Modal/Modal';
import numero1 from '../../../assets/images/numero1.png';
import numero2 from '../../../assets/images/numero2.png';
import numero3 from '../../../assets/images/numero3.png';
import numero4 from '../../../assets/images/numero4.png';
import BuyCTrainButton from '../../common/BuyCTrainButton/BuyCTrainButton';

export default function WinnerModal(props) {
  let winner;
  let position;
  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const randomWinner = randomIntFromInterval(1, 4);
  if (randomWinner === 1) {
    winner = numero1;
    position = '1st';
  } else if (randomWinner === 2) {
    winner = numero2;
    position = '2nd';
  } else if (randomWinner === 3) {
    winner = numero3;
    position = '3rd';
  } else {
    winner = numero4;
    position = '4th';
  }

  return (
    <Modal>
      <button className="close" onClick={props.close}></button>
      <img className="winner" src={winner} alt={`position number ${randomWinner}`} />
      <div className="cong">CONGRATULATIONS</div>
      <div className="position">{position} Place</div>
      <div className="gain-container">
        <div className="gain">+9 $CTRAIN</div>
        <div className="gain">+0.31 EXP</div>
      </div>
      <div className="winner-button">
        <BuyCTrainButton
          className="winner-image"
          handleOnClick={props.close}
          cTrainValue={'Okay'}
        />
      </div>
    </Modal>
  );
}

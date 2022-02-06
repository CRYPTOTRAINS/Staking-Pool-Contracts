import './FuelModal.css';
import Modal from '../../common/Modal/Modal';
import buy_fuel from '../../../assets/images/buy_fuel.png';
import BuyCTrainButton from '../../common/BuyCTrainButton/BuyCTrainButton';

export default function FuelModal(props) {
  return (
    <Modal>
      <button className="close" onClick={props.close}></button>
      <img className="buy-fuel" src={buy_fuel} alt="add fuel" />
      <div className="price">Price: 20 $CTRAIN</div>
      <div className="buy-button">
        <BuyCTrainButton handleOnClick={props.close} cTrainValue={'Buy Fuel'} />
      </div>
    </Modal>
  );
}

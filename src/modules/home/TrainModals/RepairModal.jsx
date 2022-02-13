import './FuelModal.css';
import Modal from '../../common/Modal/Modal';
import repair from '../../../assets/images/repair1.png';
import BuyCTrainButton from '../../common/BuyCTrainButton/BuyCTrainButton';

export default function RepairModal(props) {
  return (
    <Modal>
      <button className="close" onClick={props.close}></button>
      <img className="buy-fuel" src={repair} alt="add fuel" />
      <div className="price">Price: 20 $CTRAIN</div>
      <div className="buy-button">
        <BuyCTrainButton handleOnClick={props.close} cTrainValue={'repair train'} />
      </div>
    </Modal>
  );
}

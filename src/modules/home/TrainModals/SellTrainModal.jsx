import './FuelModal.css';
import Modal from '../../common/Modal/Modal';
import buy_ticket from '../../../assets/images/buy.png';
import BuyCTrainButton from '../../common/BuyCTrainButton/BuyCTrainButton';

export default function BuyTicketModal(props) {
  return (
    <Modal className="modal">
      <button className="close" onClick={props.close}></button>
      <img className="buy-ticket" src={buy_ticket} alt="buy ticket" />
      <p className="quantity">Price:  <input placeholder="600" required className="no"
                  onChange={e => updateFormNumber({...formNumber, no: e.target.value})}  /></p>
      <div className="buy-button">
        <BuyCTrainButton handleOnClick={props.close} cTrainValue={'Buy Train'} />
      </div>
    </Modal>
  );
}

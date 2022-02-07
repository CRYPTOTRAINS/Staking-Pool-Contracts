import './FuelModal.css';
import Modal from '../../common/Modal/Modal';
import buy_ticket from '../../../assets/images/buy.png';
import BuyCTrainButton from '../../common/BuyCTrainButton/BuyCTrainButton';

export default function BuyTicketModal(props) {
  return (
    <Modal className="modal">
      <button className="close" onClick={props.close}></button>
      <img className="buy-ticket" src={buy_ticket} alt="buy ticket" />
      <div className="price">Price: 2 $CTRAIN per ticket</div>
      <select name="select-train" id="select-train" className="train-select">
        <option selected value="volvo">
          15 Tickets for 28 $CTRAIN
        </option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <div className="buy-button">
        <BuyCTrainButton handleOnClick={props.close} cTrainValue={'Buy Tickets'} />
      </div>
    </Modal>
  );
}

import './FuelModal.css';
import Modal from '../../common/Modal/Modal';
import buy_ticket from '../../../assets/images/buy.png';
import BuyCTrainButton from '../../common/BuyCTrainButton/BuyCTrainButton';

export default function BuyTicketModal(props) {
  return (
    <Modal>
      <button className="close" onClick={props.close}></button>
      <img className="buy-ticket" src={buy_ticket} alt="buy ticket" />
      <div className="price">Price: 2 $CTRAIN per ticket</div>
      <div className="buy-button">
        <BuyCTrainButton handleOnClick={props.close} cTrainValue={'Buy Tickets'} />
      </div>
    </Modal>
  );
}

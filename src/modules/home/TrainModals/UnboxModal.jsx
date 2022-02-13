import './FuelModal.css';
import Modal from '../../common/Modal/Modal';
import unbox from '../../../assets/images/unbox_modal.png';
import BuyCTrainButton from '../../common/BuyCTrainButton/BuyCTrainButton';

export default function UnboxModal(props) {
  return (
    <Modal>
      <button className="close" onClick={props.close}></button>
      <div className="pills">
        <div className="pill-common">50%</div>
        <div className="pill-rare">35%</div>
        <div className="pill-epic">14%</div>
        <div className="pill-legendary">1%</div>
      </div>
      <img className="unbox-train" src={unbox} alt="unbox train" />
      <div className="price">Price: 600 $CTRAIN</div>
      <div className="buy-button">
        <BuyCTrainButton handleOnClick={props.close} cTrainValue={'Buy this train'} />
      </div>
    </Modal>
  );
}

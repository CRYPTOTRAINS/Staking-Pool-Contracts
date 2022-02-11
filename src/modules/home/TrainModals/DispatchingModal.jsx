import './FuelModal.css';
import Modal from '../../common/Modal/Modal';
import first from '../../../assets/images/first.png';
import second from '../../../assets/images/second.png';
import third from '../../../assets/images/third.png';
import fourth from '../../../assets/images/fourth.png';

import BuyCTrainButton from '../../common/BuyCTrainButton/BuyCTrainButton';

export default function DispatchingModal(props) {
  return (
    <Modal>
      <div className="dispatching">
        <div className="dispatching-text">Dispatching in 2...</div>
        <div className="first">
          <img className="buy-fuel" src={first} alt="first dispatch" />
          <p className="dispatch-first-name">George</p>
        </div>
        <div className="second">
          <img className="buy-fuel" src={second} alt="second dispatch" />
          <p className="dispatch-first-name">Okello</p>
        </div>
        <div className="third">
          <img className="buy-fuel" src={third} alt="third dispatch" />
          <p className="dispatch-first-name">Ismail</p>
        </div>
        <div className="fourth">
          <img className="buy-fuel" src={fourth} alt="fourth dispatch" />
          <p className="dispatch-first-name">Temi & Alycia</p>
        </div>
        <div className="close-button">
          <BuyCTrainButton
            className="close-image"
            handleOnClick={props.close}
            cTrainValue={'Close'}
          />
        </div>
      </div>
    </Modal>
  );
}

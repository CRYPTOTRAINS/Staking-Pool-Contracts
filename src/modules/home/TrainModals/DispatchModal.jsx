import Modal from '../../common/Modal/Modal';
import ModalBody from '../../common/Modal/ModalBody';
import ModalHeader from '../../common/Modal/ModalHeader';
import ModalFooter from '../../common/Modal/ModalFooter';
import classNames from 'classnames';
import cancel from '../../../assets/images/cancel.png';
import dispatch from '../../../assets/images/button_buy.png';

import styles from './DispatchModal.module.css';

export default function DispatchModal(props) {
  return (
    <Modal>
      <div className={classNames('dispatchModal')}>
        <ModalHeader>
          <h3>Test Modal #1</h3>
        </ModalHeader>
        <ModalBody>
          <p>Body of modal #1</p>
        </ModalBody>
        <ModalFooter className={styles.dispatchContainer}>
          <button onClick={props.close} className={classNames('btn', styles.dispatchFooter)}>
            <img src={dispatch} alt="dispatch" />
          </button>
          <button onClick={props.close} className={classNames('btn', styles.dispatchFooter)}>
            <img src={cancel} alt="cancel" />
          </button>
        </ModalFooter>
      </div>
    </Modal>
  );
}

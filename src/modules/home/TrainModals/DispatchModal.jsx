import Modal from '../../common/Modal/Modal';
import classNames from 'classnames';
import BuyCTrainButton from '../../common/BuyCTrainButton/BuyCTrainButton';

import styles from './DispatchModal.module.css';
import ModalRoot from '../../common/Modal/ModalRoot';
import ModalService from '../../../services/ModalService';
import DispatchingModal from './DispatchingModal';

export default function DispatchModal(props) {
  const addDispatchingModal = () => {
    ModalService.open(DispatchingModal);
  };
  return (
    <>
      <ModalRoot />
      <Modal>
        <form className={classNames('dispatchModal')}>
          <div>
            <div className={styles.captcha}>25p2m</div>
          </div>
          <div>
            <input className={styles.captchaInput} type="text" placeholder="captcha" />
          </div>
          <div className={styles.dispatchContainer}>
            <BuyCTrainButton handleOnClick={addDispatchingModal} cTrainValue={'Dispatch'} />
            <BuyCTrainButton handleOnClick={props.close} cTrainValue={'Cancel'} />
          </div>
        </form>
      </Modal>
    </>
  );
}

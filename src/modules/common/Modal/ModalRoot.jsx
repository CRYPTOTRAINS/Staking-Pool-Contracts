import classNames from 'classnames';
import { useState, useEffect } from 'react';
import ModalService from '../../../services/ModalService';
import styles from './ModalRoot.module.css';

export default function ModalRoot() {

  const [modal, setModal] = useState({});

  /* 
   * useEffect will run when the component renders, which might be more times than you think.
   * 2nd arg = If present, effect will only activate if the values in the list change.
   */
  useEffect(() => {
    ModalService.on('open', ({ component, props }) => {
      setModal({
        component,
        props,
        close: () => {
          setModal({});
        },
      });
    });
  }, []);

  const ModalComponent = modal.component ? modal.component : null;

  return (
    <section className={ modal.component ? classNames(styles.modalRoot, classNames) : '' }>
      
      { ModalComponent && (
        <ModalComponent
          { ...modal.props }
          close={ modal.close }
          className={ ModalComponent ? classNames('d-block', classNames) : '' }
        />
      )}
      
    </section>
  );
}
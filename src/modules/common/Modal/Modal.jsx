import classNames from "classnames";
import styles from './Modal.module.css';

export default function Modal(props) {
  return (
    <div className={classNames("modal d-block", classNames)}>
      <div className={classNames("modal-dialog", classNames)}>
        <div className={classNames("modal-content", styles.content, classNames)}>
          { props.children }
        </div>
      </div>
    </div>
  );
}
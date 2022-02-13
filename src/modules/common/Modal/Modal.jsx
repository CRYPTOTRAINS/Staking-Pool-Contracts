import classNames from "classnames";
import styles from './Modal.module.css';

export default function Modal(props) {
  return (
    <div className={classNames("modal d-block", classNames)}>
      <div className={classNames("modal-dialog", styles.dialog)}>
        <div className={classNames("modal-content", styles.content, props.className)}>
          { props.children }
        </div>
      </div>
    </div>
  );
}
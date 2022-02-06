import classNames from "classnames";
import styles from './Modal.module.css';

export default function ModalFooter(props) {
  return (
    <div className={classNames(styles.footer, classNames)}>
      { props.children }
    </div>
  );
}
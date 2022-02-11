import classNames from "classnames";

export default function ModalBody(props) {
  return (
    <div className={classNames("modal-body", classNames)}>
      { props.children }
    </div>
  );
}
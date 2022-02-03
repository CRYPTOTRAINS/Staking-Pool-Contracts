import Modal from "../../common/Modal/Modal";
import ModalBody from "../../common/Modal/ModalBody";
import ModalHeader from "../../common/Modal/ModalHeader";
import ModalFooter from "../../common/Modal/ModalFooter";

export default function DispatchModal(props) {
  return (
    <Modal>
      <ModalHeader>
        <h3>Test Modal #1</h3>
      </ModalHeader>
      <ModalBody>
        <p>Body of modal #1</p>
      </ModalBody>
      <ModalFooter>
        <button onClick={ props.close } className="btn btn-primary">Close Modal</button>
      </ModalFooter>
    </Modal>
  );
}
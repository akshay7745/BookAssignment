import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "./Form";

function ModalPopup({
  show,
  handleClose,
  bookData,
  handleChange,
  submitHandler,
}) {
  console.log("book", bookData);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <Form
          bookData={bookData}
          handleChange={handleChange}
          submitHandler={submitHandler}
        />
      </Modal.Body>
    </Modal>
  );
}

export default ModalPopup;

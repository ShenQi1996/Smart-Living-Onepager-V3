import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../actions/modal_actions";

const Modal = props => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.ui.modal.modal);
  let modalForm;
  const handleModal = e => {
    e.preventDefault();
    dispatch(closeModal());
  };

  switch (modal) {
    case "sign in":
      modalForm = (
        <div>
          This is sign in modal
          <button onClick={handleModal}>X</button>
        </div>
      );
      break;
    case "logn in":
      modalForm = (
        <div>
          This is logn in modal
          <button onClick={handleModal}>X</button>
        </div>
      );
      break;
    default:
      return null;
  }

  return (
    <div>
      <h1> Is working !!!!</h1>
      {modalForm}
    </div>
  );
};

export default Modal;

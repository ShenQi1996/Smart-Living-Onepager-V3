import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import Login_form from "../session/login_form";

const Modal = props => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.ui.modal.modal);
  let modalForm;
  const handleModal = e => {
    e.preventDefault();
    dispatch(closeModal());
  };

  switch (modal) {
    case "Sign In":
      modalForm = (
        <div>
          <Login_form />
          <button onClick={handleModal}>X</button>
        </div>
      );
      break;
    case "Sign Up":
      modalForm = (
        <div>
          This is sign up modal
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

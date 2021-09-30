import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import LS_form from "../session/ls_form";

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
        <div className="LS_form_outter">
          <button className="LS_form_button" onClick={handleModal}>
            X
          </button>
          <LS_form form="Sign In" />
        </div>
      );
      break;
    case "Sign Up":
      modalForm = (
        <div className="LS_form_outter">
          <button className="LS_form_button" onClick={handleModal}>
            X
          </button>
          <LS_form form="Sign Up" />
        </div>
      );
      break;
    default:
      return null;
  }

  return <div className="modal_outter">{modalForm}</div>;
};

export default Modal;

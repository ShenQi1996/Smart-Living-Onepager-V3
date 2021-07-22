import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const modalReducer = (state = {}, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, modal: action.modal, path: action.path };
    case CLOSE_MODAL:
      return {};
    default:
      return state;
  }
};

export default modalReducer;

const ADD_MESSAGE = "ADD_MESSAGE";
const EDIT_MESSAGE = "EDIT_MESSAGE";
const REMOVE_MESSAGE = "REMOVE_MESSAGE";

/** Action Generators */
const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: {
    message
  }
});

const editMessage = (id, updatedMessage) => ({
  type: EDIT_MESSAGE,
  payload: {
    id,
    updatedMessage
  }
});

const removeMessage = (id) => ({
  type: REMOVE_MESSAGE,
  payload: {
    id
  }
});

/** Async Action Generator Thunks */
const start__addMessage = (message = {}) => (dispatch) => {
  console.log("Asnc Add Message");
  return dispatch(addMessage(message));
};

const start__removeMessage = (id = "") => (dispatch) => {
  console.log("Async Remove Message");
  return dispatch(removeMessage(id));
};

const start__editMessage = (id = "", updatedMessage = {}) => (dispatch) => {
  console.log("Async Edit Message");
  return dispatch(editMessage(id, updatedMessage));
};

export { start__addMessage, start__removeMessage, start__editMessage };

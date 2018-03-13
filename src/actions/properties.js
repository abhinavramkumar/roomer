const ADD_PROPERTY = "ADD_PROPERTY";
const EDIT_PROPERTY = "EDIT_PROPERTY";
const REMOVE_PROPERTY = "REMOVE_PROPERTY";

/** Action Generators */
const addProperty = (property) => ({
  type: ADD_PROPERTY,
  payload: {
    property
  }
});

const editProperty = (id, updatedProperty) => ({
  type: EDIT_PROPERTY,
  payload: {
    id,
    updatedProperty
  }
});

const removeProperty = (id) => ({
  type: REMOVE_PROPERTY,
  payload: {
    id
  }
});

/** Async Action Generator Thunks */
const start__addProperty = (property = {}) => (dispatch) => {
  console.log("Asnc Add Property");
  return dispatch(addProperty(property));
};

const start__removeProperty = (id = "") => (dispatch) => {
  console.log("Async Remove Property");
  return dispatch(removeProperty(id));
};

const start__editProperty = (id = "", updatedProperty = {}) => (dispatch) => {
  console.log("Async Edit Property");
  return dispatch(editProperty(id, updatedProperty));
};

export { start__addProperty, start__removeProperty, start__editProperty };

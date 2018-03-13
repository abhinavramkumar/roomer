const ADD_TENNANT = "ADD_TENNANT";
const REMOVE_TENNANT = "REMOVE_TENNANT";
const EDIT_TENNANT = "EDIT_TENNANT";

/** Action Generators */
const addTennant = (tennant) => ({
  type: ADD_TENNANT,
  payload: {
    tennant
  }
});

const removeTennant = (id) => ({
  type: REMOVE_TENNANT,
  payload: {
    id
  }
});

const editTennant = (id, updatedTennant) => ({
  type: EDIT_TENNANT,
  payload: {
    id,
    updatedTennant
  }
});

/** Async Action Generator Thunks */
const start__addTennant = (tennant = {}) => (dispatch) => {
  console.log("Asnc Add Tennant");
  return dispatch(addTennant(tennant));
};

const start__removeTennant = (id = "") => (dispatch) => {
  console.log("Async Remove Tennant");
  return dispatch(removeTennant(id));
};

const start__editTennant = (id = "", updatedTennant = {}) => (dispatch) => {
  console.log("Async Edit Tennant");
  return dispatch(editTennant(id, updatedTennant));
};

export { start__addTennant, start__removeTennant, start__editTennant };

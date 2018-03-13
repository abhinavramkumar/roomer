const ADD_TENANT = "ADD_TENANT";
const REMOVE_TENANT = "REMOVE_TENANT";
const EDIT_TENANT = "EDIT_TENANT";

/** Action Generators */
const addTenant = (tenant) => ({
  type: ADD_TENANT,
  payload: {
    tenant
  }
});

const removeTenant = (id) => ({
  type: REMOVE_TENANT,
  payload: {
    id
  }
});

const editTenant = (id, updatedTenant) => ({
  type: EDIT_TENANT,
  payload: {
    id,
    updatedTenant
  }
});

/** Async Action Generator Thunks */
const start__addTenant = (tenant = {}) => (dispatch) => {
  console.log("Asnc Add Tenant");
  return dispatch(addTenant(tenant));
};

const start__removeTenant = (id = "") => (dispatch) => {
  console.log("Async Remove Tenant");
  return dispatch(removeTenant(id));
};

const start__editTenant = (id = "", updatedTenant = {}) => (dispatch) => {
  console.log("Async Edit Tenant");
  return dispatch(editTenant(id, updatedTenant));
};

export { start__addTenant, start__removeTenant, start__editTenant };

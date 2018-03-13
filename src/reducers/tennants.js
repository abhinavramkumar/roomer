export default (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_TENANT":
      return [...state, payload.tenant];

    case "EDIT_TENANT":
      let remainingTenants = state.filter((tenant) => tenant.id !== payload.id);
      return [...remainingTenants, payload.updatedTenant];

    case "REMOVE_TENANT":
      return state.filter((tenant) => tenant.id !== payload.id);

    default:
      return state;
  }
};

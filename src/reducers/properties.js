export default (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_PROPERTY":
      return [...state, payload.property];

    case "EDIT_PROPERTY":
      let remainingPropertys = state.filter(
        (property) => property.id !== payload.id
      );
      return [...remainingPropertys, payload.updatedProperty];

    case "REMOVE_PROPERTY":
      return state.filter((property) => property.id !== payload.id);

    default:
      return state;
  }
};

export default (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_TENNANT":
      return [...state, payload.tennant];

    case "EDIT_TENNANT":
      let remainingTennants = state.filter(
        (tennant) => tennant.id !== payload.id
      );
      return [...remainingTennants, payload.updatedTennant];

    case "REMOVE_TENNANT":
      return state.filter((tennant) => tennant.id !== payload.id);

    default:
      return state;
  }
};

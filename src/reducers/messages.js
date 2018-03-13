export default (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_MESSAGE":
      return [...state, payload.message];

    case "EDIT_MESSAGE":
      let remainingMessages = state.filter(
        (message) => message.id !== payload.id
      );
      return [...remainingMessages, payload.updatedMessage];

    case "REMOVE_MESSAGE":
      return state.filter((message) => message.id !== payload.id);

    default:
      return state;
  }
};

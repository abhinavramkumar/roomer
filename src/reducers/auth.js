export default (state = {}, { type, payload }) => {
  switch (type) {
    case "LOG_IN":
      return {
        uid: payload.uid
      };

    case "LOG_OUT":
      return {};

    default:
      return state;
  }
};

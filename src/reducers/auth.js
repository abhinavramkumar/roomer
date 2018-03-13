export default (state = {}, { type, payload }) => {
  switch (type) {
    case "LOG_IN":
      return {
        user: payload.user
      };

    case "LOG_OUT":
      return {};

    default:
      return state;
  }
};

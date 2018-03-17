export default (state = {}, { payload, type }) => {
  switch (type) {
    case "SET_TEXT_FILTER":
      return {
        text: payload.text
      };

    default:
      return state;
  }
};

const setTextFilter = (text) => ({
  type: "SET_TEXT_FILTER",
  payload: {
    text
  }
});

const start__setTextFilter = (text = "") => (dispatch) =>
  dispatch(setTextFilter(text));

export { start__setTextFilter };

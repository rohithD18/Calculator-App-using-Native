export const loadButtons = (btn) => {
  return {
    type: "LOAD_BUTTONS",
    payload: btn,
  };
};
export const clearButton = () => {
  return {
    type: "CLEAR_ALL",
  };
};
export const evaluateAnswer = (input) => {
  return {
    type: "GET_ANSWER",
    payload: input,
  };
};
export const operatorButtons = (input) => {
  return {
    type: "OPERATOR_BUTTONS",
    payload: input,
  };
};

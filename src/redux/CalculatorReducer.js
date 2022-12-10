const initialState = {
  number: '',
};

export const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
    case "LOAD_BUTTONS": 
      return {
        ...state,
        number: state.number.concat(action.payload)
      };
    case "CLEAR_ALL":
      return {
        ...state,
        number: "",
      };
    case "GET_ANSWER":
      try {
        return {
          ...state,
          number: eval(action.payload).toString(),
        };
      } catch (error) {
        return {
          ...state,
          number: "error",
        };
      }
    case "OPERATOR_BUTTONS":
      return {
        ...state,
        number : state.number.concat(action.payload)
      }
    default:
      return state;
  }
};

import { ADD_TO_Favo, REMOVE_FROM_Favo } from "../actions";
import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_Favo:
      return {
        ...state,
        favo: {
          ...state.favo,
          content: [...state.favo.content, action.payload],
        },
      };
    case REMOVE_FROM_Favo:
      return {
        ...state,
        favo: {
          ...state.favo,
          content: state.favo.content.filter((el, i) => i !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;

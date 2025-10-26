import { SET_GLOBAL_LANGUAGE } from "../actionTypes";

const initialState = {
  lang: "en",
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GLOBAL_LANGUAGE:
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;

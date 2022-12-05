import {
FETCH_APPLICATION,
} from "../actionTypes/actionTypes";

const initialState = {
  applications: [],
};

function applicationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_APPLICATION:
      return {
        ...state,
        applications: action.payload,
      };
    default:
      return state;
  }
}

export default applicationReducer;
import {
  FETCH_JOB,
  FETCH_ONE_JOB
} from "../actionTypes/actionTypes";

const initialState = {
  jobs: [],
  jobDetail: {}
};

function jobReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOB:
      return {
        ...state,
        jobs: action.payload,
      };
    case FETCH_ONE_JOB:
      return {
        ...state,
        jobDetail: action.payload,
      }
    default:
      return state;
  }
}

export default jobReducer;
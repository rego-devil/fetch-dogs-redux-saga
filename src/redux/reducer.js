import * as constants from './constants';

// Reducer
const initialState = {
  url: '',
  loading: false,
  error: false,
};

export const dog = (state = initialState, action) => {
  switch (action.type) {

    case constants.REQUESTED_DOG:
      return {
        url: '',
        loading: true,
        error: false,
      };

    case constants.REQUESTED_DOG_SUCCEEDED:
      return {
        url: action.url,
        loading: false,
        error: false,
      };

    case constants.REQUESTED_DOG_FAILED:
      return {
        url: '',
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
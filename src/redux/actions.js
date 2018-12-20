import * as constants from './constants';

// Action Creators
export const requestDog = () => {
  return { type: constants.REQUESTED_DOG }
};
  
export const requestDogSuccess = (data) => {
  return { 
		type: constants.REQUESTED_DOG_SUCCEEDED,
		url: data.message
	}
};

export const requestDogError = () => {
	return { 
		type: constants.REQUESTED_DOG_FAILED
	}
};

export const fetchDog = () => {
	return { 
		type: constants.FETCHED_DOG
	}
};
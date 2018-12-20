import { put, call, take, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as constants from './constants';
import { isEqual } from 'lodash';

// Sagas
export function* watchFetchDog() {
  while(true) {
    yield take(constants.REQUESTED_DOG);
    yield call(fetchDogAsync);
  }
  // yield takeEvery(constants.FETCHED_DOG, fetchDogAsync);
}

function* fetchDogAsync() {
  try {
    // yield put(actions.requestDog());
    const data = yield call(() => {
      return fetch('https://dog.ceo/api/breeds/image/random').then(res => res.json())
      }
    );
    yield put(actions.requestDogSuccess(data));
  } 
  catch (error) {
    yield put(actions.requestDogError());
  }
}


//testing
// const iterator = fetchDogAsync();
// iterator.next();
// const value = iterator.next().value;
// console.log( isEqual(value, call(() => fetch('https://dog.ceo/api/breeds/image/random').then(res => res.json() ))), 'wrong value of test' );
// console.log(call(() => fetch('https://dog.ceo/api/breeds/image/random')))
// console.log(value)
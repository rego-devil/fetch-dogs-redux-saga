import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { dog } from './reducer';
import { watchFetchDog } from './saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);

const reducers = combineReducers({
  dog
});

export const store = createStore(reducers, enhancer);

sagaMiddleware.run(watchFetchDog); //run middleware saga
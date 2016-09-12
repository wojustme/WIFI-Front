'use strict';
/**
 * src/store/configureStore.jsx
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import * as reducers from '../reducers/AppReducer';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const appReducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

function configureStore(initialState) {
  return createStoreWithMiddleware(appReducer, initialState);
}

export const store = configureStore();

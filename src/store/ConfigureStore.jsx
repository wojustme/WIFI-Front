'use strict';
/**
 * src/store/configureStore.jsx
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer } from 'react-router-redux';


let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const appReducer = combineReducers({
  routing: routerReducer
})

function configureStore(initialState) {
  return createStoreWithMiddleware(appReducer, initialState);
}

export const store = configureStore();

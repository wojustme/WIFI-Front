'use strict';
/**
 * src/entry.jsx
 */
import 'babel-polyfill';//Babel默认只转换新的JavaScript句法,通过babel-polyfill转换新的API
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/ConfigureStore';
import Routes from './route/Routes';

ReactDOM.render(
	<div>
    <Provider store={store}>
			<Routes store={store} />
    </Provider>
  </div>,
  document.getElementById('app')
);

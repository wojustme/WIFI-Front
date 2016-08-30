'use strict';
/**
 * src/entry.jsx
 */
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

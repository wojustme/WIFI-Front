'use strict';
/**
 * src/routes/Routes.jsx
 */
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from '../containers/App';
import Home from '../containers/home/Home';
import Lessee from '../containers/lessee/Lessee';

/**
 * @class             项目APP的路由控制类
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
class Routes extends React.Component {
  render() {
    const { store } = this.props;
    const history = syncHistoryWithStore(browserHistory, store);
    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Lessee} />
          <Route path="home" component={Home}/>
          <Route path="lessee" component={Lessee}/>
        </Route>
      </Router>
    );
  }
}

export { Routes as default };

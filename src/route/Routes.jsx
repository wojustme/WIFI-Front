'use strict';
/**
 * src/routes/Routes.jsx
 */
import React from 'react';
import { Router, Route, IndexRoute, browserHistory,hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from '../containers/App';
import Home from '../containers/home/Home';
import Lessee from '../containers/lessee/Lessee';
import LesseeMonitorAll from '../components/lessee/LesseeMonitorAll';
import LesseeMonitorAPAlarm from '../components/lessee/LesseeMonitorAPAlarm';
import LesseeMonitorSSID from '../components/lessee/LesseeMonitorSSID';
import LesseeMonitorUserCount from '../components/lessee/LesseeMonitorUserCount';
import LesseeMonitorBandWidth from '../components/lessee/LesseeMonitorBandWidth';

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
          <Route path="lessee" component={Lessee}>
            <IndexRoute component={LesseeMonitorAll}/>
            <Route path='monitorAll' component={LesseeMonitorAll}/>
            <Route path='monitorAPAlarm' component={LesseeMonitorAPAlarm}/>
            <Route path='monitorSSID' component={LesseeMonitorSSID}/>
            <Route path='monitorUserCount' component={LesseeMonitorUserCount}/>
            <Route path='monitorBandWidth' component={LesseeMonitorBandWidth}/>
          </Route>
        </Route>
      </Router>
    );
  }
}

export { Routes as default };

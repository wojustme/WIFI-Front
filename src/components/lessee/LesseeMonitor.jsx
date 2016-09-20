'use strict';
/**
 * src/components/lessee/LesseeMonitor.jsx
 */
import React from 'react';
import Image from '../common/Image';
import {Link} from 'react-router';
import LesseeMonitorAll from './LesseeMonitorAll';
import './style/lesseeMonitor.scss';
/**
 * @class             租户中心第4屏的监控中心
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
class LesseeMonitor extends React.Component {
  render() {
    return (
      <div
        style={{
          height:650,
          textAlign:"center"
        }}
      >
        <Image locateTo="lessee" imgName="监控中心分割线"/>
        <div className="lesseeMonitor-menu">
          <ul>
            <li><Link activeClassName="active" to='/lessee/monitorAll'>全部</Link></li>
            <li>|</li>
            <li><Link activeClassName="active" to='/lessee/monitorAPAlarm'>AP告警</Link></li>
            <li>|</li>
            <li><Link activeClassName="active" to='/lessee/monitorSSID'>SSID用户数和比例</Link></li>
            <li>|</li>
            <li><Link activeClassName="active" to='/lessee/monitorUserCount'>用户数</Link></li>
            <li>|</li>
            <li><Link activeClassName="active" to='/lessee/monitorBandWidth'>带宽(Mbps)</Link></li>
          </ul>
        </div>
        <div style={{height:"60px"}} />
        {this.props.children}
      </div>
    );
  }
}

export { LesseeMonitor as default };

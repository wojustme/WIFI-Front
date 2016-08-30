'use strict';
/**
 * src/components/lessee/LesseeMonitor.jsx
 */
import React from 'react';
import Image from '../common/Image';
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
      </div>
    );
  }
}

export { LesseeMonitor as default };

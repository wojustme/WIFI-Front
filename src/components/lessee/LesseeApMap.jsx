'use strict';
/**
 * src/components/lessee/LesseeApMap.jsx
 */
import React from 'react';
import Image from '../common/Image';
import BaiduMap from '../common/BaiMap';
/**
 * @class             租户中心第1屏的AP地图分布组件
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
class LesseeApMap extends React.Component {
  render() {
    return (
      <div
        style={{
          height:650,
          textAlign:"center"
        }}
      >
        <Image locateTo="lessee" imgName="ap分布分割线"/>
        <div style={{height:"60px"}} />
        <BaiduMap id="apmap"/>
      </div>
    );
  }
}

export { LesseeApMap as default };

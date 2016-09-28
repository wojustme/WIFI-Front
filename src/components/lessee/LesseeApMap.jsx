'use strict';
/**
 * src/components/lessee/LesseeApMap.jsx
 */
import React from 'react';
import BaiduMap from '../common/BaiMap';
import PartingLine from '../common/PartingLine';
/**
 * @class             租户中心第1屏的AP地图分布组件
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
class LesseeApMap extends React.Component {
  render() {
    let apPoints =[//模拟数据
            {"lng":120.218261,"lat":30.221984,"count":50},
            {"lng":120.223332,"lat":30.216532,"count":51},
            {"lng":120.219787,"lat":30.230658,"count":15},
            {"lng":120.218455,"lat":30.220921,"count":40},
            {"lng":120.218843,"lat":30.215516,"count":100},
            {"lng":120.22546,"lat":30.218503,"count":6},
            {"lng":120.223289,"lat":30.219989,"count":18},
            {"lng":120.218162,"lat":30.215051,"count":80},
            {"lng":120.222039,"lat":30.21782,"count":11},
            {"lng":120.21387,"lat":30.217253,"count":7},
            {"lng":120.225867,"lat":30.218989,"count":8}
        ];
    return (
      <div
        style={{
          height:650,
          textAlign:"center"
        }}
      >
        <PartingLine
          useImgSource={{
            locateTo: "lessee",
            imgName: "ap分布分割线"
          }}
        />
        <BaiduMap id="apmap" apPoints={apPoints} className=""/>
      </div>
    );
  }
}

export { LesseeApMap as default };

'use strict';
/**
 * src/components/lessee/LesseeApMsg.jsx
 */
import React from 'react';
import Image from '../common/Image';
import Grid from '../common/Grid';
/**
 * @class             租户中心第1屏的AP信息组件
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
class LesseeApMsg extends React.Component {
  render() {
    return (
      <div
        style={{
          height:650,
          textAlign:"center"
        }}
      >
        <Image locateTo="lessee" imgName="ap信息分割线"/>
        <div
          style={{
            width:"80%",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center"
          }}
        >
          <Grid />
        </div>
      </div>
    );
  }
}

export { LesseeApMsg as default };

'use strict';
/**
 * src/components/lessee/LesseePortal.jsx
 */
import React from 'react';
import Image from '../common/Image';
/**
 * @class             租户中心第3屏的Portal管理组件
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
class LesseePortal extends React.Component {
  render() {
    return (
      <div
        style={{
          height:650,
          textAlign:"center"
        }}
      >
        <Image locateTo="lessee" imgName="portal管理分割线"/>
      </div>
    );
  }
}

export { LesseePortal as default };

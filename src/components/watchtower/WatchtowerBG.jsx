'use strict';
/**
 * src/components/watchtower/WatchtowerBG.jsx
 */
import React, { Component } from 'react';
import Image from '../common/Image';
/**
 * @class             Watchtower管理第0屏的背景组件
 * @author            xurenhe
 * @date              2016-09-28
 * @copyright         城云科技
 * @version           0.0.1
 */
class WatchtowerBG extends Component {

  // 组件渲染
  render() {
    return (
      <div>
        <Image locateTo='watchtower' imgName='瞭望塔背景'/>
      </div>
    );
  }

}

export { WatchtowerBG as default };

'use strict';
/**
 * src/components/portal/PortalBG.jsx
 */
import React from 'react';
import Image from '../common/Image';
/**
 * @class             Portal管理第0屏的背景组件
 * @author            xurenhe
 * @date              2016-09-21
 * @copyright         城云科技
 * @version           0.0.1
 */
class PortalBG extends React.Component {

  // 组件渲染
  render() {
    return (
      <div>
        <Image locateTo='portal' imgName='Portal管理背景'/>
      </div>
    );
  }

}

export { PortalBG as default };

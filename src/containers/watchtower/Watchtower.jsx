'use strict';
/**
 * src/containers/Watchtower.jsx
 */
import React from 'react';
import WatchtowerBG from '../../components/watchtower/WatchtowerBG';
/**
 * @class             Watchtower瞭望塔容器组件
 * @author            liulei
 * @date              2016-09-28
 * @copyright         城云科技
 * @version           0.0.1
 */
class Watchtower extends React.Component {
  render() {
    return (
      <div>
        {/* 第0屏 */}
        <WatchtowerBG />
      </div>
    );
  }
}
export { Watchtower as default };

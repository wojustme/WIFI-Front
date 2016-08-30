'use strict';
/**
 * src/containers/Home.jsx
 */
import React from 'react';
import Image from '../../components/common/Image';
/**
 * @class             首页容器
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
class Home extends React.Component {
  render() {
    let url = '../../assets/home/首页背景.jpg';
    return (
      <div>
        <h1 className="test">这是首页</h1>
        {/* 第0屏 */}
        <Image locateTo='lessee' imgName='租户中心背景'/>
      </div>
    );
  }
}

export { Home as default };

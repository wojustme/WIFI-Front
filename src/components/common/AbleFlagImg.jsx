'use strict';
/**
 * src/components/common/AbleFlagImg.jsx
 */
import React, { Component } from 'react';
import { IMG_SERVER } from '../../config/AppConfigure.jsx'
/**
 * @class             显示是否失效的图片组件
 * @author            xurenhe
 * @date              2016-09-10
 * @copyright         城云科技
 * @version           0.0.1
 */
class AbleFlagImg extends Component {
  render() {
    const { locateTo, imgName, able, style, clickFun } = this.props;
    let ableFlag = able==false ? "_disable" : "";
    let url = IMG_SERVER + locateTo + '/' + imgName + ableFlag + '.png';
    let styleTmp;
    style == undefined ?
      styleTmp = {} :
      styleTmp = style;
    return (
      <img
        src={url}
        style={styleTmp}
        onClick={clickFun}
      />
    );
  }
}

export { AbleFlagImg as default };

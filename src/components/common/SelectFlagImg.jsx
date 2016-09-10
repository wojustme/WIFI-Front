'use strict';
/**
 * src/components/common/SelectFlagImg.jsx
 */
import React from 'react';
import { IMG_SERVER } from '../../config/AppConfigure.jsx'
/**
 * @class             显示是否被选中的图片组件
 * @author            xurenhe
 * @date              2016-09-10
 * @copyright         城云科技
 * @version           0.0.1
 */
class SelectFlagImg extends React.Component {
  render() {
    const { locateTo, imgName, isSelected, cursorStyle, style, clickFun } = this.props;
    let selectFlag = isSelected ? "_selected" : "";
    let url = IMG_SERVER + locateTo + '/' + imgName + selectFlag + '.png';
    let styleTmp;
    style == undefined ?
      styleTmp = {} :
      styleTmp = style;
    cursorStyle == "pointer" ?
      styleTmp["cursor"] = "pointer" :
      styleTmp["cursor"] = "auto";
    return (
        <img
          src={url}
          style={styleTmp}
        />

    );
  }
}

export { SelectFlagImg as default };

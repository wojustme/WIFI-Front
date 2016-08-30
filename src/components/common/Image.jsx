'use strict';
/**
 * src/components/common/Image.jsx
 */
import React from 'react';
import { IMG_SERVER } from '../../config/AppConfigure.jsx'
/**
 * @class             显示图片组件
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
class Image extends React.Component {
  render() {
    const { locateTo, imgName, isSelected, cursorStyle } = this.props;
    let selectFlag = isSelected ? "_selected" : "";
    let url = IMG_SERVER + locateTo + '/' + imgName + selectFlag + '.png';
    return (
        <img
          src={url}
          style={cursorStyle=="pointer"?{cursor: "pointer"}:{cursor: "auto"}}
        />
    );
  }
}

export { Image as default };

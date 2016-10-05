'use strict';
/**
 * src/components/common/HeaderOption.jsx
 */
import React, { Component } from 'react';
import AppHeaderClickImg from './AppHeaderClickImg';
/**
 * @class             wifi项目的导航选项卡组件
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
class HeaderOption extends Component {
  render() {
    let { imgName, isSelected, isBuleStyle } = this.props;
    return (
      <AppHeaderClickImg
        locateTo='header'
        imgName={imgName}
        isSelected={isSelected}
        isBuleStyle={isBuleStyle}
        cursorStyle="pointer"
        clickHeaderItem={
          (moduleName) => this.props.clickHeaderItem(moduleName)
        }
      />
    );
  }
}

export { HeaderOption as default };

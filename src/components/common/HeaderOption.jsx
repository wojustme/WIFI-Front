'use strict';
/**
 * src/components/common/HeaderOption.jsx
 */
import React from 'react';
import SelectFlagImg from '../common/SelectFlagImg';
/**
 * @class             wifi项目的导航选项卡组件
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
class HeaderOption extends React.Component {
  render() {
    let { imgName, isSelected } = this.props;
    return (
      <SelectFlagImg
        locateTo='common'
        imgName={imgName}
        isSelected={isSelected}
        cursorStyle="pointer"
      />
    );
  }
}

export { HeaderOption as default };

'use strict';
/**
 * src/components/common/AppHeader.jsx
 */
import React from 'react';
import HeaderOption from './HeaderOption';
import SelectFlagImg from './SelectFlagImg';
/**
 * @class             wifi项目的导航组件
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
class AppHeader extends React.Component {
  render() {
    const { itemStates } = this.props;
    let headerOptionItems = [];
    for (let [key, value] of itemStates) {
      headerOptionItems.push(
        <HeaderOption
          key={key}
          imgName={key}
          isSelected={value}
        />);
    }
    return (
      <div
        style={{
          position:"absolute",
          top:"50px",
          zIndex: 0
        }}
      >
        <SelectFlagImg locateTo='common' imgName='header导航条背景'/>
        {/* 导航条选项标签 */}
        <div
          style={{
            position:"absolute",
            top:"0px",
            left:"10%",
            zIndex: 1
          }}
        >
          {headerOptionItems}
        </div>
      </div>
    );
  }
}

export { AppHeader as default };

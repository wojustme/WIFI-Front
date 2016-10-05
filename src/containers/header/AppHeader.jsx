'use strict';
/**
 * src/components/common/AppHeader.jsx
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppHeaderActions from '../../actions/AppHeaderAction';
import HeaderOption from '../../components/header/HeaderOption';
import SelectFlagImg from '../../components/common/SelectFlagImg';
/**
 * @class             wifi项目的导航组件
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
class AppHeader extends React.Component {
  render() {
    const { AppHeader, dispatch } = this.props;
    const headerData = AppHeader.headerData;
    const appNavData = headerData.navData;
    const isBuleStyle = headerData.isBuleStyle;
    const actions = bindActionCreators(AppHeaderActions, dispatch);
    let headerOptionItems = Object.keys(appNavData).map(
      key => {
        return(
          <HeaderOption
            key={key}
            imgName={key}
            isSelected={appNavData[key]}
            isBuleStyle={isBuleStyle}
            clickHeaderItem={
              moduleName => {
                actions.gotoAppNav(moduleName)
              }
            }
          />
        );
      }
    );
    return (
      <div
        style={{
          position:"absolute",
          top:"50px",
          zIndex: 0
        }}
      >
        <SelectFlagImg
          locateTo='header'
          isBuleStyle={isBuleStyle}
          imgName='header导航条背景'
        />
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

export default connect(state => ({
  AppHeader: state.AppHeader
}))(AppHeader);

'use strict';
/**
 * src/containers/Portal.jsx
 */
import React from 'react';
import { connect } from 'react-redux';
import InwardNav from '../../components/common/InwardNav';
import DivSection from '../../components/common/DivSection';
import { Events, scrollSpy  } from 'react-scroll';
import PortalBG from '../../components/portal/PortalBG';
import './portal.scss';
/**
 * @class             Portal管理容器组件
 * @author            xurenhe
 * @date              2016-09-21
 * @copyright         城云科技
 * @version           0.0.1
 */
class Portal extends React.Component {
  static defaultProps = {
  }
  static propTypes = {
  }
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render() {
    const { Portal, dispatch } = this.props;
    const { navItems } = Portal;

    return (
      <div>
        {/* 二级导航 */}
        <InwardNav
          myLocateTo="common"
          elemLocateTo="portal"
          imgNavBG="二级导航条背景"
          navItems={navItems}
        />

        {/* 第0屏 */}
        <PortalBG />
        {/* 第1屏 */}
        <DivSection name={navItems[0]} className="divSection">
        </DivSection>
        {/* 第2屏 */}
        <DivSection name={navItems[1]} className="divSection">
        </DivSection>
        {/* 第3屏 */}
        <DivSection name={navItems[2]} className="divSection">
        </DivSection>
      </div>
    );
  }
}

export default connect(state => ({
  Portal: state.Portal
}))(Portal)

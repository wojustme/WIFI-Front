'use strict';
/**
 * src/containers/Lessee.jsx
 */
import React from 'react';
import { connect } from 'react-redux';
import LesseeBG from '../../components/lessee/LesseeBG';
import LesseeApMap from '../../components/lessee/LesseeApMap';
import LesseeApMsg from '../../components/lessee/LesseeApMsg';
import LesseeMonitor from '../../components/lessee/LesseeMonitor';
import InwardNav from '../../components/common/InwardNav';
import DivSection from '../../components/common/DivSection';
import { Events, scrollSpy  } from 'react-scroll';
import './lessee.scss';
/**
 * @class             租户中心容器组件
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
class Lessee extends React.Component {
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
    const { Lessee, dispatch } = this.props;
    const { navItems, apMsg } = Lessee;

    return (
      <div>
        {/* 二级导航 */}
        <InwardNav baseLocateTo="lessee" imgNavBG="lessee导航条背景" navItems={navItems} />

        {/* 第0屏 */}
        <LesseeBG />
        {/* 第1屏 */}
        <DivSection name={navItems[0]} className="divSection">
          <LesseeApMap />
        </DivSection>
        {/* 第2屏 */}
        <DivSection name={navItems[1]} className="divSection">
          <LesseeApMsg apMsg={apMsg}/>
        </DivSection>
        {/* 第3屏 */}
        <DivSection name={navItems[2]} className="divSection">
          <LesseeMonitor>
            {this.props.children}
          </LesseeMonitor>
        </DivSection>
      </div>
    );
  }
}

export default connect(state => ({
  Lessee: state.Lessee
}))(Lessee)

'use strict';
/**
 * src/containers/Lessee.jsx
 */
import React from 'react';
import LesseeBG from '../../components/lessee/LesseeBG';
import LesseeApMap from '../../components/lessee/LesseeApMap';
import LesseeApMsg from '../../components/lessee/LesseeApMsg';
import LesseeMonitor from '../../components/lessee/LesseeMonitor';
import LesseePortal from '../../components/lessee/LesseePortal';
import InwardNav from '../../components/common/InwardNav';
import { Element } from '../../utils/scrollNav/index';
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
    // 一级导航栏的选项
    let appHeaders = ["首页", "租户中心", "数据中心", "消息中心"];
    let appHeaderStates = new Map();
    appHeaders.map(
      elem => {
        appHeaderStates.set(elem, false);
      }
    );
    appHeaderStates.set(appHeaders[1], true);
    // 二级导航栏的选项
    let navItems = ["ap分布", "ap信息", "portal管理", "监控中心"];

    return (
      <div>
        {/* 二级导航 */}
        <InwardNav baseLocateTo="lessee" imgNavBG="lessee导航条背景" navItems={navItems} />

        {/* 第0屏 */}
        <LesseeBG appHeaderStates={ appHeaderStates }/>
        {/* 第1屏 */}
        <Element name={navItems[0]}>
          <LesseeApMap/>
        </Element>
        {/* 第2屏 */}
        <Element name={navItems[1]}>
          <LesseeApMsg/>
        </Element>
        {/* 第3屏 */}
        <Element name={navItems[2]}>
          <LesseePortal/>
        </Element>
        {/* 第4屏 */}
        <Element name={navItems[3]}>
          <LesseeMonitor/>
        </Element>
      </div>
    );
  }

  componentDidMount() {
  }
}

export { Lessee as default };

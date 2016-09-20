'use strict';
/**
 * src/actions/AppHeaderAction.jsx
 */
import * as AppHeaderTypes from '../constants/AppHeaderTypes';
import { browserHistory } from 'react-router'

/**
 * 导航菜单的名称映射变量
 * @type {Map}
 */
const navs = new Map();
navs.set("首页", 'home')
		.set("租户中心", 'lessee')
		.set("数据中心", 'data')
		.set("消息中心", 'message');

/**
 * 项目app整体路由跳转
 * @method    gotoAppNav
 * @param     {string}   moduleName 跳转目标名，eg：首页，租户中心，数据中心。。。
 * @return    {object}              action数据流
 * @author  xurenhe
 * @date      2016-09-20
 * @copyright            城云科技
 * @version              0.0.1
 */
export let gotoAppNav = (moduleName) => {
  browserHistory.push(navs.get(moduleName));
  return{
    type: AppHeaderTypes.APPHEADER_GOTOAPPNAV,
    moduleName
  }
}

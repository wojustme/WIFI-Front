'use strict';
/**
 * src/reducers/PortalReducer.jsx
 * Portal管理的状态树
 * @author            xurenhe
 * @date              2016-09-21
 * @copyright         城云科技
 * @version           0.0.1
 */
import { combineReducers } from 'redux';
import * as PortalTypes from '../constants/PortalTypes';

/**
 * 该页面中内部导航操作
 * @method    navItems
 * @param     {[type]}   state  导航选项值
 * @param     {[type]}   action 触发的action
 * @return    {[type]}          返回最新的状态树
 * @author  xurenhe
 * @date      2016-09-21
 * @copyright            城云科技
 * @version              0.0.1
 */
let navItems = (state = ["模板管理", "投放管理", "名单管理"], action) => {
  switch (action.type) {
    default:
      return state;
  }
}
// 合并
export const Portal = combineReducers({
  navItems
});

/*
SHOW STATE TREE:
Portal
  -navItems
 */

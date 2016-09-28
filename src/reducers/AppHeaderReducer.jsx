'use strict';
/**
 * src/reducers/AppHeaderReducer.jsx
 * 租户中心的状态树
 * @author            xurenhe
 * @date              2016-09-20
 * @copyright         城云科技
 * @version           0.0.1
 */
import { combineReducers } from 'redux';
import * as AppHeaderTypes from '../constants/AppHeaderTypes';
import { findKeyByValueFromObject } from '../utils/OriginalJSUtil';
let appHeaderStates = new Map();
let appHeaderItems = ["首页", "瞭望塔", "租户中心", "数据中心", "消息中心", "Portal管理"]
let navData = {};
appHeaderItems.map(
  elem => {
    navData[elem] = false;
  }
);
navData[appHeaderItems[2]] = true;

/**
 * 整个项目的导航状态树以及reducer函数
 * @method    appNavData
 * @param     {[type]}   [state=appNavData] 初始化数据
 * @param     {[type]}   action             传入action对象
 * @return    {[type]}                      返回一个新的状态树
 * @author  xurenhe
 * @date      2016-09-20
 * @copyright            城云科技
 * @version              0.0.1
 */
let appNavData = (state = navData, action) => {
  switch (action.type) {
    case AppHeaderTypes.APPHEADER_GOTOAPPNAV:
      let moduleName = action.moduleName;
      let returnState = {};
      for(let key in state) {
        key == moduleName
          ? returnState[key] = true
          : returnState[key] = false;
      }
      return {
        ...state,
        ...returnState
      };
      break;
    default:
      return state;
  }
}
// 合并
export const AppHeader = combineReducers({
  appNavData
});

/*
SHOW STATE TREE:
AppHeader
  -appNavData
 */

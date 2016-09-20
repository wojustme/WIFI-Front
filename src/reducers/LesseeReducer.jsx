'use strict';
/**
 * src/reducers/LesseeReducer.jsx
 * 租户中心的状态树
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
import { combineReducers } from 'redux';
import * as LesseeTypes from '../constants/LesseeTypes';

let bodyData = [{
      "id": "01",
      "apName": "SC-NSYJ-AP1",
      "apType": "AIR-CAP15321-H-K1",
      "apMac": "84:b8:02:ac:f8:01",
      "radioMac": "84:b8:02:ac:f8:01",
      "apAddress": "中山一路1号",
      "apLongitude": "120.01",
      "apLatitude": "30.01"
    }, {
      "id": "02",
      "apName": "SC-NSYJ-AP1",
      "apType": "AIR-CAP15321-H-K1",
      "apMac": "84:b8:02:ac:f8:01",
      "radioMac": "84:b8:02:ac:f8:01",
      "apAddress": "中山一路1号",
      "apLongitude": "120.01",
      "apLatitude": "30.01"
    }, {
      "id": "03",
      "apName": "SC-NSYJ-AP1",
      "apType": "AIR-CAP15321-H-K1",
      "apMac": "84:b8:02:ac:f8:01",
      "radioMac": "84:b8:02:ac:f8:01",
      "apAddress": "中山一路1号",
      "apLongitude": "120.01",
      "apLatitude": "30.01"
    }, {
      "id": "04",
      "apName": "SC-NSYJ-AP1",
      "apType": "AIR-CAP15321-H-K1",
      "apMac": "84:b8:02:ac:f8:01",
      "radioMac": "84:b8:02:ac:f8:01",
      "apAddress": "中山一路1号",
      "apLongitude": "120.01",
      "apLatitude": "30.01"
    }, {
      "id": "05",
      "apName": "SC-NSYJ-AP1",
      "apType": "AIR-CAP15321-H-K1",
      "apMac": "84:b8:02:ac:f8:01",
      "radioMac": "84:b8:02:ac:f8:01",
      "apAddress": "中山一路1号",
      "apLongitude": "120.01",
      "apLatitude": "30.01"
    }, {
      "id": "06",
      "apName": "SC-NSYJ-AP1",
      "apType": "AIR-CAP15321-H-K1",
      "apMac": "84:b8:02:ac:f8:01",
      "radioMac": "84:b8:02:ac:f8:01",
      "apAddress": "中山一路1号",
      "apLongitude": "120.01",
      "apLatitude": "30.01"
    }, {
      "id": "07",
      "apName": "SC-NSYJ-AP1",
      "apType": "AIR-CAP15321-H-K1",
      "apMac": "84:b8:02:ac:f8:01",
      "radioMac": "84:b8:02:ac:f8:01",
      "apAddress": "中山一路1号",
      "apLongitude": "120.01",
      "apLatitude": "30.01"
    }, {
      "id": "08",
      "apName": "SC-NSYJ-AP1",
      "apType": "AIR-CAP15321-H-K1",
      "apMac": "84:b8:02:ac:f8:01",
      "radioMac": "84:b8:02:ac:f8:01",
      "apAddress": "中山一路1号",
      "apLongitude": "120.01",
      "apLatitude": "30.01"
    }, {
      "id": "09",
      "apName": "SC-NSYJ-AP1",
      "apType": "AIR-CAP15321-H-K1",
      "apMac": "84:b8:02:ac:f8:01",
      "radioMac": "84:b8:02:ac:f8:01",
      "apAddress": "中山一路1号",
      "apLongitude": "120.01",
      "apLatitude": "30.01"
    }, {
      "id": "10",
      "apName": "SC-NSYJ-AP1",
      "apType": "AIR-CAP15321-H-K1",
      "apMac": "84:b8:02:ac:f8:01",
      "radioMac": "84:b8:02:ac:f8:01",
      "apAddress": "中山一路1号",
      "apLongitude": "120.01",
      "apLatitude": "30.01"
    }],
    headData = [{
      title: 'AP名称',
      dataIndex: 'apName'
    }, {
      title: 'AP类型',
      dataIndex: 'apType'
    }, {
      title: 'AP-mac',
      dataIndex: 'apMac'
    }, {
      title: 'Radio-mac',
      dataIndex: 'radioMac'
    }, {
      title: 'AP地址',
      dataIndex: 'apAddress'
    }, {
      title: 'AP经度',
      dataIndex: 'apLongitude'
    }, {
      title: 'AP纬度',
      dataIndex: 'apLatitude'
    }],
    pageInfo = {
      total: 20
    };

let apGroupListData = [ "SC-DJX01", "SC-DJX02", "SC-DJX03", "SC-DJX04", "SC-DJX05",
      "SC-DJX06", "SC-DJX07", "SC-DJX08", "SC-DJX09", "SC-DJX10",
      "SC-DJX11", "SC-DJX12", "SC-DJX13", "SC-DJX14", "SC-DJX15",
      "SC-DJX16", "SC-DJX17", "SC-DJX18", "SC-DJX19", "SC-DJX20" ];

/**
 * 该页面中内部导航操作
 * @method    navItems
 * @param     {array}     state   导航选项值
 * @param     {object}    action  触发的action值
 * @return    {object}            返回最新的状态树
 * @author  xurenhe
 * @date      2016-09-18
 * @copyright            城云科技
 * @version              0.0.1
 */
let navItems = (state = ["ap分布", "ap信息", "监控中心"], action) => {
  switch (action.type) {
    default:
      return state;
  }
}
/**
 * ap信息中的右侧table操作
 * @method    apMsgTable
 * @param     {array}     state   导航选项值
 * @param     {object}    action  触发的action值
 * @return    {object}            返回最新的状态树
 * @author    xurenhe
 * @date      2016-09-18
 * @copyright            城云科技
 * @version              0.0.1
 */
let apMsgTable = (state = {
  bodyData: bodyData,
  headData: headData,
  pageInfo: pageInfo,
  operateOptions: ["edit"],
  operationsVisible: false,
  modalVisible: false,
  modifyTableData: {}
}, action) => {
  switch (action.type) {
    case LesseeTypes.LESSEEAPMSG_SUBMIT_APMSG_FORM:
      let modifyData = action.modifyData;
      let modifyId = modifyData['id'];
      let bodyData = state.bodyData;
      for (let elem in bodyData) {
        if(bodyData[elem].id == modifyId) {
          bodyData[elem] = modifyData;
        }
      }
      let modifyTableData = state.modifyTableData;
      modifyTableData[modifyId] = modifyData;
      return {...state,modifyTableData};
      break;
    case LesseeTypes.LESSEEAPMSG_UPDATE_APMSG_TABLE:
      let tableData = action.tableData;
      return {
        ...state,
        bodyData: tableData.bodyData,
        pageInfo: tableData.pageInfo,
        operationsVisible: false,
        modalVisible: false
      }
      break;
    case LesseeTypes.LESSEEAPMSG_IS_SHOW_OPERATION:
      return {
        ...state,
        operationsVisible: action.operationsVisible
      }
      break;
    case LesseeTypes.LESSEEAPMSG_IS_SHOWMODAL:
      return {
        ...state,
        modalVisible: action.modalVisible
      }
      break;
    default:
      return state;
  }
}
/**
 * ap信息中的左侧ap分组操作
 * @method    navItems
 * @param     {array}     state   导航选项值
 * @param     {object}    action  触发的action值
 * @return    {object}            返回最新的状态树
 * @author    xurenhe
 * @date      2016-09-18
 * @copyright            城云科技
 * @version              0.0.1
 */
let apGroupList = (state = apGroupListData, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
// 合并
let apMsg = combineReducers({
  apGroupList,
  apMsgTable
})
// 合并
export const Lessee = combineReducers({
  navItems,
  apMsg
});

/*
SHOW STATE TREE:
Lessee
  -navItems
  -apMsg
    -apGroupList
    -apMsgTable
      -bodyData             =>表格主体数据
      -headData             =>表格头数据
      -pageInfo             =>表格的分页信息
        -totalPage
        -currentPage
        -pageSize
      -operateOptions       =>表格操作的选项
      -operationsVisible    =>是否显示表格操作选项
      -modalVisible         =>是否显示模态框
      -modifyTableData      =>修改的table数据，object类型*
 */

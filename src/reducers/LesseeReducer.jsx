'use strict';
/**
 * src/reducers/LesseeReducer.jsx
 * 租户中心的状态树
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
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



let defaultState = {
  // 一级导航栏的选项
  appHeaders: ["首页", "租户中心", "数据中心", "消息中心"],
  // 二级导航栏的选项
  navItems: ["ap分布", "ap信息", "portal管理", "监控中心"],
  apMsg: {
    apGroupList: apGroupListData,
    tableData: {
      bodyData: bodyData,
      headData: headData,
      pageInfo: pageInfo,
      operateOptions: ["edit"],
      showOperations: false
    }
  }
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case LesseeTypes.SUBMIT_APMSG_FORM:
      let modifyData = action.modifyData;
      let modifyId = modifyData['id'];
      let bodyData = state.apMsg.tableData.bodyData;
      for (let elem in bodyData) {
        if(bodyData[elem].id == modifyId) {
          bodyData[elem] = modifyData
        }
      }
      return {...state};
      break;
    default:
      return state;
  }
}

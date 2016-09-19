'use strict';
/**
 * src/actions/LesseeAction.jsx
 */
import * as LesseeTypes from '../constants/LesseeTypes';
/**
 * 提交修改from的表格数据
 * @method    submitApMsgForm
 * @param     {object}        modifyData 提交的from数据
 * @return    {object}                   action数据流
 * @author  xurenhe
 * @date      2016-09-18
 * @copyright                 城云科技
 * @version                   0.0.1
 */
export let submitApMsgForm = (modifyData) => {
  return {
    type: LesseeTypes.LESSEEAPMSG_SUBMIT_APMSG_FORM,
    modifyData
  }
}
/**
 * 点击ap分组
 * @method    clickApGroupItem
 * @param     {String}         itemName ap分组名字
 * @return    {object}                  action数据流
 * @author  xurenhe
 * @date      2016-09-18
 * @copyright                  城云科技
 * @version                    0.0.1
 */
export let clickApGroupItem = (itemName) => {
  let testNum = itemName.substring(itemName.length - 1);
  return dispatch => {
    // 异步
    dispatch(testAsync());
    return fetch(`http://localhost:9992/data/lessee/grid${testNum}.json`)
      .then(response => response.json())
      .then(json => {
        dispatch(updateApMsgTable(json));
      })
  }
}
/**
 * 测试异步
 * @method    testAsync
 * @return    {object}   action数据流
 * @author  xurenhe
 * @date      2016-09-19
 * @copyright            城云科技
 * @version              0.0.1
 */
export let testAsync = () => {
  console.log("testAsync");
  return {
    type : 'testAsync'
  }
}
/**
 * 更新ap信息表格数据
 * @method    updateApMsgTable
 * @param     {String}         tableData table新数据
 * @return    {object}                   action数据流
 * @author  xurenhe
 * @date      2016-09-18
 * @copyright                  城云科技
 * @version                    0.0.1
 */
export let updateApMsgTable = (tableData) => {
  return {
    type: LesseeTypes.LESSEEAPMSG_UPDATE_APMSG_TABLE,
    tableData
  }
}
/**
 * 点击分页按钮刷新table数据
 * @method    changeApMsgTablePage
 * @param     {String}         tableData table新数据
 * @return    {object}                   action数据流
 * @author  xurenhe
 * @date      2016-09-19
 * @copyright                  城云科技
 * @version                    0.0.1
 */
export let changeApMsgTablePage = (page) => {
  return dispatch => {
    return fetch('http://localhost:9992/data/lessee/grid0.json')
      .then(response => response.json())
      .then(json => {
        dispatch(updateApMsgTable(json));
      })
  }
}
/**
 * 点击table有下角按钮，控制table操作栏
 * @method    clickOperateTable
 * @param     {boolean}              operationsVisible 控制显示的变量
 * @return    {object}                                 action数据流
 * @author  xurenhe
 * @date      2016-09-19
 * @copyright                       城云科技
 * @version                         0.0.1
 */
export let clickOperateTable = (operationsVisible, modifyTableData) => {
  // 编辑=>false 保存=>true
  // 异步方式
  return dispatch => {
    if (operationsVisible) {
      dispatch(syncApMsgTable(modifyTableData));
    }
    return dispatch(isShowOperations(operationsVisible));
  }
}
/**
 * 同步后台数据
 * @method    syncApMsgTable
 * @param     {object}       modifyTableData 需要同步的数据以id为键值的数据类型
 * @return    {object}                  action数据流
 * @author  xurenhe
 * @date      2016-09-19
 * @copyright                城云科技
 * @version                  0.0.1
 */
export let syncApMsgTable = (modifyTableData) => {
  console.log("同步数据");
  return {
    type: LesseeTypes.LESSEEAPMSG_SYNC_APMSG_TABLE_DATA,
    modifyTableData
  }
}
/**
 * 是否显示table控制栏
 * @method    isShowOperations
 * @param     {boolean}         operationsVisible 控制显示的变量
 * @return    {object}                          action数据流
 * @author  xurenhe
 * @date      2016-09-19
 * @copyright                  城云科技
 * @version                    0.0.1
 */
export let isShowOperations = (operationsVisible) => {
  console.log("是否显示action栏");
  let isShow = !operationsVisible;
  return {
    type: LesseeTypes.LESSEEAPMSG_IS_SHOW_OPERATION,
    operationsVisible: isShow
  }
}
/**
 * 打开模态框
 * @method    openModal
 * @return    {[type]}   action数据流
 * @author  xurenhe
 * @date      2016-09-19
 * @copyright            城云科技
 * @version              0.0.1
 */
export let openModal = () => {
  return {
    type: LesseeTypes.LESSEEAPMSG_IS_SHOWMODAL,
    modalVisible: true
  }
}
/**
 * 关闭模态框
 * @method    closeModal
 * @return    {object}   action数据流
 * @author  xurenhe
 * @date      2016-09-19
 * @copyright            城云科技
 * @version              0.0.1
 */
export let closeModal = () => {
  return {
    type: LesseeTypes.LESSEEAPMSG_IS_SHOWMODAL,
    modalVisible: false
  }
}

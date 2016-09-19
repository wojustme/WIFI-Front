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
    type: LesseeTypes.SUBMIT_APMSG_FORM,
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
    return fetch(`http://localhost:9992/data/lessee/grid${testNum}.json`)
      .then(response => response.json())
      .then(json => {
        dispatch(updateApMsgTable(json));
      })
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
    type: LesseeTypes.UPDATE_APMSG_TABLE,
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
export let clickOperateTable = (operationsVisible, apMsgTable) => {
  // 编辑=>false 保存=>true
  if (operationsVisible) {
    return dispatch => dispatch(syncApMsgTable(apMsgTable));
  }
  return dispatch => dispatch(isShowOperations(operationsVisible));
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
  console.log(modifyTableData);
  return dispatch => dispatch(isShowOperations(modifyTableData));
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
  let isShow = !operationsVisible;
  return {
    type: LesseeTypes.IS_SHOW_OPERATION,
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
    type: LesseeTypes.IS_SHOWMODAL,
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
    type: LesseeTypes.IS_SHOWMODAL,
    modalVisible: false
  }
}

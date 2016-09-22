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
  return dispatch => {
    dispatch(closeModal());
    return dispatch({
      type: LesseeTypes.LESSEEAPMSG_SUBMIT_APMSG_FORM,
      modifyData
    });
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
    dispatch(closeModal());
    return fetch(`http://localhost:9992/data/lessee/grid${testNum}.json`)
      .then(response => response.json())
      .then(json => {
        let pageInfo = {
          totalPage: 50,
    			currentPage: 1,
    			pageSize: 10
        };
        dispatch(updateApMsgTable(json, pageInfo));
      })
  }
}
/**
 * 更新表格控件包括分页、表格内部、编辑按钮
 * @method    updateApMsgTable
 * @param     {object}         tableData 表格内部数据
 * @param     {object}         pageInfo  表格分页信息
 * @return    {function}                   dispatch触发函数
 * @author  xurenhe
 * @date      2016-09-22
 * @copyright                  城云科技
 * @version                    0.0.1
 */
let updateApMsgTable = (tableData, pageInfo) => {
  return dispatch => {
    dispatch(UpdateApMsgPaging(pageInfo));
    return dispatch(updateApMsgTableData(tableData));
  }
}
/**
 * 更新分页控件信息
 * @method    toDefaultApMsgPaging
 * @param     {object}             pageInfo 分页信息
 * @return    {object}                      action数据流
 * @author  xurenhe
 * @date      2016-09-22
 * @copyright                      城云科技
 * @version                        0.0.1
 */
let UpdateApMsgPaging = (pageInfo) => {
  return {
    type: LesseeTypes.LESSEEAPMSG_UPDATE_APMSG_PAGING,
    pageInfo
  }
}
/**
 * 更新ap信息表格数据
 * @method    updateApMsgTableData
 * @param     {String}         tableData table新数据
 * @return    {object}                   action数据流
 * @author  xurenhe
 * @date      2016-09-18
 * @copyright                  城云科技
 * @version                    0.0.1
 */
let updateApMsgTableData = (tableData) => {
  return {
    type: LesseeTypes.LESSEEAPMSG_UPDATE_APMSG_TABLE_DATA,
    tableData
  }
}
/**
 * 点击分页按钮刷新table数据
 * @method    changeApMsgTablePage
 * @param     {String}         tableData table新数据
 * @return    {function}                   dispatch触发函数
 * @author  xurenhe
 * @date      2016-09-19
 * @copyright                  城云科技
 * @version                    0.0.1
 */
export let changeApMsgTablePage = (page) => {
  return dispatch => {
    dispatch(closeModal());
    return fetch('http://localhost:9992/data/lessee/grid0.json')
      .then(response => response.json())
      .then(json => {
        dispatch(updateApMsgTable(json, {currentPage:page}));
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
    dispatch(closeModal());
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
let syncApMsgTable = (modifyTableData) => {
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
let isShowOperations = (operationsVisible) => {
  let isShow = !operationsVisible;
  return {
    type: LesseeTypes.LESSEEAPMSG_IS_SHOW_OPERATION,
    operationsVisible: isShow
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
let closeModal = () => {
  return {
    type: LesseeTypes.LESSEEAPMSG_CLOSE_SHOWMODAL
  }
}
/**
 * 点击添加AP分组操作
 * @method    addApGroup
 * @return    {function}                   dispatch触发函数
 * @author  xurenhe
 * @date      2016-09-21
 * @copyright            城云科技
 * @version              0.0.1
 */
export let addApGroup = () => {
  return dispatch => {
    dispatch(closeModal());
    return {
      type: LesseeTypes.LESSEEAPMSG_ADDAPGROUP
    }
  }
}
/**
 * 点击表格action栏操作
 * @method    doTableAction
 * @param     {string}      actionType action栏操作类型
 * @param     {object}      data       需要操作的数据
 * @return    {object}                 action数据流
 * @author  xurenhe
 * @date      2016-09-21
 * @copyright               城云科技
 * @version                 0.0.1
 */
export let doTableAction = (actionType, data) => {
  return {
    type: LesseeTypes.LESSEEAPMSG_DOTABLEACTION,
    data
  }
}

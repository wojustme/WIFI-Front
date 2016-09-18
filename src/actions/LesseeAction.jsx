'use strict';
/**
 * src/actions/LesseeAction.jsx
 */
import { SUBMIT_APMSG_FORM, CLICK_APGROUP, UPDATE_APMSG_TABLE } from '../constants/LesseeTypes';

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
    type: SUBMIT_APMSG_FORM,
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
 * @return    {object}                  action数据流
 * @author  xurenhe
 * @date      2016-09-18
 * @copyright                  城云科技
 * @version                    0.0.1
 */
let updateApMsgTable = (tableData) => {
  return {
    type: UPDATE_APMSG_TABLE,
    tableData
  }
}

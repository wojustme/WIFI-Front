'use strict';
/**
 * src/utils/OraiginalJSUtil.jsx
 * 关于JS原生数据类型的一些操作封装
 */

/**
 * 判断该对象是否为空
 * @method    isEmptyObject
 * @param     {[type]}      obj     传入的对象
 * @return    {Boolean}           {...}=>false,{}=>true,undefined=>true,null=>true
 * @author  xurenhe
 * @date      2016-09-11
 * @copyright               城云科技
 * @version                 0.0.1
 */
export const isEmptyObject = (obj) => {
  let t;
  for (t in obj)
    return !1;
  return !0;
}

/**
 * 判断该数组是否为空
 * @method    isEmptyArray
 * @param     {[type]}     arr   传入的数组
 * @return    {Boolean}          [...]=>false,[]=>true,undefined=>true,[,]=>false
 * @author  xurenhe
 * @date      2016-09-11
 * @copyright              城云科技
 * @version                0.0.1
 */
export const isEmptyArray = (arr) => {
  if(Array.isArray(arr)) {
    return arr.length === 0 ? true : false;
  } else {
    return true;
  }
}

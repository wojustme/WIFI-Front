'use strict';
/**
 * src/actions/LesseeAction.jsx
 */
import { SUBMIT_APMSG_FORM } from '../constants/LesseeTypes';

export function submitApMsgForm(modifyData) {
  return {
    type: SUBMIT_APMSG_FORM,
    modifyData
  }
}

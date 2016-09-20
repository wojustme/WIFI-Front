'use strict';
/**
 * src/components/lessee/LesseeApMsg.jsx
 */
import React from 'react';
import Image from '../common/Image';
import ApGroupContainer from './ApGroupContainer';
import ApMsgTable from './ApMsgTable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LesseeActions from '../../actions/LesseeAction';
import PartingLine from '../common/PartingLine';
import './style/ApMsg.scss';
/**
 * @class             租户中心第2屏的AP信息组件
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
class LesseeApMsg extends React.Component {
  render() {
    const { apMsg, dispatch } = this.props;
    const { apMsgTable, apGroupList } = apMsg;
    const actions = bindActionCreators(LesseeActions, dispatch);
    return (
      <div
        className="lessee-apmsg"
        style={{
          height:650,
          textAlign:"center"
        }}
      >
        <PartingLine
          useImgSource={{
            locateTo: "lessee",
            imgName: "ap信息分割线"
          }}
        />
        <div
          style={{
            width: "80%",
            height: "590px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center"
          }}
        >
          <div
            style={{
              float: "left",
              width: "14%",
              height: "100%"
            }}
          >
            <ApGroupContainer
              apGroupList={apGroupList}
              clickApGroupItem={
                itemName => {
                  actions.clickApGroupItem(itemName);
                }
              }
              addApGroup={
                () => {
                  actions.addApGroup();
                }
              }
            />
          </div>
          <div
            style={{
              float: "right",
              width: "85%",
              height: "100%"
            }}
          >
            <ApMsgTable
              apMsgTable = {apMsgTable}
              submitApMsgForm = {
                modifyData => actions.submitApMsgForm(modifyData)
              }
              changePage = {
                page => actions.changeApMsgTablePage(page)
              }
              clickOperateTable = {
                (operationsVisible, modifyTableData) => actions.clickOperateTable(operationsVisible, modifyTableData)
              }
              openModal = {
                (actionType, formData) => actions.openModal(actionType, formData)
              }
              closeModal = {
                () => actions.closeModal()
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  apMsg: state.Lessee.apMsg
}))(LesseeApMsg);

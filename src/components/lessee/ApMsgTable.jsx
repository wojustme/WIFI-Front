'use strict';
/**
 * src/components/lessee/ApMsgTable.jsx
 */
import React from 'react';
import TableWithAction from '../common/TableWithAction';
import ModalForm from '../common/ModalForm';
import { Pagination, Button, Modal, Form, Input } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LesseeActions from '../../actions/LesseeAction';
/**
 * @class             ap分组信息
 * @author            xurenhe
 * @date              2016-09-09
 * @copyright         城云科技
 * @version           0.0.1
 */
class ApMsgTable extends React.Component {
  constructor(props){
    super(props);
    const { operationsVisible, modalVisible } = this.props;
    this.state = {
      operationsVisible: operationsVisible
    };
  }
  render() {
    const { apMsgTable } = this.props;
    const { bodyData, headData, pageInfo, operateOptions, operationsVisible, modalVisible } = apMsgTable;
    const { formLabel, formData } = apMsgTable.modalData;
    return (
      <div
        style={{
          height: "590px",
          border: "1px solid rgb(220, 220, 220)",
          backgroundColor: "rgb(220, 220, 220)"
        }}
      >
        <TableWithAction
          headData={headData}
          bodyData={bodyData}
          operateOptions={operateOptions}
          operationsVisible={operationsVisible}
          doAction={
            (actionType, data) => this.props.doTableAction(actionType, data)
          }
        />
        <div
          style={{
            position: "relative",
            top:"10px"
          }}
        >
          <div
            style={{
              float: "left",
              position: "relative",
              left:"30%",
              width: "80%"
            }}
          >
            <Pagination
              defaultCurrent={1}
              total={20}
              onChange={
                page => this.props.changePage(page)
              }
            />
          </div>
          <div
            style={{
              float: "right"
            }}>
            <Button
              type="primary"
              onClick={
                (e) => {
                  this.props.clickOperateTable(operationsVisible, apMsgTable.modifyTableData)
                }
              }
            >
              { operationsVisible ? "保存" : "编辑" }
            </Button>
          </div>
        </div>
        <ModalForm
          visible={modalVisible}
          formLabel={formLabel}
          formData={formData}
          submitForm={
            (modifyData) => {this.props.submitApMsgForm(modifyData)}
          }
        />
      </div>
    );
  }
}

export { ApMsgTable as default };

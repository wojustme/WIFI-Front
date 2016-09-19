'use strict';
/**
 * src/components/lessee/ApMsgTable.jsx
 */
import React from 'react';
import Table from '../common/Table';
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
    let { operationsVisible, modalVisible } = this.props;
    this.state = {
      operationsVisible: operationsVisible,
      modalVisible: false,
      modalVisible: false,
      formData:{},
      modalLabel:{
        id: "ID",
        apName: "AP名称",
        apType: "AP类型",
        apMac: "AP-mac",
        radioMac: "Radio-mac",
        apAddress: "AP地址",
        apLongitude: "AP经度",
        apLatitude: "AP纬度"
      }
    };
  }
  showModal(actionType, formData) {
    this.setState({
      formData: formData
    })
  }
  render() {
    const { modalLabel, formData } = this.state;
    const { apMsgTable } = this.props;
    const { bodyData, headData, pageInfo, operateOptions, operationsVisible, modalVisible } = apMsgTable;
    return (
      <div
        style={{
          height: "590px",
          border: "1px solid rgb(220, 220, 220)",
          backgroundColor: "rgb(220, 220, 220)"
        }}
      >
        <Table
          headData={headData}
          bodyData={bodyData}
          operateOptions={operateOptions}
          operationsVisible={operationsVisible}
          doAction={
            (actionType, rowNum) => {
              this.showModal(actionType, bodyData[rowNum])
              this.props.openModal()
            }
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
          modalLabel={modalLabel}
          formData={formData}
          returnData={
            (modifyData) => {this.props.submitApMsgForm(modifyData)}
          }
          closeModal={
            () => {this.props.closeModal()}
          }
        />
      </div>
    );
  }
}

export { ApMsgTable as default };

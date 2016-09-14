'use strict';
/**
 * src/components/lessee/ApMsgGrid.jsx
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
class ApMsgGrid extends React.Component {
  constructor(props){
    super(props);
    let { showOperations } = this.props;
    this.state = {
      showOperations: showOperations,
      visible: false,
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
      formData: formData,
      visible: true
    })
  }
  render() {
    const { Lessee, dispatch } = this.props
    const { bodyData, headData, pageInfo, operateOptions } = Lessee.apMsg.tableData;
    const { showOperations, modalLabel, visible, formData } = this.state;
    const actions = bindActionCreators(LesseeActions, dispatch);
    return (
      <div>
        <Table
          headData={headData}
          bodyData={bodyData}
          operateOptions={operateOptions}
          showOperations={showOperations}
          doAction={
            (actionType, rowNum) => {
              this.showModal(actionType, bodyData[rowNum]);
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
            <Pagination defaultCurrent={1} total={20} />
          </div>
          <div
            style={{
              float: "right"
            }}>
            <Button
              type="primary"
              onClick={
                ()=>{
                  this.setState({
                    showOperations: !showOperations,
                    visible: false
                  });
                }
              }
            >
              {this.state.showOperations ? "保存" : "编辑"}
            </Button>
          </div>
        </div>
        <ModalForm
          visible={visible}
          modalLabel={modalLabel}
          formData={formData}
          returnData={
            (modifyData) => {actions.submitApMsgForm(modifyData);}
          }
        />
      </div>
    );
  }
}

export default connect(state => ({
  Lessee: state.Lessee
}))(ApMsgGrid);
//export { LesseeApMsg as default };

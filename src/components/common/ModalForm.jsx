'use strict';
/**
 * src/components/common/ModalForm.jsx
 */

import React, { Component } from 'react';
import uuid from 'node-uuid';
import ReactDOM from 'react-dom';
import { Button, Modal, Form, Input } from 'antd';
/**
 * @class             表单模态框
 * @author            xurenhe
 * @date              2016-09-13
 * @copyright         城云科技
 * @version           0.0.1
 */
class ModalForm extends Component {
  constructor(props) {
    super(props);
    const { visible } = this.props;
    this.state={
      visible: false
    };
  }
  handleOk() {
    let modifyData = this.getFieldsData();
    // this.handleClose(); 为了提高性能，放入action操作
    this.props.submitForm(modifyData);
  }
  handleCancel() {
    this.handleClose();
  }
  handleClose() {
    this.setState({
      visible: false
    })
  }
  getFieldsData() {
    const { formData } = this.props;
    let fieldsData = {};
    for (let elemKey in formData) {
      fieldsData[elemKey] = ReactDOM.findDOMNode(this.refs[elemKey]).getElementsByTagName("input")[0].value;
    }
    return fieldsData;
  }
  componentWillReceiveProps(nextProps) {
    const { visible } = nextProps;
    this.setState({
      visible
    })
  }
  render() {
    const { confirmLoading, visible } = this.state;
    const { formLabel, formData } = this.props;
    const FormItem = Form.Item;
    let formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    let form = [];
    for (let elemKey in formData)
      form.push(
        <FormItem
          key={elemKey}
          label={formLabel[elemKey]}
          {...formItemLayout}
          style={{
            marginBottom:"8px"
          }}
        >
          <Input
            type="text"
            ref={elemKey}
            defaultValue={formData[elemKey]}
          />
        </FormItem>
      );
    form = <Form key={uuid.v4()}>{form}</Form>;
    return (
      <Modal
        ref="modalform"
        title="对话框标题"
        visible={visible}
        onOk={this.handleOk.bind(this)}
        onCancel={this.handleCancel.bind(this)}
      >
        {form}
      </Modal>
    );
  }
}
export { ModalForm as default };

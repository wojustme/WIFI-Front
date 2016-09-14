'use strict';
/**
 * src/components/common/ModalForm.jsx
 */

import React from 'react';
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
class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      visible: false,
      confirmLoading: false,
      modifyIndexs: []
    };
  }
  handleOk() {
    let modifyData = this.getFieldsData();
    this.setState({
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 1000);
    this.props.returnData(modifyData)
  }
  handleCancel() {
    this.setState({
      visible: false
    });
  }
  getFieldsData() {
    const { modifyIndexs } =this.state;
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
      visible: visible
    })
  }
  render() {
    const { visible, confirmLoading } = this.state;
    const { modalLabel, formData } = this.props;
    const FormItem = Form.Item;
    let formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    let modifyIndexs = [];
    let form = [];
    for (let elemKey in formData)
      form.push(
        <FormItem
          key={elemKey}
          label={modalLabel[elemKey]}
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
    form = <Form key={formData['id']}>{form}</Form>;
    return (
      <Modal
        ref="modalform"
        title="对话框标题"
        visible={visible}
        onOk={this.handleOk.bind(this)}
        onCancel={this.handleCancel.bind(this)}
        confirmLoading={confirmLoading}
      >
        {form}
      </Modal>
    );
  }
}
export { ModalForm as default };

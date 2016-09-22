'use strict';
/**
 * src/components/lessee/ApGroupContainer.jsx
 */
import React, { Component } from 'react';
import ApGroupItem from './ApGroupItem';
import ModalForm from '../common/ModalForm';
/**
 * @class             ap分组信息容器
 * @author            xurenhe
 * @date              2016-09-12
 * @copyright         城云科技
 * @version           0.0.1
 */
class ApGroupContainer extends Component {
  constructor(props) {
    super(props);
    const { apGroup } = this.props;
    const { apGroupListData, modalVisible, modalData } = apGroup;
    let selectData = apGroupListData[0];
    this.state = {
      apGroupListData,
      selectData,
      modalVisible,
      modalData
    }
  }
  componentWillReceiveProps(nextProps) {
    const { modalVisible } = nextProps.apGroup;
    this.setState({
      modalVisible
    })
  }
  render() {
    const { apGroupListData, selectData, modalVisible, modalData } = this.state;
    const { formLabel, formData } = modalData;
    let apGroupItems = apGroupListData.map(
      elem => {
        return elem === selectData
          ? <ApGroupItem
              key={elem}
              itemName={elem}
              isSelected={true}
              clickItemByName={
                (e, itemName) => {
                  console.log(itemName);
                }
              }
            />
          : <ApGroupItem
              key={elem}
              itemName={elem}
              clickItemByName={
                (e, itemName) => {
                  this.setState({
                    selectData: itemName
                  });
                  this.props.clickApGroupItem(itemName);
                }
              }
            />;
      }
    );
    return (
      <div>
        <div
          style={{
            height: "50px",
            backgroundColor: "rgb(149, 149, 149)",
            color: "rgb(206, 206, 206)",
            fontSize: "24px",
            lineHeight:"50px"
          }}
        >
          AP分组
          <span
            style={{
              float: "right",
              cursor: "pointer",
              color: "rgb(255, 255, 255)",
              marginRight: "10px"
            }}
            onClick={
              //e => this.props.addApGroup()
              e => {
                this.setState({
                  modalVisible: true
                })
              }
            }
          >
            +
          </span>
        </div>
        <div
          style={{
            width: "100%",
            height: "540px",
            overflowY: "auto"
          }}
        >
          {apGroupItems}
        </div>
        <ModalForm
          visible={modalVisible}
          formLabel={formLabel}
          formData={formData}
          submitForm={
            (addApGroupData) => {this.props.addApGroup(addApGroupData)}
          }
        />
      </div>
    );
  }
}

export { ApGroupContainer as default };

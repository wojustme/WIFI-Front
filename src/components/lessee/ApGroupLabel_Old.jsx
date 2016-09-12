'use strict';
/**
 * src/components/lessee/ApGroupLabel.jsx
 */
import React from 'react';
import AbleFlagImg from '../common/AbleFlagImg';
import ApGroupItem from './ApGroupItem';
import { notification } from 'antd';
/**
 * @class             ap分组信息
 * @author            xurenhe
 * @date              2016-09-09
 * @copyright         城云科技
 * @version           0.0.1
 */
class ApGroupLabel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentFirstIndex: 0,
      num: 8,
      data: ["SC-DJX01", "SC-DJX02", "SC-DJX03", "SC-DJX04", "SC-DJX05",
              "SC-DJX06", "SC-DJX07", "SC-DJX08", "SC-DJX09", "SC-DJX10" ],
      showData: [],
      leftBtnAble: false,
      rightBtnAble: false,
      dataLength: 0
    };
  }
  moveLeftItems() {
    const { currentFirstIndex, num, dataLength, leftBtnAble } = this.state;
    if(leftBtnAble){
      let startIndex = currentFirstIndex + 1;
      this.setIndexState(startIndex);
      //判断右侧是否到达临界值
      (startIndex + num) >= dataLength
        ? this.setState({ leftBtnAble: false })
        : this.setState({ leftBtnAble: true });
      this.setState({ rightBtnAble: true });
    } else {
      notification['warning']({
        message: '警告⚠️',
        description: '您已经到达记录底部,不可以点击右侧滑动按钮'
      });
    }
  }
  moveRightItems() {
    const { currentFirstIndex, rightBtnAble } = this.state;
    if(rightBtnAble){
      let startIndex = currentFirstIndex - 1;
      this.setIndexState(startIndex);
      //判断左侧是否到达临界值
      startIndex <= 0
        ? this.setState({ rightBtnAble: false })
        : this.setState({ rightBtnAble: true });
      this.setState({ leftBtnAble: true });
    } else {
      notification['warning']({
        message: '警告⚠️',
        description: '您已经到达记录顶部,不可以点击左侧滑动按钮'
      });
    }
  }
  setIndexState(startIndex) {
    const { num, data } = this.state;
    let endIndex = startIndex + num;
    let showData = data.slice(startIndex, endIndex);
    this.setState({
      showData: showData,
      currentFirstIndex: startIndex
    });
  }
  componentWillMount() {
    const { data, num } = this.state;
    let startIndex = 0;
    let endIndex = num;
    let dataLength = data.length;
    let showData = data.slice(startIndex, endIndex);
    this.setState({
      showData: showData,
      currentFirstIndex: startIndex,
      dataLength: dataLength
    });
    (startIndex + num) >= dataLength
      ? this.setState({ leftBtnAble: false })
      : this.setState({ leftBtnAble: true });

    startIndex <= 0
      ? this.setState({ rightBtnAble: false })
      : this.setState({ rightBtnAble: true });
  }
  render() {
    const { showData, leftBtnAble, rightBtnAble } = this.state;
    let apGroupItems = showData.map(
      elem => {
        return <ApGroupItem key={elem} itemName={elem} />
      }
    );
    return (
      <div
        style={{
          height: "100%"
        }}
      >
        <AbleFlagImg
          locateTo='lessee'
          imgName='ap分组信息左侧按钮'
          able={leftBtnAble}
          style={{
            float: "left",
            cursor: "pointer"
          }}
          clickFun={this.moveLeftItems.bind(this)}
        />
        <div
          style={{
            color: "rgb(206, 206, 206)"
          }}
        >
          {apGroupItems}
        </div>
        <AbleFlagImg
          locateTo='lessee'
          imgName='ap分组信息右侧按钮'
          able={rightBtnAble}
          style={{
            float: "right",
            cursor: "pointer"
          }}
          clickFun={this.moveRightItems.bind(this)}
        />
      </div>
    );
  }
}

export { ApGroupLabel as default };

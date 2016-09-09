'use strict';
/**
 * src/components/lessee/ApGroupLabel.jsx
 */
import React from 'react';
import Image from '../common/Image';
import ApGroupItem from './ApGroupItem';
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
      num: 5,
      data: ["SC-DJX01", "SC-DJX02", "SC-DJX03", "SC-DJX04", "SC-DJX05",
              "SC-DJX06", "SC-DJX07", "SC-DJX08", "SC-DJX09", "SC-DJX10" ],
      showData: ["SC-DJX01", "SC-DJX02", "SC-DJX03", "SC-DJX04", "SC-DJX05"],
      leftBtnAble: false,
      rightBtnAble: false
    };
  }
  moveLeftItems() {
    console.log("向左移动一位");
    const { currentFirstIndex } = this.state;
    let startIndex = currentFirstIndex + 1;
    this.setIndexState(startIndex);
  }
  moveRightItems() {
    console.log("向右移动一位");
    const { currentFirstIndex } = this.state;
    let startIndex = currentFirstIndex - 1;
    this.setIndexState(startIndex);
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
  render() {
    const { showData } = this.state;
    let apGroupItems = showData.map(
      elem => {
        return <ApGroupItem key={elem} itemName={elem} />
      }
    )
    return (
      <div
        style={{
          height: "100%",
          backgroundColor: "rgb(96, 96, 96)",
          color: "rgb(206, 206, 206)"
        }}
      >
        <Image
          locateTo='lessee'
          imgName='ap分组信息左侧按钮'
          style={{
            float: "left"
          }}
          clickFun={this.moveLeftItems.bind(this)}
        />
        {apGroupItems}
        <Image
          locateTo='lessee'
          imgName='ap分组信息右侧按钮'
          style={{
            float: "right"
          }}
          clickFun={this.moveRightItems.bind(this)}
        />
      </div>
    );
  }
}

export { ApGroupLabel as default };

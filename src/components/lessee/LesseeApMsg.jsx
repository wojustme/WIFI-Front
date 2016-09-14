'use strict';
/**
 * src/components/lessee/LesseeApMsg.jsx
 */
import React from 'react';
import Image from '../common/Image';
import ApGroupContainer from './ApGroupContainer';
import ApMsgGrid from './ApMsgGrid';
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
    const { apMsg } = this.props;
    const { tableData, apGroupList } = apMsg;
    return (
      <div
        className="lessee-apmsg"
        style={{
          height:650,
          textAlign:"center"
        }}
      >
        <Image locateTo="lessee" imgName="ap信息分割线"/>
        <div style={{height:"60px"}} />
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
            <ApGroupContainer apGroupList={apGroupList}/>
          </div>
          <div
            style={{
              float: "right",
              width: "85%",
              height: "100%"
            }}
          >
            <ApMsgGrid />
          </div>
        </div>
      </div>
    );
  }
}

export { LesseeApMsg as default };

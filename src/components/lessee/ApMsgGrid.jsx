'use strict';
/**
 * src/components/lessee/ApMsgGrid.jsx
 */
import React from 'react';
import Table from '../common/Table';
import { Pagination, Button } from 'antd';
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
      showOperations: showOperations
    };
  }
  render() {
    const { gridData } = this.props
    const { bodyData, headData, pageInfo, operateOptions } = gridData;
    const { showOperations } = this.state;
    return (
      <div>
        <Table
          headData={headData}
          bodyData={bodyData}
          operateOptions={operateOptions}
          showOperations={showOperations}
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
                  this.setState({ showOperations: !showOperations });
                }
              }
            >
              {this.state.showOperations ? "保存" : "编辑"}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export { ApMsgGrid as default };

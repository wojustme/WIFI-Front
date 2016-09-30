'use strict';
/**
 * src/components/portal/manageTemplate/TemplateTable.jsx
 */
import React, { Component } from 'react';
import { Pagination, Button } from 'antd';
import TableWithAction from '../../../common/TableWithAction';
/**
 * @class             Portal管理第1屏的模板管理----模板管理子模块中表格组件
 * @author            xurenhe
 * @date              2016-09-29
 * @copyright         城云科技
 * @version           0.0.1
 */
class TemplateTable extends Component {

  render() {
    let headData = [{
      title: '名称',
      dataIndex: 'name'
    }, {
      title: 'portal',
      dataIndex: 'portal'
    }];
    let bodyData = {
    	"row_01": {
    		"id": "row_01",
    		"name": "SC-NSYJ-AP01",
    		"portal": "AIR-CAP15321-H-K1"
    	},
    	"row_02": {
    		"id": "row_02",
    		"name": "SC-NSYJ-AP02",
    		"portal": "AIR-CAP15321-H-K1"
    	},
    	"row_03": {
    		"id": "row_03",
    		"name": "SC-NSYJ-AP03",
    		"portal": "AIR-CAP15321-H-K1"
    	},
    	"row_04": {
    		"id": "row_04",
    		"name": "SC-NSYJ-AP04",
    		"portal": "AIR-CAP15321-H-K1"
    	},
    	"row_05": {
    		"id": "row_05",
    		"name": "SC-NSYJ-AP05",
    		"portal": "AIR-CAP15321-H-K1"
    	},
    	"row_06": {
    		"id": "row_06",
    		"name": "SC-NSYJ-AP06",
    		"portal": "AIR-CAP15321-H-K1"
    	}
    };
    return (
      <div
        style={{
          width:"80%"
        }}
      >
        <TableWithAction
          key="portalManagerTable"
          headData={headData}
          bodyData={bodyData}
          operateOptions={["edit"]}
          isChooseItem={true}
          operationsVisible={true}
        />

        <div
          style={{
            marginTop: "30px"
          }}
        >
          <div
            style={{
              float: "left"
            }}
          >
            <input
              type="checkbox"
              style={{
                marginLeft: "14px",
                marginRight: "6px"
              }}
            />
            <span
              style={{
                fontSize:"16px"
              }}
            >
              全选
            </span>
            <button
              style={{
                marginLeft:"30px",
                height:"30px",
                width:"100px"
              }}
            >
              删除
            </button>
          </div>
          <div
            style={{
              float: "right",
              position: "relative",
              right:"10%"
            }}
          >
            <Pagination
              current={1}
              total={12}
              pageSize={6}
              onChange={
                page => this.props.changePage(page)
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export { TemplateTable as default };

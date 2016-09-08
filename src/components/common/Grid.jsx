'use strict';
/**
 * src/components/common/Grid.jsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'antd';
import './Grid.scss';
/**
 * @class             表格组件
 * @author            xurenhe
 * @date              2016-08-31
 * @copyright         城云科技
 * @version           0.0.1
 */
class Grid extends React.Component {
  render() {
    const { headData, bodyData, pageInfo } = this.props;
    return(
      <Table
        className="my-table"
        columns={headData}
        rowKey={record => record.id}
        dataSource={bodyData}
        pagination={pageInfo}
      />
    )
  }
}

export { Grid as default };

'use strict';
/**
 * src/components/common/Grid.jsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'antd';
/**
 * @class             表格组件
 * @author            xurenhe
 * @date              2016-08-31
 * @copyright         城云科技
 * @version           0.0.1
 */
class Grid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        data: [],
        pagination: [],
        loading: false
    };
  }
  componentDidMount() {
    fetch('http://localhost:9992/data/common/grid.json').then(function(response) {
      return response.json()
    }).then(data => {
      const pagination = this.state.pagination;
      pagination.total = 200;
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

  render() {
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      render: name => `${name.first} ${name.last}`,
    }, {
      title: '性别',
      dataIndex: 'gender',
    }, {
      title: '邮箱',
      dataIndex: 'email',
    }];
    return(
      <Table
        columns={columns}
        rowKey={record => record.registered}
        dataSource={this.state.data}
        pagination={this.state.pagination}
        loading={this.state.loading}
      />
    )
  }
}

export { Grid as default };

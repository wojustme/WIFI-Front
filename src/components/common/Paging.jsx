'use strict';
/**
 * src/components/common/Table.jsx
 */
import React, { Component } from 'react';
import './Table.scss';
/**
 * @class             表格基本组件，无分页功能
 * @author            xurenhe
 * @date              2016-09-10
 * @copyright         城云科技
 * @version           0.0.1
 */
class Table extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageInfo: {}
    };
  }
  componentWillMount() {
    const { pageInfo } = this.props;
    this.setState({
      pageInfo: pageInfo
    });
  }
  render() {
    const { headData, bodyData } = this.state;
    let tableHead = headData.map(
      elem => {
        return <th key={elem.title}>{elem.title}</th>
      }
    );
    tableHead = <tr>{tableHead}</tr>;
    let tableBody = bodyData.map(
      elem => {
        let tmp = [];
        for (let key in elem) {
          if(key != "id") {
            tmp.push(<td key={key}>{elem[key]}</td>)
          }
        }
        return <tr key={elem["id"]}>{tmp}</tr>
      }
    );
    return (
      <table className="cci-table">
        <thead>
          {tableHead}
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </table>
    )
  }
}

export { Table as default };

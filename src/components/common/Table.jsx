'use strict';
/**
 * src/components/common/Table.jsx
 */
import React from 'react';
import uuid from 'node-uuid';
import { isEmptyArray } from '../../utils/OriginalJSUtil';
import AImg from './AImg';
import './Table.scss';
/**
 * @class             表格基本组件，无分页功能
 * @author            xurenhe
 * @date              2016-09-10
 * @copyright         城云科技
 * @version           0.0.1
 */
class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      headData: [],
      bodyData: [],
      operateOptions: [],
      showOperations: false
    };
  }
  componentWillMount() {
    const { headData, operateOptions } = this.props;
    this.setState({
      headData: headData,
      operateOptions: operateOptions
    });
  }
  componentDidUpdate() {
  }
  render() {
    const { headData, operateOptions } = this.state;
    const { bodyData, showOperations } = this.props;
    let tableHead = headData.map(
      elem => {
        return <th key={elem.dataIndex}>{elem.title}</th>
      }
    );
    if(showOperations && !isEmptyArray(operateOptions))
      tableHead.push(<th key="operates">操作</th>)
    tableHead = <tr>{tableHead}</tr>;
    let tableBody = bodyData.map(
      elem => {
        let tmp = [];
        for (let key in elem) {
          if(key != "id") {
            tmp.push(<td key={uuid.v4()}>{elem[key]}</td>)
          }
        }
        if(showOperations && !isEmptyArray(operateOptions)) {
          let operateLinks = operateOptions.map(
            elem => {
              return <AImg key={elem} actionType={elem} />
            }
          )
          tmp.push(
            <td
              key={"rowid_" + elem["id"]}
              className="operateAction"
            >
              {operateLinks}
            </td>
          );
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

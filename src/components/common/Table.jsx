'use strict';
/**
 * src/components/common/Table.jsx
 */
import React, { Component } from 'react';
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
class Table extends Component {
  constructor(props){
    super(props);
    const { headData, operateOptions } = this.props;
    this.state = {
      headData: headData,
      operateOptions: operateOptions
    };
  }
  render() {
    const { headData, operateOptions } = this.state;
    const { bodyData, operationsVisible } = this.props;
    let idToRowNum = new Map();
    let counter = 0;
    let tableHead = headData.map(
      elem => {
        return <th key={elem.dataIndex}>{elem.title}</th>
      }
    );
    if(operationsVisible && !isEmptyArray(operateOptions))
      tableHead.push(<th key="operates">操作</th>)
    tableHead = <tr>{tableHead}</tr>;
    let tableBody = bodyData.map(
      rowElem => {
        let rowDataHtml = headData.map(
          elemObj => {
            return (
              <td
                key={elemObj['dataIndex']}
              >
                {rowElem[elemObj['dataIndex']]}
              </td>
            );
          }
        );
        if(operationsVisible && !isEmptyArray(operateOptions)) {
          let operateLinks = operateOptions.map(
            actionElem => {
              return (
                <AImg
                  key={actionElem}
                  actionType={actionElem}
                  rowId={rowElem["id"]}
                  doAction={
                    (actionType, rowId) => this.props.doAction(actionType, idToRowNum.get(rowId))
                  }
                />
              );
            }
          );
          rowDataHtml.push(<td key="action">{operateLinks}</td>);
        }
        return (
          <tr
            key={rowElem['id']}
          >
            {rowDataHtml}
          </tr>
        );
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
    );
  }
}

export { Table as default };

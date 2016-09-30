'use strict';
/**
 * src/components/common/TableWithAction.jsx
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
class TableWithAction extends Component {
  constructor(props){
    super(props);
    const { headData, operateOptions, isChooseItem } = this.props;
    this.state = {
      headData,
      operateOptions: operateOptions || [],
      isChooseItem: isChooseItem || false
    };
  }
  render() {
    const { headData, operateOptions, isChooseItem } = this.state;
    const { bodyData, operationsVisible } = this.props;
    let idToRowNum = new Map();
    let counter = 0;
    let tableHead = headData.map(
      elem => {
        return <th key={elem.dataIndex}>{elem.title}</th>
      }
    );
    if(operationsVisible && !isEmptyArray(operateOptions))
      tableHead.push(<th key="operates">操作</th>);
    if (isChooseItem) {
      tableHead = [(<th key="checkChoose"></th>), ...tableHead];
    }
    tableHead = <tr>{tableHead}</tr>;

    let tableBody = Object.keys(bodyData).map(
      key => {
        // 一行的数据
        let rowElem = bodyData[key];
        let rowDataHtml = headData.map(
          elemObj => {
            return (
              <td key={elemObj['dataIndex']}>
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
                  dataId={rowElem["id"]}
                  doAction={
                    (actionType, dataId) => this.props.doAction(actionType, bodyData[dataId])
                  }
                />
              );
            }
          );
          rowDataHtml.push(<td key="action">{operateLinks}</td>);
        }
        if (isChooseItem) {
          rowDataHtml = [<td key="123"><input type="checkbox"/></td>, ...rowDataHtml]
        }
        return (
          <tr key={rowElem['id']}>
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

export { TableWithAction as default };

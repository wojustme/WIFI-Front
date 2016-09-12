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
class ApGroupLabel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bodyData: [],
      headData: [],
      pageInfo: {},
      operateOptions: [],
      showOperations: false
    };
  }
  render() {
    let bodyData = [{
          "id": "01",
      		"apName": "SC-NSYJ-AP1",
      		"apType": "AIR-CAP15321-H-K1",
      		"apMac": "84:b8:02:ac:f8:01",
      		"radioMac": "84:b8:02:ac:f8:01",
      		"apAddress": "中山一路1号",
      		"apLongitude": "120.01",
      		"apLatitude": "30.01"
      	}, {
          "id": "02",
      		"apName": "SC-NSYJ-AP1",
      		"apType": "AIR-CAP15321-H-K1",
      		"apMac": "84:b8:02:ac:f8:01",
      		"radioMac": "84:b8:02:ac:f8:01",
      		"apAddress": "中山一路1号",
      		"apLongitude": "120.01",
      		"apLatitude": "30.01"
      	}, {
          "id": "03",
      		"apName": "SC-NSYJ-AP1",
      		"apType": "AIR-CAP15321-H-K1",
      		"apMac": "84:b8:02:ac:f8:01",
      		"radioMac": "84:b8:02:ac:f8:01",
      		"apAddress": "中山一路1号",
      		"apLongitude": "120.01",
      		"apLatitude": "30.01"
      	}, {
          "id": "04",
      		"apName": "SC-NSYJ-AP1",
      		"apType": "AIR-CAP15321-H-K1",
      		"apMac": "84:b8:02:ac:f8:01",
      		"radioMac": "84:b8:02:ac:f8:01",
      		"apAddress": "中山一路1号",
      		"apLongitude": "120.01",
      		"apLatitude": "30.01"
      	}, {
          "id": "05",
      		"apName": "SC-NSYJ-AP1",
      		"apType": "AIR-CAP15321-H-K1",
      		"apMac": "84:b8:02:ac:f8:01",
      		"radioMac": "84:b8:02:ac:f8:01",
      		"apAddress": "中山一路1号",
      		"apLongitude": "120.01",
      		"apLatitude": "30.01"
      	}, {
          "id": "06",
      		"apName": "SC-NSYJ-AP1",
      		"apType": "AIR-CAP15321-H-K1",
      		"apMac": "84:b8:02:ac:f8:01",
      		"radioMac": "84:b8:02:ac:f8:01",
      		"apAddress": "中山一路1号",
      		"apLongitude": "120.01",
      		"apLatitude": "30.01"
      	}, {
          "id": "07",
      		"apName": "SC-NSYJ-AP1",
      		"apType": "AIR-CAP15321-H-K1",
      		"apMac": "84:b8:02:ac:f8:01",
      		"radioMac": "84:b8:02:ac:f8:01",
      		"apAddress": "中山一路1号",
      		"apLongitude": "120.01",
      		"apLatitude": "30.01"
      	}, {
          "id": "08",
      		"apName": "SC-NSYJ-AP1",
      		"apType": "AIR-CAP15321-H-K1",
      		"apMac": "84:b8:02:ac:f8:01",
      		"radioMac": "84:b8:02:ac:f8:01",
      		"apAddress": "中山一路1号",
      		"apLongitude": "120.01",
      		"apLatitude": "30.01"
      	}, {
          "id": "09",
      		"apName": "SC-NSYJ-AP1",
      		"apType": "AIR-CAP15321-H-K1",
      		"apMac": "84:b8:02:ac:f8:01",
      		"radioMac": "84:b8:02:ac:f8:01",
      		"apAddress": "中山一路1号",
      		"apLongitude": "120.01",
      		"apLatitude": "30.01"
      	}, {
          "id": "10",
      		"apName": "SC-NSYJ-AP1",
      		"apType": "AIR-CAP15321-H-K1",
      		"apMac": "84:b8:02:ac:f8:01",
      		"radioMac": "84:b8:02:ac:f8:01",
      		"apAddress": "中山一路1号",
      		"apLongitude": "120.01",
      		"apLatitude": "30.01"
      	}],
        headData = [{
          title: 'AP名称',
          dataIndex: 'apName'
        }, {
          title: 'AP类型',
          dataIndex: 'apType'
        }, {
          title: 'AP-mac',
          dataIndex: 'apMac'
        }, {
          title: 'Radio-mac',
          dataIndex: 'radioMac'
        }, {
          title: 'AP地址',
          dataIndex: 'apAddress'
        }, {
          title: 'AP经度',
          dataIndex: 'apLongitude'
        }, {
          title: 'AP纬度',
          dataIndex: 'apLatitude'
        }],
        pageInfo = {
          total: 20
        };
    const { showOperations } = this.state;
    return (
      <div>
        <Table
          headData={headData}
          bodyData={bodyData}
          operateOptions={["edit"]}
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

export { ApGroupLabel as default };

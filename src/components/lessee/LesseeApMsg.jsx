'use strict';
/**
 * src/components/lessee/LesseeApMsg.jsx
 */
import React from 'react';
import Image from '../common/Image';
import Grid from '../common/Grid';
/**
 * @class             租户中心第1屏的AP信息组件
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
class LesseeApMsg extends React.Component {
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

    return (
      <div
        style={{
          height:650,
          textAlign:"center"
        }}
      >
        <Image locateTo="lessee" imgName="ap信息分割线"/>
        <div style={{height:"60px"}} />
        <div
          style={{
            width:"80%",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center"
          }}
        >
          <Grid headData={headData} bodyData={bodyData} pageInfo={pageInfo} />
        </div>
      </div>
    );
  }
}

export { LesseeApMsg as default };

/**
 * @author LiuLei
 * @date 2016-09-28
 * @copyright 成云科技
 * @function 数据统计
 */
import React from 'react';
import {Row,Col} from 'antd';
import WatchtowerRealTime from './WatchtowerRealTime';
import WatchtowerHistory from './WatchtowerHistory';
import './style/watchtowerStatistic.scss';
class WatchtowerStatistic extends React.Component{
	render(){
		return(
			<div className='wt-statistic-box'>
				<Row>
 					{/*实时数据统计*/}
 					<Col span={10} offset={2}>
 						<WatchtowerRealTime/>
 					</Col>
 					{/*历史数据统计*/}
 					<Col span={10}>
 						<WatchtowerHistory/>
 					</Col>
 				</Row>
			</div>
		)
	}
}

export default WatchtowerStatistic;
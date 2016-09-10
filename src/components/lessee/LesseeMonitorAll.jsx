/**
 * @author LiuLei
 * @data 2016-09-09
 * @copyright 成云科技
 * @function 显示监控的所有项目
 */

import React from 'react';
import LesseeMonitorAPAlarm from './LesseeMonitorAPAlarm';
import LesseeMonitorSSID from './LesseeMonitorSSID';
import LesseeMonitorUserCount from './LesseeMonitorUserCount';
import LesseeMonitorBandWidth from './LesseeMonitorBandWidth';

class LesseeMonitorAll extends React.Component{
	render(){
		return(
			<div>
				{/*AP告警监控*/}
				<div style={{float:"left",marginLeft:150}}>
					<LesseeMonitorAPAlarm styleConfig={{width:265,height:265}}/>
				</div>
				{/*SSID用户数和比例*/}
				<div style={{float:"left",marginLeft:150}}>
					<LesseeMonitorSSID styleConfig={{width:265,height:265}}/>
				</div>
				{/*一天中的用户统计*/}
				<div style={{float:"left",marginLeft:150,marginTop:50}}>
					<LesseeMonitorUserCount styleConfig={{width:500,height:220}}/>
				</div>
				{/*一天中的带宽统计*/}
				<div style={{float:"left",marginLeft:46,marginTop:50}}>
					<LesseeMonitorBandWidth styleConfig={{width:500,height:220}}/>
				</div>
			</div>
		)
	}
}

export default LesseeMonitorAll;
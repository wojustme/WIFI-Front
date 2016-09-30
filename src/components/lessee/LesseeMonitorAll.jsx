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
				<div style={{float:"left"}}>
					{/*AP告警监控*/}
					<div style={{float:"left",marginLeft:150}}>
						<LesseeMonitorAPAlarm styleConfig={{width:274,height:264}}/>
					</div>
					{/*SSID用户数和比例*/}
					<div style={{float:"left",marginLeft:55}}>
						<LesseeMonitorSSID styleConfig={{marginLeft:50,width:345,height:264}}/>
					</div>
					{/*一天中的用户统计*/}
					<div style={{clear:"both",float:"left",marginLeft:150,marginTop:30}}>
						<LesseeMonitorUserCount styleConfig={{width:510,height:217}}/>
					</div>
					{/*一天中的带宽统计*/}
					<div style={{float:"left",marginLeft:50,marginTop:30}}>
						<LesseeMonitorBandWidth styleConfig={{width:510,height:217}}/>
					</div>
				</div>
				{/*清除浮动*/}
				<div style={{clear:"both"}}></div>
			</div>
		)
	}
}

export default LesseeMonitorAll;
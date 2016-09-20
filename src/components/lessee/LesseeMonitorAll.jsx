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
import LesseeMonitorAnalysis from './LesseeMonitorAnalysis';

class LesseeMonitorAll extends React.Component{
	render(){
		return(
			<div>
				<div style={{float:"left"}}>
					{/*AP告警监控*/}
					<div style={{float:"left",marginLeft:150}}>
						<LesseeMonitorAPAlarm styleConfig={{width:132,height:122}}/>
					</div>
					{/*SSID用户数和比例*/}
					<div style={{float:"left",marginLeft:15}}>
						<LesseeMonitorSSID styleConfig={{marginLeft:50,width:142,height:122}}/>
					</div>
					{/*一天中的用户统计*/}
					<div style={{clear:"both",float:"left",marginLeft:150,marginTop:10}}>
						<LesseeMonitorUserCount styleConfig={{width:482,height:169}}/>
					</div>
					{/*一天中的带宽统计*/}
					<div style={{clear:"both",float:"left",marginLeft:150,marginTop:10}}>
						<LesseeMonitorBandWidth styleConfig={{width:482,height:155}}/>
					</div>
				</div>
				<div style={{float:"left",marginLeft:15}}>
					<LesseeMonitorAnalysis/>
				</div>
				{/*清除浮动*/}
				<div style={{clear:"both"}}></div>
			</div>
		)
	}
}

export default LesseeMonitorAll;
/**
 * @author LiuLei
 * @data 2016-09-12
 * @copyright 成云科技
 * @function 监控方面的整体分析
 */
import React from 'react';
import {Row,Col} from 'antd';
import ReactEcharts from 'echarts-for-react';
import ES6Promise from 'es6-promise';
import 'isomorphic-fetch';
ES6Promise.polyfill();
class LesseeMonitorAnalysis extends React.Component{
	componentDidMount(){
		fetch('http://localhost:9992/data/common/psgFlow.json').then(res=>{
			return res.json()
		}).then(data=>{
			console.log(data);
			let psgFlowChart =  this.psgFlow.getEchartsInstance();
			psgFlowChart.setOption({
				xAxis:{
					data:data.time
				},
				series:[
					{
						data:data.data
					}
				]
			});
		}).catch(e=>{
			console.log('出错了！',e);
		});

	}
	render(){
		let option = {
			color:['#517499'],
		    title: {
		        text: '实时客流',
		        textStyle:{
		        	color:'#FFF',
		        	fontWeight:'normal',
		        	fontSize:'16'
		        }
		    },
		    tooltip: {
		        trigger: 'axis'
		    },
		    legend: {
		    	x:'right',
		        data:['客流变化'],
		        textStyle:{
		        	color:'#FFF'
		        }
		    },
		    xAxis:  {
		        type: 'category',
		        boundaryGap: false,
		        data: [],
		        axisLine:{
		        	lineStyle:{
		        		color:'#517499'
		        	}
		        },
		        splitLine: {
	                show: true,
	                lineStyle:{
	                	color:'#517499'
	                }
	            }
		    },
		    yAxis: {
		        type: 'value',
		        // axisLabel: {
		        //     formatter: '{value} °C'
		        // },
		        axisLine:{
		        	lineStyle:{
		        		color:'#517499'
		        	}
		        },
		        splitLine: {
	                show: true,
	                lineStyle:{
	                	color:'#517499'
	                }
	            }
		    },
		    grid:{
		    	//show:true,
		    	top:'20%',
		    	left: '0%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    series: [
		        {
		            name:'客流变化',
		            type:'line',
		            data:[]
		        }
		    ]
		};

		return(
			<div className='lesseeMonitorAnalysis'>
				{/*第1行*/}
				<Row>
					<Col span={12} className='numCount'>
						<Row><Col span={24}>
							<span style={{fontSize:24}}>3251</span>
						</Col></Row>
						<Row><Col span={24}>
							<span>当天累计人数(个)</span>
						</Col></Row>
					</Col>
					<Col span={12} className='numCount'>
						<Row><Col>
							<span style={{fontSize:24}}>3251</span>
						</Col></Row>
						<Row><Col>
							<span>本月累计人数(个)</span>
						</Col></Row>
					</Col>
				</Row>
				{/*第2行*/}
				<Row>
					<Col span={24} className='passengerFlowChart'>
						<ReactEcharts ref={ref=>this.psgFlow=ref} option={option} style={{height:150}}/>
					</Col>
				</Row>
				{/*第3行*/}
				<Row>
					<Col span={8} className='numCount'>
						<Row><Col span={24}>
							<span style={{fontSize:24}}>3251</span>
						</Col></Row>
						<Row><Col span={24}>
							<span>当天累计人数(个)</span>
						</Col></Row>
					</Col>
					<Col span={8} className='numCount'>
						<Row><Col span={24}>
							<span style={{fontSize:24}}>3251</span>
						</Col></Row>
						<Row><Col span={24}>
							<span>当天累计人数(个)</span>
						</Col></Row>
					</Col>
					<Col span={8} className='numCount'>
						<Row><Col span={24}>
							<span style={{fontSize:24}}>3251</span>
						</Col></Row>
						<Row><Col span={24}>
							<span>当天累计人数(个)</span>
						</Col></Row>
					</Col>
				</Row>
				{/*第4行*/}
				<Row>
					<Col span={24} className='passengerFlowChart'>客流分布</Col>
				</Row>
			</div>
		)
	}
}

export default LesseeMonitorAnalysis;
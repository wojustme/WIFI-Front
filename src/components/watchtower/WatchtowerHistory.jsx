/**
 * @author LiuLei
 * @date 2016-09-28
 * @copyright 成云科技
 * @function 历史数据统计
 */
import React from 'react';
import {Row,Col} from 'antd';
import ReactEcharts from 'echarts-for-react';
import ES6Promise from 'es6-promise';
import 'isomorphic-fetch';
import {WATCHTOWER_HISTORY_REGISTER} from '../../ajaxurls/watchtower/WatchtowerAJAXURLS';
ES6Promise.polyfill();
class WatchtowerHistory extends React.Component{
	componentDidMount(){
		fetch(WATCHTOWER_HISTORY_REGISTER).then(res=>{
			return res.json()
		}).then(data=>{
			let registerHistory =  this.registerHistory.getEchartsInstance();
			registerHistory.setOption({
				xAxis:{
					data:data.time
				},
				series:[
					{
						data:data.data1
					},
					{
						data:data.data2
					}
				]
			});
		}).catch(e=>{
			console.log('出错了！',e);
		});

	}
	render(){
		let optionLine = {
			color:['#517499','#38F486'],
		    title: {
		        //text: '实时客流',
		        x:'center',
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
		    	x:'left',
		        data:['累计注册人数','累计客流人数'],
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
		    	top:'20%',
		    	left: '3%',
		        right: '3%',
		        bottom: '3%',
		        containLabel: true
		    },
		    series: [
		        {
		            name:'累计注册人数',
		            type:'line',
		            symbol: 'rect',
		            data:[]
		        },
		        {
		            name:'累计客流人数',
		            type:'line',
		            symbol: 'rect',
		            data:[]
		        }
		    ]
		};
		let optionColumn = {
		    color: ['#78B8F9','#38F486'],
		    title : {
		    	top:'3%',
		        //text: 'SSID用户数',
		        x:'center',
		        textStyle:{//字体
		        	color:'#FFF',
		        	fontWeight:'normal',
		        	fontSize:14
		        }
		    },
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    grid: {
		    	top:'25%',
		        left: '3%',
		        right: '3%',
		        bottom: '3%',
		        containLabel: true
		    },
		    legend: {
		    	x:'left',
		        data:['注册人数','客流人数'],
		        textStyle:{
		        	color:'#FFF'
		        }
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		            axisTick: {
		                alignWithLabel: true
		            },
		            axisLine:{
			        	lineStyle:{
			        		color:'#517499'
			        	}
			        }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
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
		        }
		    ],
		    series : [
		        {
		            name:'注册人数',
		            type:'bar',
		            //barWidth: '60%',
		            data:[10, 52, 200, 334, 390, 330, 220]
		        },
		        {
		            name:'客流人数',
		            type:'bar',
		            //barWidth: '60%',
		            data:[12, 59, 275, 355, 453, 356, 279]
		        }
		    ]
		};
		return(
			<div className='wt-history-box'>
				<Row><Col span={24}><span className='wt-statistic-title'>
					实时数据统计
				</span></Col></Row>
				{/*第1行*/}
				<Row>
					<Col span={12} >
						<div className='num-count-box'>
							<Row><Col span={24}>
								<span className='num-font-size1'>3251</span>
							</Col></Row>
							<Row><Col span={24}>
								<span className='num-font-size2'>当天累计人数(个)</span>
							</Col></Row>
						</div>
					</Col>
					<Col span={12} >
						<div className='num-count-box'>
							<Row><Col>
								<span className='num-font-size1'>3251</span>
							</Col></Row>
							<Row><Col>
								<span className='num-font-size2'>本月累计人数(个)</span>
							</Col></Row>
						</div>
					</Col>
				</Row>
				{/*第2行*/}
				<Row>
					<Col span={24} className='chart-box'>
						<ReactEcharts ref={ref=>this.registerHistory=ref} option={optionLine} style={{height:173}}/>
					</Col>
				</Row>
				{/*第3行*/}
				<Row>
					<Col span={24} className='chart-box'>
						<ReactEcharts option = {optionColumn} style={{height:140}} />
					</Col>
				</Row>
				{/*第4行*/}
				<Row>
					<Col span={8}>
						<div className='num-count-box'>
							<Row><Col span={24}>
								<span style={{fontSize:32}}>3251</span>
							</Col></Row>
							<Row><Col span={24}>
								<span>当天累计人数(个)</span>
							</Col></Row>
						</div>
					</Col>
					<Col span={8}>
						<div className='num-count-box'>
							<Row><Col span={24}>
								<span style={{fontSize:32}}>3251</span>
							</Col></Row>
							<Row><Col span={24}>
								<span>当天累计人数(个)</span>
							</Col></Row>
						</div>
					</Col>
					<Col span={8}>
						<div className='num-count-box'>
							<Row><Col span={24}>
								<span style={{fontSize:32}}>3251</span>
							</Col></Row>
							<Row><Col span={24}>
								<span>当天累计人数(个)</span>
							</Col></Row>
						</div>
					</Col>
				</Row>
			</div>
		)
	}
}

export default WatchtowerHistory;

/**
 * @author LiuLei
 * @date 2016-09-28
 * @copyright 成云科技
 * @function 实时数据统计
 */
import React from 'react';
import {Row,Col} from 'antd';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
class WatchtowerRealTime extends React.Component{
	componentDidMount(){
		fetch('http://localhost:9992/data/common/psgFlow.json').then(res=>{
			return res.json()
		}).then(data=>{
			let psgFlowChart =  this.psgFlow.getEchartsInstance();
			psgFlowChart.setOption({
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
		    	left: '0%',
		        right: '4%',
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
		let optionBar = {
		    title: {
		        text: '世界人口总量',
		        subtext: '数据来自网络'
		    },
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow'
		        }
		    },
		    legend: {
		        data: ['2011年', '2012年']
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: {
		        type: 'value',
		        boundaryGap: [0, 0.01]
		    },
		    yAxis: {
		        type: 'category',
		        data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
		    },
		    series: [
		        {
		            name: '2011年',
		            type: 'bar',
		                 itemStyle: {
		                normal: {
		                    color: function(params) {
		                        // build a color map as your need.
		                        var mc =  new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
		                          offset: 0, color: '#76B6F4' // 0% 处的颜色
		                        }, {
		                          offset: 1, color: '#020B17' // 100% 处的颜色
		                        }], false);
		                        var colorList = [
		                          '#C1232B','#B5C334','#FCCE10','#E87C25',mc,
		                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
		                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
		                        ];
		                        return colorList[params.dataIndex]
		                    }
		                }
		            },
		            data: [18203, 23489, 29034, 104970, 131744, 630230]
		        }
		    ]
		};
		return(
			<div>
				{/*第1行*/}
				<Row><Col span={24}><span>实时数据统计</span></Col></Row>
				{/*第2行*/}
				<Row>
					<Col span={12}>
						<Row><Col span={24}>
							<span style={{fontSize:32}}>3251</span>
						</Col></Row>
						<Row><Col span={24}>
							<span>当天累计人数(个)</span>
						</Col></Row>
					</Col>
					<Col span={12}>
						<Row><Col span={24}>
							<span style={{fontSize:32}}>3251</span>
						</Col></Row>
						<Row><Col span={24}>
							<span>当天累计人数(个)</span>
						</Col></Row>
					</Col>
				</Row>
				{/*第3行*/}
				<Row>
					<Col span={24}>
						<ReactEcharts  ref={ref=>this.psgFlow=ref} option={optionLine} style={{height:152}}/>
					</Col>
				</Row>
				{/*第4行*/}
				<Row>
					<Col span={24}>
						<ReactEcharts option={optionBar} style={{height:152}}/>
					</Col>
				</Row>
			</div>
		)
	}
}

export default WatchtowerRealTime;
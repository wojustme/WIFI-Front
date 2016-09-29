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
			let registerToday =  this.registerToday.getEchartsInstance();
			registerToday.setOption({
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
		let optionBar = {
		    title: {
		        text: '注册手机品牌',
		        bottom:'5%',
		        x:'right',
		        textStyle:{//字体
		        	color:'#FFF',
		        	fontWeight:'normal',
		        	fontSize:14
		        }
		    },
		    grid: {
		    	top:'0%',
		        left: '-5%',
		        right: '3%',
		        bottom: '-10%',
		        containLabel: true
		    },
		    xAxis: {
		        type: 'value',
		        axisLabel:{
		        	show:false
		        },
		        axisLine:{
		        	show:false,
		        },
		        splitLine: {
	                show: false,
	            }
		    },
		    yAxis: {
		        type: 'category',
		        axisLabel:{
		        	show:false
		        },
		        axisLine:{
		        	show:false,
		        },
		        data: ['巴西','印尼','美国','印度','中国','法国']
		    },
		    series: [
		        {
		            name: '2011年',
		            type: 'bar',
		            label:{
		            	normal:{
		            		show:true,
		            		position:'right',
		            		formatter:'{b}:{c}%'
		            	}
		            },
	                itemStyle: {
		                normal: {
		                    color: function(params) {
		                    	let color = ['#B0A1E8','#E96961','#FCB42A',
		                    		'#F9EF32','#37F285','#77B6F5'];

		                    		let colorList = color.map(item=>{
		                    			return new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
					                          offset: 0, color: item // 0% 处的颜色
					                        }, {
					                          offset: 1, color: '#020B17' // 100% 处的颜色
					                        }], false);
		                    		})
		                        return colorList[params.dataIndex]
		                    }
		                }
		            },
		            data: [18203, 23489, 29034, 104970, 131744,155555]
		        }
		    ]
		};
		return(
			<div className='wt-history-box'>
				{/*第1行*/}
				<Row><Col span={24}><span className='wt-statistic-title'>
					实时数据统计
				</span></Col></Row>
				{/*第2行*/}
				<Row>
					<Col span={12}>
						<div className='num-count-box'>
							<Row><Col span={24}>
								<span className='num-font-size1'>3251</span>
							</Col></Row>
							<Row><Col span={24}>
								<span className='num-font-size2'>当天累计人数(个)</span>
							</Col></Row>
						</div>
					</Col>
					<Col span={12}>
						<div className='num-count-box'>
							<Row><Col span={24}>
								<span className='num-font-size1'>3251</span>
							</Col></Row>
							<Row><Col span={24}>
								<span className='num-font-size2'>当天累计人数(个)</span>
							</Col></Row>
						</div>
					</Col>
				</Row>
				{/*第3行*/}
				<Row>
					<Col span={24} className='chart-box'>
						<ReactEcharts  ref={ref=>this.registerToday=ref} option={optionLine} style={{height:220}}/>
					</Col>
				</Row>
				{/*第4行*/}
				<Row>
					<Col span={24} className='chart-box'>
						<ReactEcharts option={optionBar} style={{height:160}}/>
					</Col>
				</Row>
			</div>
		)
	}
}

export default WatchtowerRealTime;
/**
 * @author LiuLei
 * @data 2016-09-10
 * @copyright 成云科技
 * @function 带宽统计
 */

import React from 'react';
import ReactEcharts from 'echarts-for-react';
class LesseeMonitorBandWidth extends React.Component{
	static propTypes={
		styleConfig:React.PropTypes.object
	}
	render(){
		let {styleConfig}=this.props;
		styleConfig=(styleConfig?styleConfig:{width:805,height:345});
		//模拟数据start
		var base = +new Date(1968, 9, 3);
		var oneDay = 24 * 3600 * 1000;
		var date = [];

		var data = [Math.random() * 300];

		for (var i = 1; i < 20000; i++) {
		    var now = new Date(base += oneDay);
		    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
		    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
		}
		//模拟数据end
		const option = {
		    tooltip: {
		        trigger: 'axis',
		        position: function (pt) {
		            return [pt[0], '10%'];
		        }
		    },
		    title: {
		        left: 'center',
		        text: '带宽(Mbps)',
		        textStyle:{//字体
		        	fontWeight:'normal',
		        	fontSize:14
		        }
		    },
		    toolbox: {
		    	x:'left',
		        feature: {
		            dataZoom: {
		                yAxisIndex: 'none'
		            },
		            //restore: {},
		            //saveAsImage: {}
		        }
		    },
		    xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        data: date
		    },
		    yAxis: {
		        type: 'value',
		        boundaryGap: [0, '100%']
		    },
		    grid:{
		    	top:'20%',
		    	left: '0%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    /*dataZoom: [{
		        type: 'inside',
		        start: 0,
		        end: 10
		    }, {
		        start: 0,
		        end: 10,
		        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
		        handleSize: '80%',
		        handleStyle: {
		            color: '#fff',
		            shadowBlur: 3,
		            shadowColor: 'rgba(0, 0, 0, 0.6)',
		            shadowOffsetX: 2,
		            shadowOffsetY: 2
		        }
		    }],*/
		     legend: {
		     	orient:'vertical',
		     	x: 'right',
		        data:['上传','接收']
		    },
		    series: [
		        {
		            name:'上传',
		            type:'line',
		            smooth:true,
		            symbol: 'none',
		            sampling: 'average',
		            itemStyle: {
		                normal: {
		                    color: ['#85CECC']
		                }
		            },
		            areaStyle: {
		                normal: {
		                    color: ['#C8F0EE']
		                }
		            },
		            data: data
		        },
		         {
		            name:'接收',
		            type:'line',
		            smooth:true,
		            symbol: 'none',
		            sampling: 'average',
		            itemStyle: {
		                normal: {
		                    color: ['#B699BF']
		                }
		            },
		            areaStyle: {
		                normal: {
		                    color: ['#C8C7DF']
		                }
		            },
		            data: data
		        }
		    ]
		};

		return(
			<div>
				<ReactEcharts option = {option} style={{margin:"0 auto",border:"1px solid #D3D3D3",...styleConfig}}/>
			</div>
		)
	}
}

export default LesseeMonitorBandWidth;
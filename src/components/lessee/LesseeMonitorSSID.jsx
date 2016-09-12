/**
 * @author LiuLei
 * @data 2016-09-09
 * @copyright 成云科技
 * @function 监控AP告警图表
 */

import React from 'react';
import ReactEcharts from 'echarts-for-react';
class LesseeMonitorSSID extends React.Component{
	static propTypes={
		styleConfig:React.PropTypes.object
	}
	render(){
		let {styleConfig}=this.props;
		styleConfig=(styleConfig?styleConfig:{width:360,height:350});
		const optionColumn = {
		    color: ['#937BB2'],
		    title : {
		    	top:'3%',
		        text: 'SSID用户数',
		        x:'center',
		        textStyle:{//字体
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
		        right: '0%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		            axisTick: {
		                alignWithLabel: true
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    /*toolbox: {
		        show : true,
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            magicType : {
		                show: true, 
		                type: ['pie', 'funnel'],
		                option: {
		                    funnel: {
		                        x: '25%',
		                        width: '50%',
		                        funnelAlign: 'left',
		                        max: 1548
		                    }
		                }
		            },
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },*/
		    series : [
		        {
		            name:'SSID用户数',
		            type:'bar',
		            barWidth: '60%',
		            data:[10, 52, 200, 334, 390, 330, 220]
		        }
		    ]
		};

		const optionPie = {
			color: ['#C6BFD3','#937BB2','#7D6797'],
		    title : {
		    	top:'3%',
		        text: 'SSID用户比例',
		        x:'center',
		        textStyle:{//字体
		        	fontWeight:'normal',
		        	fontSize:14
		        }
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		    	top:'86%',
		        orient : 'horizontal',
		        x : 'center',
		        y : 'bottom',
		        data:['正常','故障']
		    },
		    /*toolbox: {
		        show : true,
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            magicType : {
		                show: true, 
		                type: ['pie', 'funnel'],
		                option: {
		                    funnel: {
		                        x: '25%',
		                        width: '50%',
		                        funnelAlign: 'left',
		                        max: 1548
		                    }
		                }
		            },
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },*/
		    calculable : true,
		    series : [
		        {
		            name:'AP预警',
		            type:'pie',
		            radius : '60%',
		            center: ['50%', '50%'],
		            label:{//标签显示在饼上
		            	normal:{
		            		position:'inside'
		            	}
		            },
		            data:[
		                {value:335, name:'正常'},
		                {value:310, name:'故障'},
		            ]
		        }
		    ]
		};
		return(
			<div>
				<div  style={{width:styleConfig.width*2+102,margin:"0 auto",border:"1px solid #D3D3D3"}}>
					<ReactEcharts option = {optionColumn} style={{float:"left",...styleConfig}} />
					<ReactEcharts option = {optionPie} style={{float:"left",marginLeft:100,...styleConfig}}/>
					<div style={{clear:"both"}}></div>
				</div>
			</div>
		)
	}
}

export default LesseeMonitorSSID;
/**
 * @author LiuLei
 * @data 2016-09-09
 * @copyright 成云科技
 * @function 监控AP告警图表
 */

import React from 'react';
import ReactEcharts from 'echarts-for-react';
class LesseeMonitorAPAlarm extends React.Component{
	static propTypes={
		styleConfig:React.PropTypes.object
	}
	render(){
		let {styleConfig}=this.props;
		styleConfig=(styleConfig?styleConfig:{width:360,height:350});
		const option = {
			color: ['#B8ACC9','#846EA0'],
		    title : {
		    	top:'3%',
		        text: 'AP预警',
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
		        y:'bottom',
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
		            radius : '60%',//圆半径
		            center: ['50%', '50%'],//圆中心位置(x,y)
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
				<ReactEcharts option = {option} style={{margin:"0 auto",border:"1px solid #D3D3D3",...styleConfig}} />
			</div>
		)
	}
}

export default LesseeMonitorAPAlarm;
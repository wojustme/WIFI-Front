/**
 * @author LiuLei
 * @data 2016-09-12
 * @copyright 成云科技
 * @function 监控方面的整体分析
 */
import React from 'react';
import {Row,Col} from 'antd';

class LesseeMonitorAnalysis extends React.Component{
	render(){
		return(
			<div style={{width:395,height:335,backgroundColor:'#181818'}}>
				{/*第1行*/}
				<Row>
					<Col span={12} style={{border:"1px solid #FFF",backgroundColor:"#78B8F9"}}>
						<Row><Col span={24}>
							<span style={{fontSize:24}}>3251</span>
						</Col></Row>
						<Row><Col span={24}>
							<span>当天累计人数(个)</span>
						</Col></Row>
					</Col>
					<Col span={12} style={{border:"1px solid #FFF",backgroundColor:"#78B8F9"}}>
						<Row><Col>
							<span style={{fontSize:24}}>3251</span>
						</Col></Row>
						<Row><Col>
							<span>本月累计人数(个)</span>
						</Col></Row>
					</Col>
				</Row>
				{/*第2行*/}
				<Row style={{marginTop:2}}>
					<Col span={24} style={{height:174}}>客流变化</Col>
				</Row>
				{/*第3行*/}
				<Row style={{marginTop:2}}>
					<Col span={8} style={{border:"1px solid #FFF",backgroundColor:"#78B8F9"}}>
						<Row><Col span={24}>
							<span style={{fontSize:24}}>3251</span>
						</Col></Row>
						<Row><Col span={24}>
							<span>当天累计人数(个)</span>
						</Col></Row>
					</Col>
					<Col span={8} style={{border:"1px solid #FFF",backgroundColor:"#78B8F9"}}>
						<Row><Col span={24}>
							<span style={{fontSize:24}}>3251</span>
						</Col></Row>
						<Row><Col span={24}>
							<span>当天累计人数(个)</span>
						</Col></Row>
					</Col>
					<Col span={8} style={{border:"1px solid #FFF",backgroundColor:"#78B8F9"}}>
						<Row><Col span={24}>
							<span style={{fontSize:24}}>3251</span>
						</Col></Row>
						<Row><Col span={24}>
							<span>当天累计人数(个)</span>
						</Col></Row>
					</Col>
				</Row>
				{/*第4行*/}
				<Row style={{marginTop:2}}>
					<Col span={24}>客流分布</Col>
				</Row>
			</div>
		)
	}
}

export default LesseeMonitorAnalysis;
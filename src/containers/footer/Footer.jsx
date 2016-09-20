/**
 * @author LiuLei
 * @date 2016-09-19
 * @copyright 城云科技
 * @function 页面底部公共部分
 */

import React from 'react';
import {Row,Col} from 'antd';
import Image from '../../components/common/Image';
import './Footer.scss';
class Footer extends React.Component{
	render(){
		return(
			<div className='footer'>
				<div className='register'>
					<Image locateTo="footer" imgName="footer_register"/>
					<div><a href=''></a></div>
				</div>
				<div className='about'>
					<Row>
						<Col span={3} offset={3}>
							<ul>
								<li ><a target="_blank" className='title' href='http://www.citycloud.com.cn/about/index.html'>关于城云</a></li>
								<li><a target="_blank" href='http://www.citycloud.com.cn/about/aboutus/index.html'>公司简介</a></li>
								<li><a target="_blank" href='http://www.citycloud.com.cn/about/vision/index.html'>愿景使命</a></li>
								<li><a target="_blank" href='http://www.citycloud.com.cn/about/honor/index.html'>荣誉资质</a></li>
							</ul>
						</Col>
						<Col span={3}>
							<ul>
								<li ><a target="_blank" className='title' href='http://www.citycloud.com.cn/news/cci/index.html'>新闻中心</a></li>
								<li><a target="_blank" href='http://www.citycloud.com.cn/news/media/index.html'>媒体报道</a></li>
								<li><a target="_blank" href='http://www.citycloud.com.cn/news/cci/index.html'>城云快讯</a></li>
							</ul>
						</Col>
						<Col span={3}>
							<ul>
								<li ><a target="_blank" className='title' href='http://www.citycloud.com.cn/cloudplatform/index.html'>云平台产品</a></li>
								<li><a target="_blank" href='http://www.citycloud.com.cn/cloudplatform/iaas/index.html'>城云IaaS云平台管理软件</a></li>
								<li><a target="_blank" href='http://www.citycloud.com.cn/cloudplatform/paas/index.html'>城云PaaS云平台管理软件</a></li>
								<li><a target="_blank" href='http://www.citycloud.com.cn/cloudplatform/privatecloud/index.html'>专有云建设</a></li>
							</ul>
						</Col>
						<Col span={3} offset={1}>
							<ul>
								<li ><a target="_blank" className='title' href='http://www.citycloud.com.cn/joinus/index.html'>加入我们</a></li>
								<li><a target="_blank" href='http://www.citycloud.com.cn/joinus/index.html'>招聘英才</a></li>
								<li><a target="_blank" href='http://www.citycloud.com.cn/joinus/vtp/index.html'>价值观和人才理念</a></li>
								<li><a target="_blank" href='http://www.citycloud.com.cn/joinus/icci/index.html'>印象城云</a></li>
								<li><a target="_blank" href='http://www.citycloud.com.cn/joinus/contactus/index.html'>联系我们</a></li>
							</ul>
						</Col>
						<Col span={3}>
							<ul>
								<li className='title'>与城云互动</li>
								<li>扫描二维码</li>
								<li><Image locateTo="footer" imgName="cci-qr"/></li>
								<li>扫描二维码，关注城云</li>
							</ul>
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}

export default Footer;

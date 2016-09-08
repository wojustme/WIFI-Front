/*
* @Author: LiuLei	
* @Date:   2016-08-22 14:00:56
* @Last Modified by:   Administrator
* @Last Modified time: 2016-09-02 22:23:39
* @Function:Baidu地图组件用于AP分布
*/
import React from 'react'

class BaiDuMap extends React.Component{
    static propTypes={
        points:React.PropTypes.array
    }
	componentDidMount(){
        this.map = new BMap.Map("BaiDuMap");    // 创建Map实例
		this.map.centerAndZoom(new BMap.Point(120.28, 30.208), 13);  // 初始化地图,设置中心点坐标和地图级别
		this.map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
		this.map.setCurrentCity("杭州");          // 设置地图显示的城市 此项是必须设置的
		this.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
		this.map.addControl(new BMap.NavigationControl());// 地图平移缩放控件
		this.map.addControl(new BMap.ScaleControl()); // 比例尺控件
  		this.map.addControl(new BMap.OverviewMapControl()); // 缩略地图控件
		// 2.创建点标注
		let longitude1 = 120.17793;  //河坊街
		let latitude1 =  30.24586; 
		
		let marker1 = new BMap.Marker(new BMap.Point(longitude1, latitude1)); 
		this.map.addOverlay(marker1);
		marker1.enableDragging();//可拖拽
		let infoWindow = new BMap.InfoWindow('hello');
		//3.鼠标事件
		marker1.addEventListener("mouseover",function(e){
			marker1.openInfoWindow(infoWindow);
		});
		marker1.addEventListener("mouseout",function(e){
			marker1.closeInfoWindow(infoWindow);
		});

		//热力图
		let points =[//模拟数据
            {"lng":120.218261,"lat":30.221984,"count":50},
            {"lng":120.223332,"lat":30.216532,"count":51},
            {"lng":120.219787,"lat":30.230658,"count":15},
            {"lng":120.218455,"lat":30.220921,"count":40},
            {"lng":120.218843,"lat":30.215516,"count":100},
            {"lng":120.22546,"lat":30.218503,"count":6},
            {"lng":120.223289,"lat":30.219989,"count":18},
            {"lng":120.218162,"lat":30.215051,"count":80},
            {"lng":120.222039,"lat":30.21782,"count":11},
            {"lng":120.21387,"lat":30.217253,"count":7},
            {"lng":120.225867,"lat":30.218989,"count":8}
        ];
		let heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":20});
		this.map.addOverlay(heatmapOverlay);
		heatmapOverlay.setDataSet({data:points,max:100});
		heatmapOverlay.show();
		
	}
	render(){
		return(
			<div id="BaiDuMap" style={{
	          height:550,
	          width:"80%",
	          marginLeft: "auto",
              marginRight: "auto",
	          textAlign:"center"
	        }}>
				
			</div>
		)
	}
}

export default BaiDuMap;
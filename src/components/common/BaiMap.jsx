/*
* @Author: LiuLei
* @Date:   2016-08-22 14:00:56
* @Last Modified by:   Administrator
* @Function:Baidu地图组件用于AP分布
*/
import React from 'react'

class BaiDuMap extends React.Component{
    static propTypes={
        points:React.PropTypes.array
    }
    //坐标转换完之后的回调函数
    translateCallback(data){
    	if(data.status === 0) {
	        this.map.setCenter(data.points[0]);
	     }
    }
    //地图初始化
    mapInit(centerPoint=[120.28, 30.208]){
    	this.map = new BMap.Map("BaiDuMap");    // 创建Map实例
		this.map.centerAndZoom(new BMap.Point(centerPoint[0], centerPoint[1]), 13); // 初始化地图,设置中心点坐标和地图级别
		this.map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
		this.map.setCurrentCity("杭州");          // 设置地图显示的城市 此项是必须设置的
		this.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
		this.map.addControl(new BMap.NavigationControl());// 地图平移缩放控件
		this.map.addControl(new BMap.ScaleControl()); // 比例尺控件
  		this.map.addControl(new BMap.OverviewMapControl()); // 缩略地图控件
  		//坐标转换，设置中心点
		let center = new BMap.Point(centerPoint[0], centerPoint[1]),
			convertor = new BMap.Convertor(),
        	pointArr = [];
        pointArr.push(center);
        convertor.translate(pointArr, 1, 5, ::this.translateCallback);
    }
	componentDidMount(){
		const {apData} = this.props;
        //1、地图初始化
        this.mapInit();
		// 2.创建点标注
		apData.forEach((data)=>{
			let lng = data.lng,  //经纬度
			    lat =  data.lat,
			    marker = new BMap.Marker(new BMap.Point(lng, lat));
			this.map.addOverlay(marker);
			let infoWindow = new BMap.InfoWindow(`lng:${lng}<br/>lat:${lat}<br/>count:${data.count}`);
			//3.鼠标事件
			marker.addEventListener("mouseover",function(e){
				marker.openInfoWindow(infoWindow);
			});
			marker.addEventListener("mouseout",function(e){
				marker.closeInfoWindow(infoWindow);
			});
		})

		//热力图
		let heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":20});
		this.map.addOverlay(heatmapOverlay);
		heatmapOverlay.setDataSet({data:apData,max:100});
		heatmapOverlay.show();

	}
	render(){
    const { className } = this.props;
		return(
			<div
        id="BaiDuMap"
        style={{
          height: 600,
          width:"80%",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign:"center",
          border:"2px solid #D3D3D3"
        }}
          className={className}
        >
			</div>
		)
	}
}

export default BaiDuMap;

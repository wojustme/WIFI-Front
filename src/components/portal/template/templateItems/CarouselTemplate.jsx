'use strict';
/**
 * src/components/portal/templateItems/CarouselTemplate.jsx
 */
import React, { Component } from 'react';
import Slider from './slider/Slider';
/**
 * @class             滚动显示的Portal模板
 * @author            xurenhe
 * @date              2016-09-22
 * @copyright         城云科技
 * @version           0.0.1
 */
class CarouselTemplate extends Component {

  render() {
    return (
      /* 必须限定死高宽 */
      <div
        style={{
          width:"237px",
          height:"415px"
        }}
      >
        {/* 滚动组件 */}
        <div>
          <Slider
            items={[{
              srcName: '滚屏背景1.png',
              alt: 'images-1'
            },{
              srcName: '滚屏背景2.png',
              alt: 'images-2'
            },{
              srcName: '滚屏背景3.png',
              alt: 'images-3'
            }]}
            speed={1.5}
            delay={3}
            pause={true}
            autoplay={true}
            dots={true}
            arrows={false}
          />
        </div>{/* 滚动组件结束 */}

        {/* 登录form */}
        <div
          style={{
            position:"relative",
            top:"-135px",
            left:"35px",
            width:"200px"
          }}
        >
          <div
            style={{
              marginBottom:"15px"
            }}
          >
            <input
              type="text"
              placeholder="请输入手机号"
              style={{
                width:"160px",
                height:"25px"
              }}
            />
          </div>
          <div>
            <div
              style={{
              marginBottom:"15px"
              }}
            >
              <input
                type="text"
                placeholder="密码"
                style={{
                  left:"35px",
                  width:"60px",
                  height:"25px"
                }}
              />
              <div
                style={{
                  float:"right",
                  marginRight:"41px",
                  width:"80px",
                  height:"25px",
                  textAlign:"center",
                  lineHeight: "25px",
                  color:"rgb(255, 255, 255)",
                  backgroundColor:"rgb(153, 153, 153)",
                  cursor:"pointer"
                }}
              >
                获取密码
              </div>
            </div>
            <div
              style={{
                width:"160px",
                height:"25px",
                textAlign:"center",
                lineHeight: "25px",
                color:"rgb(255, 255, 255)",
                backgroundColor:"rgb(153, 153, 153)",
                cursor:"pointer",
                fontSize:"18px",
                letterSpacing:"10px"
              }}
            >
              登录
            </div>
          </div>
        </div>{/* 登录form结束 */}
      </div>
    );
  }

}

export { CarouselTemplate as default };

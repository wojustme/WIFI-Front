'use strict';
/**
 * src/components/portal/CarouselTemplate.jsx
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
      <div>
        <Slider
          items={[{
            src: require('./images/滚屏背景1.png'),
            alt: 'images-1'
          },{
            src: require('./images/滚屏背景2.png'),
            alt: 'images-2'
          },{
            src: require('./images/滚屏背景3.png'),
            alt: 'images-3'
          }]}
          speed={1.5}
          delay={3}
          pause={true}
          autoplay={true}
          dots={true}
          arrows={false}
        />
      </div>
    );
  }

}

export { CarouselTemplate as default };

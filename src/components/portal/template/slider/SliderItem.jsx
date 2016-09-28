'use strict';
/**
 * src/components/common/SliderItem.jsx
 */
import React, { Component } from 'react';
/**
 * @class             滚动屏中图片组件
 * @author            xurenhe
 * @date              2016-09-27
 * @copyright         城云科技
 * @version           0.0.1
 */
class SliderItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { count, item } = this.props;
    let width = 100 / count + '%';
    return (
      <li className="slider-item" style={{width: "237px"}}>
        <img src={item.src} alt={item.alt} />
      </li>
    );
  }
}
export { SliderItem as default };

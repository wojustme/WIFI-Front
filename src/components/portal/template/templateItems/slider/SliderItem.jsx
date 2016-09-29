'use strict';
/**
 * src/components/common/portal/template/templateItems/SliderItem.jsx
 */
import React, { Component } from 'react';
import { IMG_SERVER } from '../../../../../config/AppConfigure';
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
    let url = IMG_SERVER + "portal/template/" + item.srcName;
    return (
      <li className="slider-item" style={{width: "237px"}}>
        <img src={url} alt={item.alt} />
      </li>
    );
  }
}
export { SliderItem as default };

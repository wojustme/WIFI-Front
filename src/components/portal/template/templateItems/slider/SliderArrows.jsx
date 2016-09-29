'use strict';
/**
 * src/components/common/portal/template/templateItems/SliderArrows.jsx
 */
import React, { Component } from 'react';
/**
 * @class             滚动屏中左右方向组件
 * @author            xurenhe
 * @date              2016-09-27
 * @copyright         城云科技
 * @version           0.0.1
 */
class SliderArrows extends Component {
  constructor(props) {
    super(props);
  }

  handleArrowClick(option) {
    this.props.turn(option);
  }

  render() {
    return (
      <div className="slider-arrows-wrap">
        <span
          className="slider-arrow slider-arrow-left"
          onClick={this.handleArrowClick.bind(this, -1)}>
          &lt;
        </span>
        <span
          className="slider-arrow slider-arrow-right"
          onClick={this.handleArrowClick.bind(this, 1)}>
          &gt;
        </span>
      </div>
    );
  }
}
export { SliderArrows as default };

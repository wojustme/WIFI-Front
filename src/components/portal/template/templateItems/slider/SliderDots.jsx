'use strict';
/**
 * src/components/common/portal/template/templateItems/SliderDots.jsx
 */
import React, { Component } from 'react';
/**
 * @class             滚动屏中点组件
 * @author            xurenhe
 * @date              2016-09-27
 * @copyright         城云科技
 * @version           0.0.1
 */
class SliderDots extends Component {
  constructor(props) {
    super(props);
  }

  handleDotClick(i) {
    var option = i - this.props.nowLocal;
    this.props.turn(option);
  }

  render() {
    let dotNodes = [];
    let { count, nowLocal } = this.props;
    for(let i = 0; i < count; i++) {
      dotNodes[i] = (
        <span
          key={'dot' + i}
          className={"slider-dot" + (i === this.props.nowLocal?" slider-dot-selected":"")}
          onClick={this.handleDotClick.bind(this, i)}>
        </span>
      );
    }
    return (
      <div className="slider-dots-wrap">
        {dotNodes}
      </div>
    );
  }
}
export { SliderDots as default };

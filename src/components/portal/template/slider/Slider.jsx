'use strict';
/**
 * src/components/common/Slider.jsx
 */
import React, { Component } from 'react';
import SliderItem from './SliderItem';
import SliderDots from './SliderDots';
import './slider.scss';
/**
 * @class             滚动屏组件
 * @author            xurenhe
 * @date              2016-09-27
 * @copyright         城云科技
 * @version           0.0.1
 */
class Slider extends Component {
  static defaultProps = {
    speed: 1,
    delay: 2,
    pause: true,
    autoplay: true,
    dots: true,
    items: []
  }
  constructor(props) {
    super(props);
    this.state = {
      nowLocal: 0
    };
  }
  turn(n) {
    var _n = this.state.nowLocal + n;
    if(_n < 0) {
      _n = _n + this.props.items.length;
    }
    if(_n >= this.props.items.length) {
      _n = _n - this.props.items.length;
    }
    this.setState({nowLocal: _n});
  }
  goPlay() {
    if(this.props.autoplay) {
      this.autoPlayFlag = setInterval(() => {
        this.turn(1);
      }, this.props.delay * 1000);
    }
  }
  componentDidMount() {
    this.goPlay();
  }
  render() {
    const { nowLocal } = this.state;
    // 获得轮播图片个数
    let count = this.props.items.length;
    // map出每一个节点项
    let itemNodes = this.props.items.map((item, idx) => {
      return <SliderItem item={item} count={count} key={'item' + idx} />;
    });

    return (
      <div
        className="slider"
      >
        <ul
          style={{
            left: -100 * nowLocal + "%",
            transitionDuration: this.props.speed + "s",
            width: this.props.items.length * 100 + "%"
          }}
        >
          {itemNodes}
        </ul>
      </div>
    );
  }
}

export { Slider as default };
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
  static autoPlayFlag = null

  constructor(props) {
    super(props);
    this.state = {
      nowLocal: 0
    };
  }

  // 向前向后多少,通过SliderArrows传入
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

  // 开始自动轮播
  goPlay() {
    if(this.props.autoplay) {
      this.autoPlayFlag = setInterval(() => {
        this.turn(1);
      }, this.props.delay * 1000);
    }
  }

  // 暂停自动轮播
  pausePlay() {
    clearInterval(this.autoPlayFlag);
  }

  componentDidMount() {
    this.goPlay();
  }
  componentWillUnmount() {
    clearInterval(this.autoPlayFlag);
  }
  render() {
    let count = this.props.items.length;

    let itemNodes = this.props.items.map((item, idx) => {
      return <SliderItem item={item} count={count} key={'item' + idx} />;
    });


    let dotsNode = <SliderDots turn={this.turn.bind(this)} count={count} nowLocal={this.state.nowLocal} />;

    return (
      <div
        className="slider"
        onMouseOver={this.props.pause?this.pausePlay.bind(this):null} onMouseOut={this.props.pause?this.goPlay.bind(this):null}
      >
        <ul
          style={{
            left: -100 * this.state.nowLocal + "%",
            transitionDuration: this.props.speed + "s",
            width: this.props.items.length * 100 + "%"
          }}
        >
          {itemNodes}
        </ul>
        {this.props.dots?dotsNode:null}
      </div>
      );
  }
}

export { Slider as default };

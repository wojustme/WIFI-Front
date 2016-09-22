'use strict';
/**
 * src/components/common/DivSection.jsx
 */
import React, { Component } from 'react';
import Scroll, { Helpers } from 'react-scroll';

/**
 * @class             子区域模块组件
 * @author            xurenhe
 * @date              2016-09-08
 * @copyright         城云科技
 * @version           0.0.1
 */
class DivSection extends Component {
  render() {
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
}
module.exports = Helpers.Element(DivSection);

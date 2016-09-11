'use strict';
/**
 * src/components/common/ImgLink.jsx
 */
import React from 'react';
import Scroll, { Helpers } from 'react-scroll';

/**
 * @class             二级图片导航组件
 * @author            xurenhe
 * @date              2016-09-08
 * @copyright         城云科技
 * @version           0.0.1
 */
class ImgLink extends React.Component {
  render() {
    const { className, children } = this.props;
    let items = React.Children.map(children, (child, idx) => {
      return className
       ? React.cloneElement(child,{
           isSelected: true
         })
       : React.cloneElement(child,{
           isSelected: false
         })
    })
    return React.DOM.a(this.props, items);
  }
}

module.exports = Helpers.Scroll(ImgLink);

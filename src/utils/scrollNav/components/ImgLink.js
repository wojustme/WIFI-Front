"use strict";

var React = require('react');
var Helpers = require('../mixins/Helpers');

var ImgLink = React.createClass({
  render: function () {
    const { className, children } = this.props;
    let items = React.Children.map(children, (child, idx) => {
      if(className){
        return React.cloneElement(child,{
          isSelected: true
        })
      }else{
        return React.cloneElement(child,{
          isSelected: false
        })
      }
    })
    return React.DOM.a(this.props, items);
  }
});

module.exports = Helpers.Scroll(ImgLink);

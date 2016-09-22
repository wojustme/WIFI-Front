'use strict';
/**
 * src/components/common/AImg.jsx
 */
import React, { Component } from 'react';
import { IMG_SERVER } from '../../config/AppConfigure.jsx'
/**
 * @class             a链接中图片组件
 * @author            xurenhe
 * @date              2016-09-11
 * @copyright         城云科技
 * @version           0.0.1
 */
class AImg extends Component {
  constructor(props){
    super(props);
    let url = IMG_SERVER + 'common/';
    this.state = {
      actionTypes: {
        "edit": url + "编辑" + ".png"
      }
    };
  }
  render() {
    const { actionTypes } = this.state;
    const { actionType, dataId } = this.props;
    return (
      <a
        onClick={
          e => this.props.doAction(actionType, dataId)
        }
      >
        <img
          src={actionTypes[actionType]}
        />
      </a>

    );
  }
}

export { AImg as default };

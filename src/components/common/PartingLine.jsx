'use strict';
/**
 * src/components/common/PartingLine.jsx
 */
import React, { Component } from 'react';
import Image from './Image';
/**
 * @class             分割线组件
 * @author            xurenhe
 * @date              2016-09-20
 * @copyright         城云科技
 * @version           0.0.1
 */
class PartingLine extends Component {
  render() {
    const { useImgSource } = this.props;
    const { locateTo, imgName } = useImgSource;
    return (
      <div>
        <Image locateTo={locateTo} imgName={imgName}/>
        <div style={{height:"60px"}} />
      </div>
    );
  }
}

export { PartingLine as default };

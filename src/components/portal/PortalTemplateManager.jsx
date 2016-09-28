'use strict';
/**
 * src/components/portal/PortalTemplateManager.jsx
 */
import React, { Component } from 'react';
import CarouselTemplate from './template/CarouselTemplate';
import PartingLine from '../common/PartingLine';
/**
 * @class             Portal管理第1屏的模板管理
 * @author            xurenhe
 * @date              2016-09-22
 * @copyright         城云科技
 * @version           0.0.1
 */
class PortalTemplateManager extends Component {

  render() {
    return (
      <div
        style={{
          height:650
        }}
      >
        <PartingLine
          useImgSource={{
            locateTo: "portal",
            imgName: "模板管理分割线"
          }}
        />
        <CarouselTemplate />
      </div>
    );
  }

}

export { PortalTemplateManager as default };

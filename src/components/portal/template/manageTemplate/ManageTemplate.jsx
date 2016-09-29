'use strict';
/**
 * src/components/portal/manageTemplate/ManageTemplate.jsx
 */
import React, { Component } from 'react';
import CarouselTemplate from '../templateItems/CarouselTemplate';
/**
 * @class             Portal管理第1屏的模板管理----模板管理子模块
 * @author            xurenhe
 * @date              2016-09-29
 * @copyright         城云科技
 * @version           0.0.1
 */
class ManageTemplate extends Component {

  render() {
    return (
        <CarouselTemplate />
    );
  }
}

export { ManageTemplate as default };

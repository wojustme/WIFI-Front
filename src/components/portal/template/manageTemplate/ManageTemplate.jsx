'use strict';
/**
 * src/components/portal/manageTemplate/ManageTemplate.jsx
 */
import React, { Component } from 'react';
import CarouselTemplate from '../templateItems/CarouselTemplate';
import TemplateTable from './TemplateTable';
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
      <div>
        <div
          style={{
            float: "left",
            width: "20%",
            height: "100%"
          }}
        >
          <CarouselTemplate />
        </div>
        <div
          style={{
            float: "right",
            width: "78%",
            height: "100%"
          }}
        >
          <TemplateTable />
        </div>
      </div>
    );
  }
}

export { ManageTemplate as default };

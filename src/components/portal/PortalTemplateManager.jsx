'use strict';
/**
 * src/components/portal/PortalTemplateManager.jsx
 */
import React, { Component } from 'react';
import {Link} from 'react-router';
import PartingLine from '../common/PartingLine';
import './template/TemplateManager.scss';
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
        <div
          style={{
            position:"relative",
            top:"0px",
            left:"11%"
          }}
        >
          {/* 模板管理导航 */}
          <div className="template-manager-menu">
            <ul>
              <li><Link activeClassName="active" to='/portal/manageTemplate'>模板管理</Link></li>
              <li>|</li>
              <li><Link to='/portal/chooseTemplate'>选择模板</Link></li>
              <li>|</li>
              <li><Link to='/portal/editTemplate'>编辑模板</Link></li>
            </ul>
          </div>{/* 模板管理导航结束 */}
          <div style={{height:"30px"}}/>
          {/* 导航链接组件 */}
          { this.props.children }
        </div>
      </div>
    );
  }
}

export { PortalTemplateManager as default };

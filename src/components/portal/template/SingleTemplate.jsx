'use strict';
/**
 * src/components/portal/SingleTemplate.jsx
 */
import React, { Component } from 'react';
/**
 * @class             单屏显示的Portal模板
 * @author            xurenhe
 * @date              2016-09-22
 * @copyright         城云科技
 * @version           0.0.1
 */
class SingleTemplate extends Component {

  render() {
    return (
      <div>
      <div>
        <img
          src="http://localhost:9992/img/portal/一键登录背景.png"
        />
        </div>
        <div
        style={{
          position:"relative",
          top:"-400px"
        }}
        >1234</div>
      </div>
    );
  }

}

export { SingleTemplate as default };

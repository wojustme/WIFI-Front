'use strict';
/**
 * src/containers/App.jsx
 */
import React, { Component } from 'react';
/**
 * @class 项目最底层容器
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
class App extends Component {
  render() {
    return (
      <div
        style={{
          position:"absolute",
          top:"0px",
          left:"0px"
        }}
      >
        { this.props.children }
      </div>
    );
  }
}

export { App as default };

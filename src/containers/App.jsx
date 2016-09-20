'use strict';
/**
 * src/containers/App.jsx
 */
import React from 'react';
import 'antd/dist/antd.min.css';
import './OverWriteAntdStyle.scss';
/**
 * @class 项目最底层容器
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
import Footer from '../components/common/Footer';
class App extends React.Component {
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
        {/*footer*/}
        <Footer/>
      </div>
    );
  }
}

export { App as default };

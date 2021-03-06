'use strict';
/**
 * src/containers/App.jsx
 */
import React from 'react';
import Header from './header/AppHeader';
import Footer from './footer/Footer';
import 'antd/dist/antd.min.css';
import './OverWriteAntdStyle.scss';
import '../style/scss/app.scss';
/**
 * @class 项目最底层容器
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
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
        <Header />
        { this.props.children }
        {/*footer*/}
        <Footer/>
      </div>
    );
  }
}

export { App as default };

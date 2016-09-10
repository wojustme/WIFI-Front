'use strict';
/**
 * src/components/lessee/ApGroupContainer.jsx
 */
import React from 'react';
import ApGroupLabel from './ApGroupLabel';
/**
 * @class             ap分组信息容器
 * @author            xurenhe
 * @date              2016-09-09
 * @copyright         城云科技
 * @version           0.0.1
 */
class ApGroupContainer extends React.Component {
  render() {
    return (
      <div
        style={{
          height: "56px",
          marginBottom: "1px"
        }}
      >
        <div
          style={{
            float: "left",
            width: "17%",
            height: "100%",
            backgroundColor: "rgb(77, 77, 77)",
            color: "rgb(206, 206, 206)",
            fontSize: "20px",
            lineHeight:"56px"
          }}
        >
          AP分组
        </div>
        <div
          style={{
            float: "left",
            width: "2.5px",
            height: "100%"
          }}
        >
        </div>
        <ApGroupLabel />
      </div>
    );
  }
}

export { ApGroupContainer as default };

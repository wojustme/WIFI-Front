'use strict';
/**
 * src/components/lessee/ApGroupItem.jsx
 */
import React from 'react';
/**
 * @class             ap分组信息中每个展示项
 * @author            xurenhe
 * @date              2016-09-09
 * @copyright         城云科技
 * @version           0.0.1
 */
class ApGroupItem extends React.Component {
  render() {
    const { itemName } = this.props;
    return (
      <div
        style={{
          width: "9%",
          fontSize: "16px",
          float:"left",
          lineHeight:"56px",
          backgroundColor: "rgb(96, 96, 96)"
        }}
      >
        {itemName}
      </div>
    );
  }
}

export { ApGroupItem as default };

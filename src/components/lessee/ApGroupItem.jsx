'use strict';
/**
 * src/components/lessee/ApGroupItem.jsx
 */
import React from 'react';
import Image from '../common/Image';
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
          width: "15%",
          fontSize: "16px",
          float:"left",
          lineHeight:"56px"
        }}
      >
        {itemName}
      </div>
    );
  }
}

export { ApGroupItem as default };

'use strict';
/**
 * src/components/lessee/ApGroupItem.jsx
 */
import React, { Component } from 'react';

/**
 * @class             ap分组信息中每个展示项
 * @author            xurenhe
 * @date              2016-09-12
 * @copyright         城云科技
 * @version           0.0.1
 */
class ApGroupItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { itemName, isSelected } = this.props;
    let className = isSelected ? "apgroup-item apgroup-item-selected" : "apgroup-item";
    return (
      <div
        className={className}
        onClick={(e)=>{this.props.clickItemByName(e, itemName)}}
      >
        {itemName}
      </div>
    );
  }
}

export { ApGroupItem as default };

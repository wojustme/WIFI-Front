'use strict';
/**
 * src/components/lessee/ApGroupContainer.jsx
 */
import React from 'react';
import ApGroupItem from './ApGroupItem';
/**
 * @class             ap分组信息容器
 * @author            xurenhe
 * @date              2016-09-12
 * @copyright         城云科技
 * @version           0.0.1
 */
class ApGroupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [ "SC-DJX01", "SC-DJX02", "SC-DJX03", "SC-DJX04", "SC-DJX05",
            "SC-DJX06", "SC-DJX07", "SC-DJX08", "SC-DJX09", "SC-DJX10",
            "SC-DJX11", "SC-DJX12", "SC-DJX13", "SC-DJX14", "SC-DJX15",
            "SC-DJX16", "SC-DJX17", "SC-DJX18", "SC-DJX19", "SC-DJX20" ],
      selectData: "SC-DJX01"
    }
  }
  render() {
    const { data, selectData } = this.state;
    let apGroupItems = data.map(
      elem => {
        return elem === selectData
          ? <ApGroupItem
              key={elem}
              itemName={elem}
              isSelected={true}
            />
          : <ApGroupItem
              key={elem}
              itemName={elem}
              clickItemByName={
                (e, itemName) => {
                  this.setState({
                    selectData: itemName
                  })
                }
              }
            />;
      }
    );
    return (
      <div>
        <div
          style={{
            height: "50px",
            backgroundColor: "rgb(149, 149, 149)",
            color: "rgb(206, 206, 206)",
            fontSize: "24px",
            lineHeight:"50px"
          }}
        >
          AP分组
        </div>
        <div
          style={{
            width: "100%",
            height: "540px",
            overflowY: "auto"
          }}
        >
          {apGroupItems}
        </div>
      </div>
    );
  }
}

export { ApGroupContainer as default };

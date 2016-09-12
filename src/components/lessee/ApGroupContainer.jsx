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
    const { apGroupList } = this.props;
    let selectData = apGroupList[0];
    this.state = {
      apGroupList: apGroupList,
      selectData: selectData
    }
  }
  render() {
    const { apGroupList, selectData } = this.state;
    let apGroupItems = apGroupList.map(
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

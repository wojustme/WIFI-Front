'use strict';
/**
 * src/components/common/InwardNav.jsx
 */
import React from 'react';
import Image from './Image';
import ImgLink from './ImgLink';
import Scroll, { scroller } from 'react-scroll';
import { Affix } from 'antd';
/**
 * @class             二级导航组件
 * @author            xurenhe
 * @date              2016-08-28
 * @copyright         城云科技
 * @version           0.0.1
 */
class InwardNav extends React.Component {

  render() {
    const { baseLocateTo, imgNavBG, navItems } = this.props;
    let items = navItems.map(
      elem => {
        return (
          <ImgLink
            key={elem}
            to={elem}
            spy={true}
            onClick={
              (e)=>{
                scroller.scrollTo(elem, {
                  smooth: true,
                })
              }
            }
          >
            <Image locateTo={baseLocateTo} imgName={elem} cursorStyle="pointer" />
          </ImgLink>
        );
      }
    );
    return (
      <div
        style={{
          position:"absolute",
          left:"0px",
          top:"90px",
          width: "1350px"
        }}
      >
        <Affix>
          <Image
            locateTo={baseLocateTo}
            imgName={imgNavBG}
          />
          <div
            style={{
              position:"absolute",
              right:"15%",
              top:"0px",
              zIndex: 1
            }}
          >
            {items}
          </div>
        </Affix>
      </div>
    );
  }
}
export { InwardNav as default };

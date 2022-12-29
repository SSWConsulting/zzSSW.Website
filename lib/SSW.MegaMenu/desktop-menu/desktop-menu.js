import React from 'react';
import {menuDrop, hiddenSm, hiddenXs, ignore, Menu} from './desktop-menu.module.css';
import cs from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import MenuPanel from '../menu-panel/menu-panel'; 

class DesktopMenu extends React.Component {
  // getRootUrl() {
  //   if (this.props.prefix && typeof window !== 'undefined') {
  //     return (
  //       window.location.origin
  //         ? window.location.origin + '/'
  //         : window.location.protocol + '/' + window.location.host + '/') + this.props.prefix + '/';
  //   }
  //   return '';
  // }

  render() {
    return (
      <div className={cs(menuDrop, hiddenXs, hiddenSm)}>
        <ul>
          {this.props.menuModel && this.props.menuModel.menuItems.map((item, index) => {
            return (
              <li key={index}>
                {!item.children && (
                  <a
                    href={item.navigateUrl ? item.navigateUrl : null}
                    className={cs(ignore, 'unstyled')}>
                    {item.text}
                  </a>
                )}{' '}
                {item.children && (
                  <>
                    <a className={cs(ignore, 'unstyled')}>
                      {item.text} <FontAwesomeIcon icon={faAngleDown} />
                    </a>
                    <div className={Menu}>
                        <MenuPanel item={item} prefix={this.props.prefix}/> 
                    </div>                            
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};
export default DesktopMenu;

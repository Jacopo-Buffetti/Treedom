import React from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import '../Header/Header.scss'

const  Header = () => {

    return (
      <div className={"menu"}>
          <header className="tr-navbar-header">
              <div className="tr-navbar-header__left">
                  <a href="/it/" className="tr-logo">
                      <img src={require('../../assets/image/treedom.png')} />
                  </a>
              </div>
          </header>
      </div>
    );
}
export default compose(
  withRouter
)(Header);

import React from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import '../Header/Header.scss'

const  Header = () => {

    return (
        <div className={"menu"}>

        </div>
    );
}
export default compose(
    withRouter
)(Header);

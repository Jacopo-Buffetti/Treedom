import React from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import './Footer.scss'

const Footer = () => {
    return (
        <div className={"footer"}>
            <div className={"container"}>
            </div>
        </div>
    )
}
export default compose(
    withRouter
)(Footer);

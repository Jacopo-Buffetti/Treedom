import React from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import './Footer.scss'

const Footer = () => {
    return (
        <div className={"footer"}>
            <div className={"container"}>
                <p> <i className="far fa-copyright"></i> all rights are reserved and are to be considered the property of Jacopo Buffetti</p>
            </div>
        </div>
    )
}
export default compose(
    withRouter
)(Footer);

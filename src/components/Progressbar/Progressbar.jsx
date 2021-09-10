import React from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import './Progressbar.scss'
import PropTypes from "prop-types";

const Progressbar = (props) => {
  const {
    step
  } = props;
  return (
    <ul id="progressbar">
      <li className={step > 0 ? 'active' : ''}>Dettagli personali</li>
      <li className={step > 1 ? 'active' : ''}>Dettagli indirizzo</li>
      <li className={step > 2 ? 'active' : ''}>Dettagli account</li>
    </ul>
  )
}

Progressbar.propTypes = {
  step: PropTypes.number,
};

Progressbar.defaultProps = {
  step: 0,
};

export default compose(
  withRouter
)(Progressbar);

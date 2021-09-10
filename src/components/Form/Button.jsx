import React from 'react';
import { compose } from 'redux';
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";

const Button = (props) => {
  const {
    className,
    label,
    onClick,
    type,
  } = props;

  console.log(label)


  return (
    <>
      <button
        className={className}
        onClick={onClick}
        type={type}
      >
        {label}
      </button>
    </>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default compose(
  withRouter,
)(Button);

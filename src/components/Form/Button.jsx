import React from 'react';
import { compose } from 'redux';
import {withRouter} from "react-router-dom";

const Button = (props) => {
  const {
    className,
    errorValue,
    label,
    onClick,
    name,
    type,
    value,
  } = props;

  console.log(label)


  return (
    <>
      <button
        className={className}
        onClick={onClick}
        name={name}
        type={type}
        value={value}
      >
        {label}
      </button>
    </>
)
}

export default compose(
  withRouter,
)(Button);

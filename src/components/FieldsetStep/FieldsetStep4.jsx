import React from 'react';
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import get from "lodash/get";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const FieldsetStep4 = (props) => {
  const {
    formValue,
  } = props;
  return (
    <fieldset className="fieldsetStep">
      <h2 className="fs-title">Congratulazioni</h2>
      <h3 className="fs-subtitle">Le tue credenziali</h3>
      {
        Object.keys(formValue).map((key, i) => (
          <p key={i.toString()}><b>{key}</b>: <span>{formValue[key]}</span></p>
        ))
      }
    </fieldset>
  )
}

const mapStateToProps = (state) => ({
  formValue: get(state, 'form.value', ''),
});

FieldsetStep4.propTypes = {
  formValue: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
  connect(mapStateToProps, null),
)(FieldsetStep4);

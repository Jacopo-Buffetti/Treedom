import React, { useState } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import get from 'lodash/get';
import { setValue } from '../../actions/FormDataAction';
import PropTypes from "prop-types";

const Select = (props) => {
  const {
    errorValue,
    handleSetValue,
    formValue,
    name,
    onChange,
    optionValue,
    placeholder,
  } = props;
  const [formatValue, setFormatValue] = useState('');

  const changeValue = (val) => {
    console.log(val)
    setFormatValue(val);
    handleSetValue({
      ...formValue,
      [name]: val,
    });
    if (onChange) {
      onChange(val);
    }
  };

  console.log(optionValue)

  return (
    <>
      <select
        onChange={(e) => {changeValue(e.target.value);}}
        defaultValue={formatValue}

      >
        <option value="" disabled >{placeholder}</option>
        {optionValue.map((reg, i )=>
          <option key={i.toString()} value={reg}>{reg.toUpperCase()}</option>
        )};
      </select>
      {
        errorValue[name] && (
          <p className="error-field">{errorValue[name]}</p>
        )
      }
    </>
  )
}

const mapStateToProps = (state) => ({
  errorValue: get(state, 'form.error', ''),
  formValue: get(state, 'form.value', ''),
});

const mapDispatchToProps = (dispatch) => ({
  handleSetValue: bindActionCreators(setValue, dispatch),
});

Select.propTypes = {
  errorValue: PropTypes.object,
  handleSetValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  formValue: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  optionLabelDefault: PropTypes.string,
  optionValue: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Select.defaultProps = {
  placeholder: '',
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Select);

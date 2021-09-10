import React, { useState } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import get from 'lodash/get';
import { setValue } from '../../actions/FormDataAction';

const Select = (props) => {
  const {
    handleSetValue,
    formValue,
    name,
    onChange,
    optionLabelDefault,
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
        placeholder={placeholder}
        defaultValue={formatValue}

      >
        <option value="" disabled >{optionLabelDefault}</option>
        {optionValue.map((reg, i )=>
          <option key={i.toString()} value={reg}>{reg.toUpperCase()}</option>
        )};
      </select>
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

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Select);

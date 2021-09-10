import React, { useEffect, useState } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import get from 'lodash/get';
import { setValue } from '../../actions/FormDataAction';

const Input = (props) => {
  const {
    errorValue,
    handleSetValue,
    name,
    type,
    formValue,
    placeholder,
  } = props;
  const [formatValue, setFormatValue] = useState('');

  useEffect(() => {
    setFormatValue(formValue[name] || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValue[name]])

  const changeValue = (e) => {
    setFormatValue(e.target.value);
    handleSetValue({
      ...formValue,
      [name]: e.target.value,
    });
  };

  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={formatValue}
        onChange={changeValue}
      />
      {
        errorValue[name] && (
          <p>{errorValue[name]}</p>
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

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Input);

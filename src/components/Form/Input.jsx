import React, { useEffect, useState } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";
import get from 'lodash/get';
import { setValue } from '../../actions/FormDataAction';

const FieldsetStep1 = (props) => {
  const {
    handleSetValue,
    name,
    type,
    formValue,
  } = props;

  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(formValue[name]);
  }, [formValue[name]])

  const changeValue = (e) => {
    handleSetValue({
      ...formValue,
      [name]: e.target.value,
    });
    setValue(e.target.value);
  };



  return (
    <input
      type={type}
      name={name}
      placeholder="Nome"
      value={value}
      onChange={changeValue}
    />
  )
}

const mapStateToProps = (state) => ({
  formValue: get(state, 'form.value', ''),
});

const mapDispatchToProps = (dispatch) => ({
  handleSetValue: bindActionCreators(setValue, dispatch),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(FieldsetStep1);

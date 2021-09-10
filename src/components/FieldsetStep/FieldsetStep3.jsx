import React from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Input from "../Form/Input";

const FieldsetStep3 = () => {
  return (
    <fieldset className="fieldsetStep">
      <h2 className="fs-title">Crea il tuo account</h2>
      <h3 className="fs-subtitle">Inserisci le tue credenziali</h3>
      <Input type="email" name="email" placeholder="Email"/>
      <Input type="password" name="pass" placeholder="Password"/>
    </fieldset>
  )
}
export default compose(
  withRouter
)(FieldsetStep3);
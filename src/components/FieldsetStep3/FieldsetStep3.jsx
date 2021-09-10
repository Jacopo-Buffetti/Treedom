import React from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Input from "../Form/Input";
import Button from "../Form/Button";

const FieldsetStep3 = () => {
  return (
    <fieldset className="fieldsetStep">
      <h2 className="fs-title">Crea il tuo account</h2>
      <h3 className="fs-subtitle">Inserisci le tue credenziali</h3>
      <Input type="email" name="email" placeholder="Email"/>
      <Input type="password" name="pass" placeholder="Password"/>
      <Input type="password" name="cpass" placeholder="Confirm Password"/>
      <div className="container-button">
        <Button type="button" name="avanti" className="button-previous" value="Previous" label="Indietro" />
        <Button type="button" name="avanti" className="button-next" value="Next" label="Invia" />
      </div>
    </fieldset>
  )
}
export default compose(
  withRouter
)(FieldsetStep3);
import React from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";

const FieldsetStep3 = () => {
  return (
    <fieldset className="fieldsetStep">
      <h2 className="fs-title">Crea il tuo account</h2>
      <h3 className="fs-subtitle">Inserisci le tue credenziali</h3>
      <input type="email" name="email" placeholder="Email"/>
      <input type="password" name="pass" placeholder="Password"/>
      <input type="password" name="cpass" placeholder="Confirm Password"/>
      <div className="container-button">
        <button type="button" name="avanti" className="button-previous" value="Previous">Indietro</button>
        <button type="button" name="avanti" className="button-next" value="Next">Invia</button>
      </div>
    </fieldset>
  )
}
export default compose(
  withRouter
)(FieldsetStep3);
import React from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Input from '../Form/Input';

const FieldsetStep1 = () => {
  return (
    <fieldset className="fieldsetStep">
      <h2 className="fs-title">Dettagli personali</h2>
      <h3 className="fs-subtitle">Raccontaci qualcosa in più di te</h3>
      <Input type="text" name="nome" placeholder="Nome"/>
      <Input type="text" name="cognome" placeholder="Cognome"/>
      <Input type="text" name="cf" placeholder="Codice fiscale"/>
      <Input type="tel" name="telefono" placeholder="Telefono"/>
      <div className="container-button">
        <button type="button" name="avanti" className="button-next" value="Next">Avanti</button>
      </div>
    </fieldset>
  )
}
export default compose(
  withRouter
)(FieldsetStep1);

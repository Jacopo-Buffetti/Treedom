import React from 'react';
import {bindActionCreators, compose} from "redux";
import {withRouter} from "react-router-dom";
import { sendDataFetchpromise } from "../../actions/FormDataAction";
import Input from '../Form/Input';
import get from "lodash/get";
import {connect} from "react-redux";
import Button from "../Form/Button";

const FieldsetStep1 = (props) => {
  const {
    formValue,
    handleSendFetchPromise,
  } = props;

  const sendForm = () => {
    handleSendFetchPromise({
      data: formValue,
    })
  }

  return (
    <fieldset className="fieldsetStep">
      <h2 className="fs-title">Dettagli personali</h2>
      <h3 className="fs-subtitle">Raccontaci qualcosa in più di te</h3>
      <Input type="text" name="nome" placeholder="Nome"/>
      <Input type="text" name="cognome" placeholder="Cognome"/>
      <Input type="text" name="cf" placeholder="Codice fiscale"/>
      <Input type="tel" name="telefono" placeholder="Telefono"/>
      <div className="container-button">
        <Button
          className="button-next"
          label="Avanti"
          name="avanti"
          onClick={sendForm}
          type="button"
          value="Next"
        />
      </div>
    </fieldset>
  )
}

const mapStateToProps = (state) => ({
  formValue: get(state, 'form.value', ''),
});

const mapDispatchToProps = (dispatch) => ({
  handleSendFetchPromise: bindActionCreators(sendDataFetchpromise, dispatch),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(FieldsetStep1);


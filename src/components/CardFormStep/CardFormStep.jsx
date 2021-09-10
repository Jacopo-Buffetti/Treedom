import React, {useEffect, useState} from 'react';
import {bindActionCreators, compose} from "redux";
import {withRouter} from "react-router-dom";
import './CardFormStep.scss'
import Progressbar from "../Progressbar/Progressbar";
import FieldsetStep1 from "../FieldsetStep/FieldsetStep1";
import FieldsetStep2 from "../FieldsetStep/FieldsetStep2";
import FieldsetStep3 from "../FieldsetStep/FieldsetStep3";
import FieldsetStep4 from "../FieldsetStep/FieldsetStep4";
import Button from "../Form/Button";
import get from "lodash/get";
import PropTypes from 'prop-types';
import {sendDataFetchpromise, setStepForm} from "../../actions/FormDataAction";
import {connect} from "react-redux";

const CardFormStep = (props) => {
  const {
    formValue,
    stepForm,
    handleSendFetchPromise,
    handleSetStepForm,
  } = props;
  console.log('porco dio', formValue)
  // STATE
  const [step, setStep] = useState(FieldsetStep1);

  useEffect(() => {
    switch (stepForm) {
      case 2: setStep(FieldsetStep2); break;
      case 3: setStep(FieldsetStep3); break;
      case 4: setStep(FieldsetStep4); break;
      default: setStep(FieldsetStep1); break;
    }
  }, [stepForm])

  const sendForm = () => {
    handleSendFetchPromise({
      data: formValue,
      step: stepForm,
    })
  }

  const backFunction = () => {
    handleSetStepForm(stepForm - 1);
  }

  return (
    <div className={`main-home main-page`}>
      {/*MultiStep Form*/}
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <form id="msform">
            {/*progressbar*/}
            {
              stepForm < 4 && (
                <Progressbar step={stepForm} />
              )
            }
            <div className="card-container">
              {step}
            </div>
            {
              stepForm < 4 && (
                <div className="container-button" >
                  {
                    stepForm > 1 && (
                      <Button
                        className="button-previous"
                        label="Indietro"
                        onClick={backFunction}
                        type="button"
                      />
                    )
                  }
                  <Button
                    className="button-next"
                    label={stepForm === 3 ? 'Salva' : 'Avanti'}
                    onClick={sendForm}
                    type="button"
                  />
                </div>
              )
            }
          </form>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  formValue: get(state, 'form.value', ''),
  stepForm: get(state, 'form.stepForm', 1),
});

const mapDispatchToProps = (dispatch) => ({
  handleSendFetchPromise: bindActionCreators(sendDataFetchpromise, dispatch),
  handleSetStepForm: bindActionCreators(setStepForm, dispatch),
});

CardFormStep.propTypes = {
  formValue: PropTypes.object.isRequired,
  stepForm: PropTypes.number.isRequired,
  handleSendFetchPromise: PropTypes.func.isRequired,
  handleSetStepForm: PropTypes.func.isRequired
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(CardFormStep);

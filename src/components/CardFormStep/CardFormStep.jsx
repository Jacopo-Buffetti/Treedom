import React from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import './CardFormStep.scss'
import Progressbar from "../Progressbar/Progressbar";
import FieldsetStep1 from "../FieldsetStep1/FieldsetStep1";
import FieldsetStep2 from "../FieldsetStep2/FieldsetStep2";
import FieldsetStep3 from "../FieldsetStep3/FieldsetStep3";

const CardFormStep = () => {

  let step1 = true;
  let step2 = false;
  let step3 = false;

  return (
    <div className={`main-home main-page`}>
      {/*MultiStep Form*/}
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <form id="msform">
            {/*progressbar*/}
            <Progressbar />
            <div className="card-container">
              {
                (step1) &&(
                  <FieldsetStep1 />
                )}
              {
                (step2) &&(
                  <FieldsetStep2 />
                )}
              {
                (step3) &&(
                  <FieldsetStep3 />
                )}
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
export default compose(
  withRouter
)(CardFormStep);

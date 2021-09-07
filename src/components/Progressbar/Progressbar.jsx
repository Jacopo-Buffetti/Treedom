import React from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import './Progressbar.scss'

const Progressbar = () => {
  return (
    <ul id="progressbar">
      <li className="active">Dettagli personali</li>
      <li>Dettagli indirizzo</li>
      <li>Dettagli account</li>
    </ul>
  )
}
export default compose(
  withRouter
)(Progressbar);

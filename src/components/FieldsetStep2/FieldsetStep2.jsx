import React, {useEffect, useState} from 'react';
import {bindActionCreators, compose} from "redux";
import {withRouter} from "react-router-dom";
import _ from "lodash";
import get from "lodash/get";
import {getDataComuni, getDataProvince, getDataRegioni} from "../../actions/TreedomDataAction";
import {connect} from "react-redux";

const FieldsetStep2 = (props) => {
  const {
    handleGetDataComuni,
    handleGetDataRegioni,
    handleGetDataProvince,
    provinceData,
    regioniData,
    comuniData,
  } = props;

  const [regioneValue, setRegioneValue] = useState('');
  const [provinceValue, setProvinceValue] = useState('');
  const [comuniValue, setComuniValue] = useState('');

  useEffect(() => {
    handleGetDataRegioni();
    handleGetDataProvince();
    handleGetDataComuni();
  }, []);


  const changeRegioni = (val) => {
    setRegioneValue(val);
    const data = {
      regioneValue: val,
    };
    handleGetDataProvince(data);
  }

  const changeProvince = (val) => {
    setProvinceValue(val);
    const data = {
      provinceValue: val,
    };
    handleGetDataComuni(data);
  }

  const changeComuni = (val) => {
    setComuniValue(val);
    const data = {
      comuniValue: val,
    };
    handleGetDataComuni(data);
  }


  return (
    <fieldset className="fieldsetStep">
      <h2 className="fs-title">Informazioni indirizzo</h2>
      <h3 className="fs-subtitle">Dicci dove abiti</h3>
      <select
        onChange={(e) => {changeRegioni(e.target.value);}}
        placeholder={'Seleziona Regione...'}
        defaultValue={regioneValue}

      >
        <option value="" disabled >Regione...</option>
        {regioniData.map((reg, i )=>
          <option key={i.toString()} value={reg.key}>{reg.toUpperCase()}</option>
        )};
      </select>
      <select
        onChange={(e) => {changeProvince(e.target.value);}}
        placeholder={'Seleziona Provincia...'}
        defaultValue={provinceValue}

      >
        <option value="" disabled>Provincia</option>

        {!_.isEmpty(provinceData) &&
        provinceData.map((prov, i) =>
          <option key={i.toString()} value={prov.nome}>{prov.nome.toUpperCase()}</option>
        )}
      </select>
      <select
        onChange={(e) => {changeComuni(e.target.value);}}
        placeholder={'Seleziona Comune...'}
        defaultValue={comuniValue}

      >
        <option value="" disabled>Comune</option>

        {!_.isEmpty(comuniData) &&
        comuniData.map((com, i) =>
          <option key={i.toString()} value={com.nome}>{com.nome.toUpperCase()}</option>
        )}
      </select>
      <input type="number" name="cap" placeholder="Cap"/>
      <input type="text" name="indirizzo" placeholder="Indirizzo e numero civico"/>
      <div className="container-button">
        <button type="button" name="avanti" className="button-previous" value="Previous">Indietro</button>
        <button type="button" name="avanti" className="button-next" value="Next">Avanti</button>
      </div>
    </fieldset>
  )
}

const mapStateToProps = (state) => ({
  regioniData: get(state, 'TreedomData.regioni', []),
  provinceData: get(state, 'TreedomData.province', []),
  comuniData: get(state, 'TreedomData.comuni', []),
});

const mapDispatchToProps = (dispatch) => ({
  handleGetDataRegioni: bindActionCreators(getDataRegioni, dispatch),
  handleGetDataProvince: bindActionCreators(getDataProvince, dispatch),
  handleGetDataComuni: bindActionCreators(getDataComuni, dispatch),
});


export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(FieldsetStep2);
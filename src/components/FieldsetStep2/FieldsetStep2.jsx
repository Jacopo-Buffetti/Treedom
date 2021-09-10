import React, {useEffect} from 'react';
import {bindActionCreators, compose} from "redux";
import {withRouter} from "react-router-dom";
import get from "lodash/get";
import {getDataComuni, getDataProvince, getDataRegioni} from "../../actions/TreedomDataAction";
import {connect} from "react-redux";
import Select from "../Form/Select";
import Input from "../Form/Input";
import Button from "../Form/Button";

const FieldsetStep2 = (props) => {
  const {
    handleGetDataComuni,
    handleGetDataRegioni,
    handleGetDataProvince,
    provinceData,
    regioniData,
    comuniData,
  } = props;

  useEffect(() => {
    handleGetDataRegioni();
    handleGetDataProvince();
    handleGetDataComuni();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeRegione = (val) => {
    const data = {
      regioneValue: val,
    };
    handleGetDataProvince(data);
  }

  const changeProvince = (val) => {
    const data = {
      provinceValue: val,
    };
    handleGetDataComuni(data);
  }

  const changeComuni = (val) => {
    const data = {
      comuniValue: val,
    };
    handleGetDataComuni(data);
  }

  return (
    <fieldset className="fieldsetStep">
      <h2 className="fs-title">Informazioni indirizzo</h2>
      <h3 className="fs-subtitle">Dicci dove abiti</h3>
      <Select
        optionValue={regioniData}
        placeholder={'Regione'}
        optionLabelDefault={'Regione...'}
        name="regione"
        onChange={(val) => changeRegione(val)}
      />
      <Select
        optionValue={provinceData}
        placeholder={'Province'}
        optionLabelDefault={'Province...'}
        name="provincia"
        onChange={(val) => changeProvince(val)}
      />
      <Select
        optionValue={comuniData}
        placeholder={'Comuni'}
        optionLabelDefault={'Comuni...'}
        name="comune"
        onChange={(val) => changeComuni(val)}
      />
      <Input type="number" name="cap" placeholder="Cap"/>
      <Input type="text" name="indirizzo" placeholder="Indirizzo e numero civico"/>
      <div className="container-button">
        <Button type="button" name="avanti" className="button-previous" value="Previous" label="Indietro" />
        <Button type="button" name="avanti" className="button-next" value="Next" label="Avanti" />
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
import React, {useEffect} from 'react';
import {bindActionCreators, compose} from "redux";
import {withRouter} from "react-router-dom";
import get from "lodash/get";
import {getDataComuni, getDataProvince, getDataRegioni} from "../../actions/TreedomDataAction";
import {connect} from "react-redux";
import Select from "../Form/Select";
import Input from "../Form/Input";
import PropTypes from "prop-types";

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

  console.log(handleGetDataComuni,
    handleGetDataRegioni,
    handleGetDataProvince,)

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

FieldsetStep2.propTypes = {
  regioniData: PropTypes.array.isRequired,
  provinceData: PropTypes.array.isRequired,
  comuniData: PropTypes.array.isRequired,
  handleGetDataComuni: PropTypes.func.isRequired,
  handleGetDataRegioni: PropTypes.func.isRequired,
  handleGetDataProvince: PropTypes.func.isRequired,
};


export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(FieldsetStep2);
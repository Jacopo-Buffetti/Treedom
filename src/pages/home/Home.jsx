import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import './home.scss';
import {bindActionCreators, compose} from "redux";
import get from "lodash/get";
import {getDataRegioni, getDataProvince, getDataComuni} from "../../actions/TreedomDataAction";
import {connect} from "react-redux";


const Home = (props) => {
    const {
        handleGetDataComuni,
        handleGetDataRegioni,
        handleGetDataProvince,
        provinceData,
        regioniData,
        comuniData,
    } = props;

    const [regioneValue, setregioneValue] = useState([]);


    useEffect(() => {
        handleGetDataRegioni();
        handleGetDataProvince();
        handleGetDataComuni();
    }, []);

    console.log('Regioni', regioniData,);
    console.log('Province', provinceData);
    console.log('Comuni', comuniData);



    return (
      <div className={`main-home main-page`}>
          <select
            onChange={(e) => {
                setregioneValue(e.target.value);
                const data = {
                    regioneValue,
                };
                handleGetDataProvince(data);
            }}
            value={regioneValue}

          >
              {regioniData.map(fbb =>
                <option key={fbb.key} value={fbb.key}>{fbb}</option>
              )};
          </select>
      </div>
    );
};

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
)(Home);

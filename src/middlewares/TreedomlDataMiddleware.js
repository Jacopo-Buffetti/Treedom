import axios from 'axios';
import get from 'lodash/get';
import {
    GET_DATA_REGIONI,
    SET_DATA_REGIONI,
    SET_DATA_PROVINCE,
    GET_DATA_PROVINCE,
    GET_DATA_COMUNI,
    SET_DATA_COMUNI
} from "../actions/types/TreedomDataType";

const checkRegProvCom = (store) => (next) => (action) => {
    console.log('qui entro sicuro ACTION', action);
    switch (action.type) {
        case GET_DATA_REGIONI:
            next(action);
            axios.get(`https://comuni-ita.herokuapp.com/api/regioni`)
              .then((response) => {
                  store.dispatch({ type: SET_DATA_REGIONI, payload: get(response, 'data', []) });
              });
            break;
        case GET_DATA_PROVINCE:
            next(action);
            const regioneValue = get(action, 'payload.regioneValue', null);
            if(regioneValue) {
            axios.get(`https://comuni-ita.herokuapp.com/api/province/${regioneValue.toLowerCase()}`)
              .then((response) => {
                  let prov = [];
                  get(response, 'data', []).forEach((reg) => {
                      prov.push(reg.nome)
                  })
                  store.dispatch({ type: SET_DATA_PROVINCE, payload: prov });
              });
            }
            break;
        case GET_DATA_COMUNI:
            next(action);
            const provinceValue = get(action, 'payload.provinceValue', '');
            if(provinceValue) {
                axios.get(`https://comuni-ita.herokuapp.com/api/comuni/provincia/${provinceValue.toLowerCase()}`)
                  .then((response) => {
                      let com = [];
                      get(response, 'data', []).forEach((reg) => {
                          com.push(reg.nome)
                      })
                      store.dispatch({ type: SET_DATA_COMUNI, payload: com });
                  });
            }
            break;
        default:
            next(action);
    }
}

export default checkRegProvCom;

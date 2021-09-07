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
                  store.dispatch({ type: SET_DATA_PROVINCE, payload: get(response, 'data', []) });
              });}
            break;
        case GET_DATA_COMUNI:
            next(action);
            const provinceValue = get(action, 'payload.provinceValue', '');
            if(provinceValue) {
                axios.get(`https://comuni-ita.herokuapp.com/api/comuni/provincia/${provinceValue}`)
                  .then((response) => {
                      store.dispatch({type: SET_DATA_COMUNI, payload: get(response, 'data', [])});
                  });
            }
            break;
        default:
            next(action);
    }
}

export default checkRegProvCom;

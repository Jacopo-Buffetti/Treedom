import { createActions } from 'redux-actions';
import {
    SET_DATA_REGIONI,
    GET_DATA_REGIONI,
    GET_DATA_PROVINCE,
    SET_DATA_PROVINCE,
    SET_DATA_COMUNI, GET_DATA_COMUNI
} from "./types/TreedomDataType";

export const {
    setDataRegioni,
    getDataRegioni,
    setDataProvince,
    getDataProvince,
    setDataComuni,
    getDataComuni
} = createActions({
    [SET_DATA_REGIONI]: (payload) => payload,
    [GET_DATA_REGIONI]: (payload) => payload,
    [SET_DATA_PROVINCE]: (payload) => payload,
    [GET_DATA_PROVINCE]: (payload) => payload,
    [SET_DATA_COMUNI]: (payload) => payload,
    [GET_DATA_COMUNI]: (payload) => payload,
});

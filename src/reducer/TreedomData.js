import { handleActions } from 'redux-actions';
import {
    SET_DATA_PROVINCE,
    SET_DATA_REGIONI,
    SET_DATA_COMUNI
} from "../actions/types/TreedomDataType";

export const defaultState = {
    regioni: [],
    province: [],
    comuni: [],
}

export default handleActions({
    [SET_DATA_REGIONI]: (state, action) => ({
        ...state,
        regioni: action.payload
    }),
    [SET_DATA_PROVINCE]: (state, action) => ({
        ...state,
        province: action.payload
    }),
    [SET_DATA_COMUNI]: (state, action) => ({
        ...state,
        comuni: action.payload
    }),
}, defaultState);
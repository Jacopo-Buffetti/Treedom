import { createActions } from 'redux-actions';
import {
    SET_ERROR,
    SET_VALUE,
    SEND_DATA_FETCHPROMISE,
} from "./types/FormDataType";

export const {
    setError,
    setValue,
    sendDataFetchpromise,
} = createActions({
    [SET_ERROR]: (payload) => payload,
    [SET_VALUE]: (payload) => payload,
    [SEND_DATA_FETCHPROMISE]: (payload) => payload,
});

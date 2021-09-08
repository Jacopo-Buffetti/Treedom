import { createActions } from 'redux-actions';
import {
    SET_ERROR,
    SET_VALUE,
} from "./types/FormDataType";

export const {
    setError,
    setValue,
} = createActions({
    [SET_ERROR]: (payload) => payload,
    [SET_VALUE]: (payload) => payload,
});

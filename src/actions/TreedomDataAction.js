import { createActions } from 'redux-actions';
import {SET_DATA_TREEDOM, GET_DATA_TREEDOM} from "./types/TreedomDataType";

export const {
    setDataTreedom,
    getDataTreedom
} = createActions({
    [SET_DATA_TREEDOM]: (payload) => payload,
    [GET_DATA_TREEDOM]: (payload) => payload,
});

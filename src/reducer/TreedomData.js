import { handleActions } from 'redux-actions';
import {
    SET_DATA_TREEDOM,
} from "../actions/types/TreedomDataType";

export const defaultState = {
    treedom: []
}

export default handleActions({
    [SET_DATA_TREEDOM]: (state, action) => ({
        ...state,
        treedom: action.payload
    })
}, defaultState);
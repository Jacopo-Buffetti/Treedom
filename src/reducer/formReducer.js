import { handleActions } from 'redux-actions';
import {
  SET_VALUE,
  SET_ERROR,
} from "../actions/types/FormDataType";

export const defaultState = {
  value: [],
  error: [],
}

export default handleActions({
  [SET_VALUE]: (state, action) => ({
    ...state,
    value: action.payload
  }),
  [SET_ERROR]: (state, action) => ({
    ...state,
    error: action.payload
  }),
}, defaultState);

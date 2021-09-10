import { handleActions } from 'redux-actions';
import {
  SET_VALUE,
  SET_ERROR,
  SET_STEP_FORM,
} from "../actions/types/FormDataType";

export const defaultState = {
  value: {},
  error: {},
  stepForm: 1,
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
  [SET_STEP_FORM]: (state, action) => ({
    ...state,
    stepForm: action.payload
  }),
}, defaultState);

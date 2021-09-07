import { createActions } from 'redux-actions';
import {
  SET_DATA_FETCHPROMISE,
  GET_DATA_FETCHPROMISE,
} from "./types/FetchPromiseDataType";

export const {
  setDataFetchPromise,
  getDataFetchPromise,
} = createActions({
  [SET_DATA_FETCHPROMISE]: (payload) => payload,
  [GET_DATA_FETCHPROMISE]: (payload) => payload,
});

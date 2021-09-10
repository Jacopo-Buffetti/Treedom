import { combineReducers } from 'redux';
import formReducer from './formReducer';
import TreedomData from './TreedomData';

export const RoutReducer = combineReducers({
    form: formReducer,
    TreedomData,
});

export default RoutReducer;

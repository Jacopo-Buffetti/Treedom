import axios from 'axios';
import get from 'lodash/get';
import {GET_DATA_TREEDOM, SET_DATA_TREEDOM} from "../actions/types/TreedomDataType";

const checkLoveApp = (store) => (next) => (action) => {
    console.log('qui entro sicuro ACTION', action);
    switch (action.type) {
        case GET_DATA_TREEDOM:
            next(action);
            axios.get(`url`, {
                headers: {
                    // option headers
                }
            })
                .then((response) => {
                    store.dispatch({ type: SET_DATA_TREEDOM, payload: get(response, 'data', []) });
                });
            break;
        default:
            next(action);
    }
}

export default checkLoveApp;

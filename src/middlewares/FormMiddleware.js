
import {
    SET_ERROR,
    SEND_DATA_FETCHPROMISE,
} from "../actions/types/FormDataType";

const checkForm = (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_DATA_FETCHPROMISE: {
            next(action);
            const {
                data
            } = action.payload;
            store.dispatch({ type: SET_ERROR, payload: {nome: 'Insert a valid name'} })
            break;
        }
        default:
            next(action);
    }
}

export default checkForm;

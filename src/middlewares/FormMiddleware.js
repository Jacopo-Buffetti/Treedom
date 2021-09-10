
import {
    SET_ERROR,
    SEND_DATA_FETCHPROMISE, SET_STEP_FORM,
} from "../actions/types/FormDataType";

import Validation from '../resources/ValidationJson';

const checkForm = (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_DATA_FETCHPROMISE: {
            next(action);
            const {
                data,
                type,
                step,
            } = action.payload;
            const fakePromise = new Promise((resolve, reject) => {
                const stepValidation = Validation[`step${step}`];
                const errors = {};
                Object.keys(stepValidation).forEach((key) =>{
                    const val = data[key];
                    if (stepValidation[key].validation === 'required' && !val) {
                        errors[key] = !val ? stepValidation[key].message : true;
                    }
                    if (stepValidation[key].validation === 'regex') {
                        const regex = new RegExp(stepValidation[key].regex);
                        if (!regex.test(val)) errors[key] = stepValidation[key].message;
                    }
                 })
                if (Object.keys(errors).length > 0) {
                    return setTimeout(
                      () => reject(errors),
                      250
                    );
                }

                setTimeout(() => resolve(data), 250);
            });
            fakePromise
              .then((res) => {
                  console.log(res)
                  if (type === 'save') {
                      // La gestione del salvataggio dipende dall'impostazione delle API
                      store.dispatch({type: SET_STEP_FORM, payload: step + 1})
                  } else {
                      store.dispatch({type: SET_STEP_FORM, payload: step + 1})
                  }
              })
              .catch((err) => {
                  store.dispatch({ type: SET_ERROR, payload: err })
              })
            break;
        }
        default:
            next(action);
    }
}

export default checkForm;

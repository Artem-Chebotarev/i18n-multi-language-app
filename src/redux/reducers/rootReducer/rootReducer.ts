import { combineReducers } from 'redux';
import languageReducer from '../languageReducer/languageReducer';

const rootReducer = combineReducers({
    language: languageReducer,
});

export default rootReducer;
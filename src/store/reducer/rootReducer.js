import authReducer from './authReducer';
import reducer from './reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    aut: authReducer,
    menu: reducer
});
export default rootReducer;
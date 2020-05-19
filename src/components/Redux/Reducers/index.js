import counterReducer from './counter';
import loggedReducer from './isLogged';
// import listCounterReducer from './listcounter'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    // listCounter: listCounterReducer
});

export default allReducers;
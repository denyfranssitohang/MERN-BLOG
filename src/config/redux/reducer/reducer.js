import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import homeReducer from './homeReducer';

//__ Combine Reducer menjadi satu Reducer __\\
const reducer = combineReducers({homeReducer, globalReducer})

export default reducer;
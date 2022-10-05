import { combineReducers } from 'redux';
import UserReducer from './user/reducer';

const RootReducers = combineReducers({
    UserReducer,
    

})

export default RootReducers;
import {LOGIN} from './action'


const initialState = {
    User: {},
    authenticate: false,
}

export default function UserReducer(state = initialState, action){
    switch(action.type){
        case LOGIN:
            
            return {
                ...state,
                authenticate: action.payload

            }
        default: 
            return {
                ...state,

            }
    }
}
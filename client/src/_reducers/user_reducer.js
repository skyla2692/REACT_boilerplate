import{
    LOGIN_USER
} from '../_actions/types'


export default function(state = {}, action){
    switch (action.type) {
        case LOGIN_USER:
            console.log("login success" + action.payload)
            return {...state, loginSuccess : action.payload}
            break;
    
        default:
            return state;
    }
}
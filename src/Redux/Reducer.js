import { LOGIN, SIGNUP } from "./ActionType"


let intial = {
    user : null,
    isSignup : false
}
export const reducer = (state=intial, action) => {
    switch(action.type) {
        case LOGIN :
            return{
                ...state,
                user : action.payload,
                isSignup : false                
            }
        case SIGNUP :
            return{
                ...state,
                isSignup : true
            }
        default : return state
    }
}
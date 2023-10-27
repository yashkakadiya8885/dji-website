import { LOGIN, SIGNUP } from "./ActionType"


export const userLogin = (data) => {
    return {type : LOGIN,payload : data}
}

export const userSignup = (data) => {
    return {type : SIGNUP,payload : data}
}
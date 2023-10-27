import axios from "axios"
import { ERROR, LOADING, SUCCESS } from "./ActionType"


export const Fachingproduct = (dispatch) =>{
    dispatch({type: LOADING})
    axios.get(`https://api-0aa9.onrender.com/product`)
    .then((res)=>{
        console.log(res.data);
        dispatch({type: SUCCESS,payload: res.data});
    })
    .catch((err)=>{
        console.log(err);
        dispatch({type:ERROR})
    })
}
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer } from "./Reducer";
import { Prodreducer } from "./productRedux/productReducer";
import thunk from "redux-thunk";

const mainreducer=combineReducers({
    reducer,
    Prodreducer
})
export const store = legacy_createStore(mainreducer,applyMiddleware(thunk));
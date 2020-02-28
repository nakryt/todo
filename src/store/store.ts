import {applyMiddleware, combineReducers, createStore} from "redux";
import todoReducer from "./todoReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ todo: todoReducer })


type TRootReducer = typeof rootReducer
export type TStore = ReturnType<TRootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store

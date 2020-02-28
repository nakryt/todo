import {applyMiddleware, combineReducers, createStore} from "redux"
import todoReducer from "./todoReducer"
import thunk from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({ todo: todoReducer, form: formReducer })


type TRootReducer = typeof rootReducer
export type TStore = ReturnType<TRootReducer>

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store

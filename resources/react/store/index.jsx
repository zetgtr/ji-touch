import { combineReducers, createStore } from "redux";
import {linkReducer} from "./link/reducer";

export const store = createStore(
    combineReducers({
        link: linkReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

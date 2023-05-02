import { combineReducers, createStore } from "redux";
import {linkReducer} from "./link/reducer";
import {routerReducer} from "./router/reducer";

export const store = createStore(
    combineReducers({
        link: linkReducer,
        routers: routerReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

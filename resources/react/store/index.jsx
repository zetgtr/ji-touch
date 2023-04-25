import {test2Reducer} from "./panels/test2/reducer";
import {testReducer} from "./panels/test/reducer";
import { combineReducers, createStore } from "redux";
import {linkReducer} from "./link/reducer";
import {routerReducer} from "./router/reducer";

export const store = createStore(
    combineReducers({
        test2: test2Reducer,
        test: testReducer,
        link: linkReducer,
        routers: routerReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

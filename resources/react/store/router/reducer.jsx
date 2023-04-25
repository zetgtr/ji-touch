import {SET_PAGE, SET_ROUTER} from "./constants";

const initialState = {
    routers: [],
    pages: [],
};

export const routerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROUTER:
            return {
                ...state,
                routers: action.payload,
            };
        case SET_PAGE:
            return {
                ...state,
                pages: action.payload,
            };
        default:
            return state;
    }
}

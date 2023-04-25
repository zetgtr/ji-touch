import {SET_ROUTER} from "./constants";

const initialState = {
    routers: [],
};

export const routerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROUTER:
            return {
                ...state,
                routers: action.payload,
            };
        default:
            return state;
    }
}

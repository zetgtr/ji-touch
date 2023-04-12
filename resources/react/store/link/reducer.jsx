import {SET_LINK} from "./constants";

const initialState = {
    link: [],
};

export const linkReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LINK:
            return {
                ...state,
                link: action.payload,
            };
        default:
            return state;
    }
}

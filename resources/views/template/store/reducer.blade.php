import {SET_{{ strtoupper($alias) }}} from "./constants";

const initialState = {
    {{ $alias }}: [],
};

export const {{ $alias }}Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_{{ strtoupper($alias) }}:
            return {
                ...state,
                {{ $alias }}: action.payload,
            };
        default:
            return state;
    }
}

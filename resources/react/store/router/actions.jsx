import {SET_PAGE, SET_ROUTER} from "./constants";

export const setRouterAction = (payload) => ({
    type: SET_ROUTER,
    payload,
});
export const setPagesAction = (payload) => ({
    type: SET_PAGE,
    payload,
});

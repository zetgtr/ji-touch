import {apiGet} from "./api";

export const setPageData = (dispatch, action) => {
    apiGet("/api/page_route",(res)=>{
        dispatch(action(res.data))
    })
}

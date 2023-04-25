import {apiGet} from "./api";

export const  setRouterData = (alias, dispatch, action) => {
    apiGet("/api/navigation/get/"+alias,(res)=>{
        dispatch(action(res.data))
    })
}

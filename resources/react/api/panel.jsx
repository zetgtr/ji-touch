import {apiGet} from "./api";

export const setPanelData = (alias, dispatch, action) => {
    apiGet("/api/panel_data/"+alias,(res)=>{
        dispatch(action(res.data))
    })
}

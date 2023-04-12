import React, {useEffect} from "react";
import {setPanelData} from "../../api/panel";
import {useDispatch, useSelector} from "react-redux";
import {setLinkAction} from "../../store/link/actions";
import {linkSelector} from "../../store/link/selector";


export const LinkRoute = () => {
    const dispatch = useDispatch();
    const { link } = useSelector(linkSelector);
    useEffect(() => {
        setPanelData('link',dispatch,setLinkAction)
    }, []);
    console.log(link)
    return (
        <>
            {link.map(el=>(
                <div key={el.url}>{el.title}</div>
                )
            )}
        </>
    )
}

import React, {useEffect} from "react";
import {setPanelData} from "../../api/panel";
import {useDispatch, useSelector} from "react-redux";
import {set{{ ucfirst($alias) }}Action} from "../../store/{{ $alias }}/actions";
import { {{ $alias }}Selector} from "../../store/{{ $alias }}/selector";


export const {{ ucfirst($alias) }}Component = () => {
    const dispatch = useDispatch();
    const { {{ $alias }} } = useSelector({{ $alias }}Selector);
    useEffect(() => {
        setPanelData('{{ $alias }}',dispatch,set{{ ucfirst($alias) }}Action)
    }, []);
    console.log({{ $alias }})
    return (
        <div>
        </div>
    )
}

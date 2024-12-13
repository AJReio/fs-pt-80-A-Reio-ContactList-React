import React from "react";
import { useParams } from "react-router";
import { UpdateComponent } from "../component/updateComponent.jsx";


export const Edicion = () => {
    const {id} = useParams()
    return (
        <UpdateComponent cid = {id}/>
    )
}
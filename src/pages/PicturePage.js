import React from "react"
import {useParams} from "react-router-dom";

export const PiturePage=()=>{
    const {id}=useParams()

    return(
        <h1>PicturePage:{id}</h1>
    )
}
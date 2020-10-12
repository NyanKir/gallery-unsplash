import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {loadFetchData, loadMoreFetchData, SourceData} from "../redux/actions";
import {Gallery} from "../components/Gallery/Gallery";
import {useScrollHandler} from "../hooks/scroll.hook";
import {useParams} from "react-router-dom";

export const HomePage = () => {
    const [pagePictures,setPage]=useState(2)
    const dispatch = useDispatch()
    const data = useSelector((state) => state.galleryReducer.fetchedData.data)
    const nowSearch = useSelector((state) => state.galleryReducer.nowSearch)
    const scrollPosition=useScrollHandler()
    const {text} = useParams()
    useEffect(() => {
        if(text){
            SourceData(dispatch, text)()
        }else{
            loadFetchData(dispatch)()
        }
    }, [text])


    useEffect(()=>{
        if(scrollPosition>55){
            loadMoreFetchData(dispatch,pagePictures,nowSearch)()
            setPage(pagePictures+1)
        }
    },[dispatch,scrollPosition])


    const splitArr = (arr, chunks) => [...Array(chunks)].map((_, c) => arr.filter((n, i) => i % chunks === c));

    return (
        <Gallery data={splitArr(data, 3)}/>
    )
}

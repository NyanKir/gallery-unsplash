import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {loadFetchData, loadMoreFetchData} from "../redux/actions";
import {Gallery} from "../components/Gallery/Gallery";
import {useScrollHandler} from "../hooks/scroll.hook";

export const HomePage = () => {
    const [pagePictures,setPage]=useState(2)
    const dispatch = useDispatch()
    const data = useSelector((state) => state.galleryReducer.fetchedData.data)
    const nowSearch = useSelector((state) => state.galleryReducer.nowSearch)
    const scrollPosition=useScrollHandler()


    useEffect(() => {
        loadFetchData(dispatch)()
    }, [])


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

import React, {useEffect, useState} from "react"
import {useLocalStorage} from "../hooks/localstorage.hook";
import {Gallery} from "../components/Gallery/Gallery";


export const FollowsPage = () => {
    useLocalStorage('follows', [])
    const [follows, setFollows] = useState([])

    useEffect(() => {
        const ac = new AbortController();
        Promise.all(JSON.parse(window.localStorage.getItem('follows'))
            .map(async (id) => {
                const res = await fetch(`https://api.unsplash.com/photos/${id}/?&client_id=4kKJyVOE_v-8VRUmQCyz6t7dsTjwlraJYiHPAjBAVnU`, {signal: ac.signal})
                return await res.json()
            })).then(value => setFollows([...value])).catch(ex => console.error(ex))
        return () => ac.abort();
    }, [])

    const handlerFollows = (value) => {
        setFollows(value)
    }
    const splitArr = (arr, chunks) => [...Array(chunks)].map((_, c) => arr.filter((n, i) => i % chunks === c));

    return (
        <Gallery data={splitArr(follows, 3)} handlerFollows={handlerFollows}/>
    )
}
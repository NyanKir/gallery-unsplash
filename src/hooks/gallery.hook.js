import {useEffect, useState} from "react"

export const useGetGallery = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const url = 'https://api.unsplash.com/photos/?client_id=4kKJyVOE_v-8VRUmQCyz6t7dsTjwlraJYiHPAjBAVnU'

    useEffect(() => {
            const fetchData=async ()=> {
                setLoading(true)
                try {
                    const res = await fetch(url)
                    const data = await res.json()
                    setData(data)
                } catch (e) {
                    setLoading(false)
                    setError(true)
                }
                setLoading(false)
            }
            fetchData()
        }, []
    )


    return [data, loading, error]
}
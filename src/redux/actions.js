import {types} from "./types";


export const fetchDataSuccess = (data) => {
    return {
        type: types.FETCH_DATA_SUCCESS,
        payload: data,
    }
}

export const fetchDataStatus = (status) => {
    return {
        type: types.FETCH_DATA_STATUS,
        status: status
    }
}
export const fetchLoadDataStatus = (data) => {
    return {
        type: types.FETCH_LOAD_DATA_SUCCESS,
        payload: data
    }
}



export function SourceData(dispatch,text){
    dispatch(fetchDataStatus('loading'))
    return async () => {
        try {
            const res = await fetch(`https://api.unsplash.com/search/photos/?page=1&query=${text}&client_id=4kKJyVOE_v-8VRUmQCyz6t7dsTjwlraJYiHPAjBAVnU`)
            const data = await res.json()
            dispatch(fetchDataSuccess(data.results))
            dispatch(fetchDataStatus('succeeded'))
        } catch (e) {
            dispatch(fetchDataStatus('failed'))
        }
    }
}

export function loadFetchData(dispatch) {
    dispatch(fetchDataStatus('loading'))
    return async () => {
        try {
                const res = await fetch('https://api.unsplash.com/photos/?page=1&client_id=4kKJyVOE_v-8VRUmQCyz6t7dsTjwlraJYiHPAjBAVnU')
            const data = await res.json()
            dispatch(fetchDataSuccess(data))
            dispatch(fetchDataStatus('succeeded'))
        } catch (e) {
            dispatch(fetchDataStatus('failed'))
        }
    }
}

export function loadMoreFetchData(dispatch,count,search) {
    return async () => {
        try{
            let res;
            if(search){
                res = await fetch(`https://api.unsplash.com/search/photos/?page=${count}&query=${search}&client_id=4kKJyVOE_v-8VRUmQCyz6t7dsTjwlraJYiHPAjBAVnU`)
            }else{
                res = await fetch(`https://api.unsplash.com/photos/?page=${count}&client_id=4kKJyVOE_v-8VRUmQCyz6t7dsTjwlraJYiHPAjBAVnU`)
            }
            const data = await res.json()
            if(data.results){
                dispatch(fetchLoadDataStatus(data.results))

            }else{
                dispatch(fetchLoadDataStatus(data))

            }
        }catch(e){
            dispatch(fetchDataStatus('failed'))
            console.log(e)
        }

    }
}
import {FETCH_DATA_STATUS, FETCH_DATA_SUCCESS, FETCH_LOAD_DATA_SUCCESS} from "./types";


export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}

export const fetchDataStatus = (status) => {
    return {
        type: FETCH_DATA_STATUS,
        status: status
    }
}
export const fetchLoadDataStatus = (data) => {
    return {
        type: FETCH_LOAD_DATA_SUCCESS,
        payload: data
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

export function loadMoreFetchData(dispatch, count) {
    return async () => {
        const res = await fetch(`https://api.unsplash.com/photos/?page=${count}&client_id=4kKJyVOE_v-8VRUmQCyz6t7dsTjwlraJYiHPAjBAVnU`)
        const data = await res.json()
        dispatch(fetchLoadDataStatus(data))
    }
}
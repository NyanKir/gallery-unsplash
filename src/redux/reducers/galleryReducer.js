import {types} from "../types";

const initialState = {
    fetchedData: {
        data: [],
        status: 'idle',
    },
    nowSearch:''
}

export const galleryReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.FETCH_DATA_SUCCESS:
            return {
                ...state,
                fetchedData: {
                    ...state.fetchedData,
                    data: [...action.payload]
                },
                nowSearch: action.source?action.source:state.nowSearch
            }
        case types.FETCH_LOAD_DATA_SUCCESS:
            return {
                ...state,
                fetchedData: {
                    ...state.fetchedData,
                    data: action.payload.reduce((value,photo)=>{
                        if(!state.fetchedData.data.includes(photo)){
                            state.fetchedData.data.push(photo)
                        }
                        return value
                    },state.fetchedData.data)
                }
            }
        case types.FETCH_DATA_STATUS:
            return {
                ...state,
                fetchedData: {
                    ...state.fetchedData,
                    status: action.status
                }}
        default:
            return state
    }
}

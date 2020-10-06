import {FETCH_DATA_SUCCESS, FETCH_DATA_STATUS, FETCH_LOAD_DATA_SUCCESS} from "../types";

const initialState = {
    fetchedData: {
        data: [],
        status: 'idle',
    }
}

export const galleryReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                fetchedData: {
                    ...state.fetchedData,
                    data: [...action.payload]
                }
            }
        case FETCH_LOAD_DATA_SUCCESS:
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
        case FETCH_DATA_STATUS:
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

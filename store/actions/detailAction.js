import * as Types from "../types"

// Refresh Page And Loading
export const DetailAction = (open) => dispatch => {
    dispatch({
        type : Types.PAGE_LOADING,
        payload : {pageLoading : open}
    })
}

export const SetMessage = (data) => dispatch => {
    dispatch({
        type : Types.SET_MESSAGE,
        payload : data
    })
}


export const ClearMessage = () => dispatch => {
    dispatch({
        type : Types.CLEAR_MESSAGE
    })
}
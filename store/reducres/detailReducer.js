import * as types from "../types"

const datas = {
    pageLoading : false,
    page : "خانه",
    message : {
        msg : '',
        color : 'default',
        bg : 'success'
    }
}

// error warning info success

export const detailReducer = (state = datas , action) => {
    switch(action.type) {
        case types.PAGE_LOADING :
            return {
                ...state,
                pageLoading : action.payload.pageLoading
            }
        case types.SET_MESSAGE :
            return {
                ...state,
                message : {
                    msg : action.payload.msg,
                    bg : action.payload.bg,
                    color : action.payload.color
                }
            }
        case types.CLEAR_MESSAGE :
            return {
                ...state,
                message : {
                    ...state.message,
                    msg : ''
                }
            }
        default :
            return state;
    }
}
import * as Types from "../types"
import cookies from "js-cookie"

const datas = {}

export const authReducer = (state = datas , action) => {    
    switch (action.type) {
        case Types.REGISTER : 
            cookies.set('token', action.payload.token , { expires: 2});
            return {
                ...state,
                name : action.payload.name,
                lastname : action.payload.lastname,
                email : action.payload.email,
            }
        case Types.LOGIN :
            action.payload.token && cookies.set('token', action.payload.token , { expires: 2})
            return {
                ...state,
                name : action.payload.name,
                lastname : action.payload.lastname,
                email : action.payload.email,
                date : action.payload.date,
                bio : action.payload.bio,
                shareit : action.payload.shareit,
                status : action.payload.status,
                update_at : action.payload.update_at
            }
        case Types.LOGOUT :
            cookies.remove("token")
            return {}
        default : 
            return state;
    }

}

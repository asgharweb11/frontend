import * as Types from "../types"

const datas = {}

export const MyShop = (state = datas , action) => {
    switch(action.type){
        case Types.CREATE_SHOP :
            return {
                ...state,
                title : action.payload.title,
                idshop : action.payload.idshop,
                carsoul : action.payload.carsoul
            }
        default : 
            return state;
    }

}
import * as Types from "../../types"

export const CreateShop = (data) => (dispatch) => {
    dispatch({
        type : Types.CREATE_SHOP,
        payload : data,
    })

}
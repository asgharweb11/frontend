import { combineReducers } from "redux"
//-----------
import {detailReducer} from "./detailReducer"
import { authReducer } from "./authReducer"
import { MyShop } from "./shopReducer"

export default combineReducers({
    Detail : detailReducer,
    Auth : authReducer,
    Shop : MyShop,
})
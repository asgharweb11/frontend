import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { DetailAction } from "../store/actions/detailAction"
import React from "react"
import MakeShop from "../components/makeShop"

const Register = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailAction(false))
    } , [])
    
    return (
        <React.Fragment>
            <MakeShop />
        </React.Fragment>
    )
}

export default Register;
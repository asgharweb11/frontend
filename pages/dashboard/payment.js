import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { DetailAction } from "../../store/actions/detailAction"
import Layout from "../../components/layoutPanel"
import Pay from "../../components/panelUser/payment"

const Payment = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailAction(false))
    } , [])

    return (
        <Layout>
            <Pay />
        </Layout>
    )
}

export default Payment;
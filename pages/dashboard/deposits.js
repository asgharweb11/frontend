import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { DetailAction } from "../../store/actions/detailAction"
import Layout from "../../components/layoutPanel"
import DepositsComp from "../../components/panelUser/deposits"

const Deposits = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailAction(false))
    } , [])

    return (
        <Layout>
            <DepositsComp />
        </Layout>
    )
}

export default Deposits;
import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { DetailAction } from "../../store/actions/detailAction"
import Layout from "../../components/layoutPanel"
import BuysComp from "../../components/panelUser/buys"

const Buys = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailAction(false))
    } , [])
    
    return (
        <Layout>
            <BuysComp />
        </Layout>
    )
}

export default Buys
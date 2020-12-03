import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { DetailAction } from "../../store/actions/detailAction"
import Layout from "../../components/layoutPanel"
import ActiveShop from "../../components/panelUser/activeShop"
const Status = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailAction(false))
    } , [])
    return (
        <Layout>
            <ActiveShop />
        </Layout>
    )
}

export default Status;
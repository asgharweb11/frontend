import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { DetailAction } from "../../store/actions/detailAction"
import Layout from "../../components/layoutPanel"
import Sells from "../../components/panelUser/sells"

const Dashboard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailAction(false))
    } , [])

    return (
        
        <Layout>
            <Sells />
        </Layout>
    )
}

export default Dashboard
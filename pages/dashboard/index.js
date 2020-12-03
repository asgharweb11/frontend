import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { DetailAction } from "../../store/actions/detailAction"
import Layout from "../../components/layoutPanel"
import DashboardComp from "../../components/panelUser/dashboard"

const Dashboard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailAction(false))
    } , [])

    return (
        
        <Layout>
            <DashboardComp />
        </Layout>
    )
}

export default Dashboard
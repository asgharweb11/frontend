import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { DetailAction } from "../../store/actions/detailAction"
import Layout from "../../components/layoutPanel"
import AllPosts from "../../components/panelUser/posts/allPosts"

const Dashboard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailAction(false))
    } , [])

    return (
        
        <Layout>
            <AllPosts />
        </Layout>
    )
}

export default Dashboard
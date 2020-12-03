import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { DetailAction } from "../../store/actions/detailAction"
import Layout from "../../components/layoutPanel"
import EditPost from "../../components/panelUser/editPost"

const Edit = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailAction(false))
    } , [])

    return (
        <Layout>
            <EditPost />
        </Layout>
    )
}

export default Edit;
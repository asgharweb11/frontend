import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { DetailAction } from "../../store/actions/detailAction"
import Layout from "../../components/layoutPanel"
import CommnetsComp from "../../components/panelUser/comment"

const Comments = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailAction(false))
    } , [])

    return (
        <Layout>
            <CommnetsComp />
        </Layout>
    )
}

export default Comments;
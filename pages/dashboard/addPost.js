import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { DetailAction } from "../../store/actions/detailAction"
import NewPost from "../../components/panelUser/posts/newPost"
import Layout from "../../components/layoutPanel"

const AddPost = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailAction(false))
    } , [])

    return (
        <Layout>
            <NewPost />
        </Layout>
    )
}

export default AddPost;
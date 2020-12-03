import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { DetailAction } from "../../../store/actions/detailAction"
import { useRouter } from "next/router" 
import cookie from "js-cookie"
// Components
import Layout from "../../../components/layout"
import PostId from "../../../components/main/section/post"
import { param } from "express-validator"
// ---------------------- Methods -----------------------
import { getPost } from "../../requests/post/post"
import {getComment} from "../../requests/comment"

const Posts = ({product , comments}) => {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailAction(false))
    } , [])

    return (
        <Layout>
                {/* <h1>This Post {router.query.id}</h1> */}
                <PostId product={product} comments={comments.data} />
        </Layout>
        
    )
}


export async function getServerSideProps({params}){

    const res = await getPost(params.id) // getPosts
    const comments = await getComment(res.data._id) // get Comments
    return {
        props : {
            product : res,
            comments
        }
    }
}

export default Posts;
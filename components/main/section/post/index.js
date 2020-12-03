import {useState} from 'react'
// Components 
import CarouselL from "./carouselMain"
import AvatorShop from "./avatorShop"
import PostsLike from "./postsLike"
import Form from "./form"
import Comments from "./comments"

const PostId = ({product , comments}) => {

    const [comm , setComm] = useState(comments)

    const pushComm = (data) => {
        setComm([data , ...comm])
    }

    const editComm = (data) => {
        setComm(data)
    }

    return (
        <React.Fragment>
            <CarouselL data={product.data}/>
            <AvatorShop data={product.data}/>
            <PostsLike data={product.data}/>
            <Form handlePush={pushComm} data={product.data}/>
            <Comments editComm={editComm} data={product.data} comments={comm}/>
        </React.Fragment>
    )
} 


export default PostId
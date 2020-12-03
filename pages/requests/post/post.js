import fetch from "isomorphic-fetch"
import { API } from "../../../config"

export const getPost = async (id) => {
    console.log("id : " , id)
    const res = await fetch(`${API}/api/post/get/${id}` , {
        method : 'GET',
        header : {
            'Content-Type' : 'application/json'
        }
    })
    return await res.json()
}
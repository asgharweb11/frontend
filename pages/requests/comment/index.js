import fetch from "isomorphic-fetch"
import { API } from "../../../config"

export const getComment = async (id) => {
    const res = await fetch(`${API}/api/comment/all?post_id=${id}` , {
        method : 'GET',
        header : {
            'Content-Type' : 'application/json'
        }
    })
    //console.log("res : " , res)
    return await res.json()
}
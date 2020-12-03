import fetch from "isomorphic-fetch"
import { API } from "../../../config"

export const posts = async (id) => {
    const res = await fetch(`${API}/api/post?id=${id}` , {
        method : 'GET',
        header : {
            'Content-Type' : 'application/json'
        }
    })
    //console.log("res : " , res)
    return await res.json()
}
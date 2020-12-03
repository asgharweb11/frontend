import { useEffect , useState } from 'react'
import { useSelector } from 'react-redux'
import {useRouter} from 'next/router'
import {API} from '../../config'
import cookie from 'js-cookie'
import fetch from 'isomorphic-fetch'
import Layout from "../../components/layout"
import {
    Box
} from '@material-ui/core'

const verify = ({status}) => {

    const Router = useRouter()
    const [data , setData] = useState(null)
    const {email} = useSelector(state => state.Auth)
    const buy = cookie.get('buy') && JSON.parse(cookie.get('buy'))

    const dataBuy = {
        ...buy,
        email
    }
    useEffect(() => {
        if(buy && email){
            fetch(`${API}/payment/verify` , {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(dataBuy)
            }).then(res => {
                return res.json()
            }).then(res => {
                const {status , total , ids , factor} = res.data
                if(res.status === true){
                    setData({status , msg : res.msg})
                    cookie.remove('card')
                    cookie.remove('buy')
                    setTimeout(() => {
                        Router.push("/dashboard/buys")
                    },1000 * 20)
                }
            }).catch(err => {
                console.log('error : ' , err)
                setData({status : false , msg : err.msg})
            })
        }
    },[email])

    

    return (
        <Layout>
            <div>
                {
                    status == 1
                    ? 
                        (<Box textAlign="center" alignContent="center" justifyContent="center" component="h4">{data !== null ? data.msg : 'در حال دریافت اطاعات ، صبور باشید ...'}</Box>)
                    :
                        (<Box textAlign="center" alignContent="center" justifyContent="center" component="h4">خرید ناموفق بود !!</Box>)
                }
            </div>
        </Layout>
    )
}


export async function getStaticPaths(param){

    return {
        paths : [
           {params : {status  : '0'}},
           {params : {status  : '1'}},
        ],
        fallback: false
    }
}


export async function getStaticProps({params}){

    return {
        props : {
            status : params.status,
        }
    }
}

export default verify
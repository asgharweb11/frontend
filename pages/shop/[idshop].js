import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { DetailAction } from "../../store/actions/detailAction"
import {useRouter} from "next/router"
import Head from "next/head"
import {
    Grid
} from "@material-ui/core"
// Components
import Layout from "../../components/layout"
import Bread from "../../components/main/section/breadcrumbs"
import Posts from "../../components/main/section/home/posts"
import DetailShop from "../../components/main/section/shop/detailProfile"
import Carousel from "../../components/main/section/shop/carousel"
// Styles


const Shop = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailAction(false))
    } , [])
    return (
        <Layout>
            <Head>
                <title>فروشگاه {router.query.idshop}</title>
            </Head>
            <Grid container direction="row" justify="center" spacing={3}>
                <Grid item lg={3} md={4} xs={12}>
                    <DetailShop />
                </Grid>
                <Grid item lg={9} md={8} xs={12}>
                    {/* breadcrumbs */}
                    <Bread />
                    {/* Slider Large */}
                    <Carousel />
                    {/* Just Posts */}
                    <Posts />
                </Grid>

            </Grid>
        </Layout>
    
    )
}

export default Shop
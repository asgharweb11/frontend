import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { DetailAction } from "../store/actions/detailAction"
import {
    Grid
} from "@material-ui/core"
// Components
import Layout from "../components/layout"
import Bread from "../components/main/section/breadcrumbs"
import ContactUs from "../components/main/section/contact"

const Contact = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailAction(false))
    } , [])
    return (
        <Layout>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <Bread />
                </Grid>
                <Grid item xs={12}>
                    <ContactUs />
                </Grid>
            </Grid>
        </Layout>
    )
}

export default Contact
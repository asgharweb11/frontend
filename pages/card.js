import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { DetailAction } from "../store/actions/detailAction"
import{
    Grid
} from "@material-ui/core"
// Components 
import Layout from "../components/layout"
import Bread from "../components/main/section/breadcrumbs"
import CardUser from "../components/main/section/card"
// Style
import style from "../styles/main/card.module.css"

const Card = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailAction(false))
    } , [])
    return (
        <Layout>
            <Grid container direction="row" justifu="center">
                <Grid className={style.card_main} item xs={12}>
                    <CardUser />
                </Grid>

            </Grid>
        </Layout>
        
    )
}

export default Card;
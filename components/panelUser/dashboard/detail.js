import { useState } from "react"
import {
    Grid,
    Typography,
    Card,
    CardActionArea
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
// import ChartApex from "react-apexcharts"
import Slider from "react-slick"
// Components 
import { color4 , colorRed , boxShadow} from "../styles/styles"
import Statistics from "./statistics"
import Chart from "./chart"
import SliderUsers from "./usersActivity"
import DataGrid from "./dataGrid"
// Styles 
import style from "../../../styles/panelUser/dashboard.module.scss"


const useStyles = makeStyles({
    chart_conatiner : {
        marginTop : 15
    }
})

const Detail = () => {
    const classes = useStyles()    

    return (
        <Grid className={classes.chart_conatiner} container direction="row" justify="flex-start" alignItems="flex-start" spacing={3}>
            <Grid className={style.chart_item} item xs={12}>
                <Statistics />
            </Grid>
            <Grid className={style.chart_item} item xs={12}>
                <Chart />
            </Grid>
            {/* <Grid className={style.chart_users} item md={4} sm={6} xs={12}>
                <SliderUsers />
            </Grid> */}
            <Grid item xs={12}>
                <DataGrid />
            </Grid> 
            <Grid item xs={12}>
                <DataGrid />
            </Grid>    
        </Grid>
    )
}

export default Detail
import {
    Grid , Button
} from "@material-ui/core"
import {
    makeStyles
} from "@material-ui/core/styles"
// Style
import style from "../../../../styles/main/card.module.css"

const useStyle = makeStyles({
    btnFooter : {
        color: "darkgrey",
        padding: "15px",
        borderRadius: "10px",
        background: "#e6e6e6",
        transition : "0.5s",
        "&:hover" : {
            color: "white",
            background: "#f97d7d"
        }
    }
})

const Footer = () => {
    const classes = useStyle()

    return (
        <Grid className={style.footer} container direction="row" justify="center">
            <Grid className={style.footer_box} item xs={12}>
                <Button className={classes.btnFooter}>برگشت به صفحه اصلی</Button>
            </Grid>
        </Grid>
    )
}


export default Footer
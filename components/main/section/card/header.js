import {
    Grid, Typography
} from "@material-ui/core"
// Styles
import style from "../../../../styles/main/card.module.css"

const Header = () => {
    return (
        <Grid className={style.header} container direction="row" justify="center">
            <Grid className={style.header_header} item xs={12}>
                <div className={style.header_photo}>
                    <img src="/profile/2.jpg" alt="سبد خرید" />
                </div>
                <div className={style.header_title}>
                    <Typography variant="h6" component="h1">پرداخت نهایی</Typography>
                    <Typography variant="caption" component="p">سبد خرید شما</Typography>
                </div>
            </Grid>
        </Grid>
    )
}

export default Header
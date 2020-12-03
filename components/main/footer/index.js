import Link from "next/link"
import {
    Grid,
    IconButton,
    Button
} from "@material-ui/core"
// Icons 
import {
    ArrowUpward,
    Instagram,
    Telegram
} from '@material-ui/icons';
import {makeStyles} from "@material-ui/core/styles"
// Styles
import style from "../../../styles/main/footer.module.css"

const useStyles = makeStyles({
    btnUp : {
        backgroundColor : "#ffffff"
    }
})

const Footer = () => {

    const classes = useStyles()

    return (
        <Grid className={style.footer_main} container justify="center" alignItems="center">
            <Grid className={style.footer_btnup} item xs={4}>
                <Button className={classes.btnUp} variant="contained">
                    <ArrowUpward />
                </Button>
            </Grid>
            <Grid className={style.footer_text} item xs={4}>
                <h4>Conpyright <span>Avin</span> 2020</h4>
            </Grid>
            <Grid className={style.footer_iconBtn} item xs={4}>
                <Link href="/">
                    <IconButton>
                        <Instagram />
                    </IconButton>
                </Link>
                <Link href="/">
                    <IconButton>
                        <Telegram />
                    </IconButton>
                </Link>
                    
                    
            </Grid>
        </Grid>
    )
}

export default Footer;
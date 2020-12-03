import {
    Grid, Typography , Button
} from "@material-ui/core"
import {
    makeStyles
} from "@material-ui/core/styles"
// Icons
import {
    MoreVert
} from '@material-ui/icons';
// Components
import Forms from "./forms";
import Upload from "./upload";
// Styles
import style from "../../../styles/panelUser/activeShop.module.scss"

const useStyles = makeStyles({
    header : {
        marginBottom : 20
    }
})

const ActiveShop = () => {
    const classes = useStyles();
    return (
        <div className={style.activeShop}>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={2}>
                <Grid className={classes.header} item xs={12}>
                    <div className={style.activeShop_header}>
                        <Typography variant="subtitle1" component="h1">اهراز هویت</Typography>
                        <MoreVert />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={style.text}>
                        <Typography variant="subtitle1" component="p">
                        در لیگ ها و جام های سراسر دنیا و البته جام جهانی 2018 روسیه شرکت کنید و برای روزها به گوشی میخکوب شوید! کارت زرد و قرمز، دکمه دویدن با سرعت بالا، نمایش مجدد با حرکت آهسته، برگردان، ضربات آزاد و استادیوم های جدید مواردی هستند که شاهد اضافه شدن شان در نسخه 2018 بازی هستیم و هیجان را بیش از پیش کرده است! امکان سفارشی سازی تیم ها و یا خرید بازیکن نیز برای شما فراهم شده است! دو حالت مختلف آنلاین و آفلاین در بازی Stickman Soccer 2018 به شما امکان سرگرم شدن را می دهند، 
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Forms />
                </Grid>
                <Grid item xs={6}>
                    <Upload />
                </Grid>
                <Grid item xs={12}>
                    <div className={style.submits}>
                        <Button variant="outlined" color="primary">ارسال اطلاعات</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default ActiveShop;
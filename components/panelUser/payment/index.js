import {
    Grid, Typography , TextField, Button
} from "@material-ui/core"
// Icons
import {
    MoreVert
} from '@material-ui/icons';
// Styles
import style from "../../../styles/panelUser/payment.module.scss"

const Payment = () => {
    return (
        <div className={style.payment}>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
                <Grid item xs={12}>
                    <div className={style.header}>
                        <MoreVert />
                        <Typography variant="subtitle1" component="h1">اطلاعات واریزی شما</Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={style.text}>
                        <Typography variant="subtitle1" component="p">
                        امکان سفارشی سازی تیم ها و یا خرید بازیکن نیز برای شما فراهم شده است! دو حالت مختلف آنلاین و آفلاین در بازی Stickman Soccer 2018 به شما امکان سرگرم شدن را می دهند، در حالت آفلاین می توانید با دوستان تان از طریق یک گوشی به رقابت بپردازید و در حالت آنلاین نیز قادرید در تورنومنت های اینترنتی شرکت کنید و به کسب دستاوردهای مختلف بپردازید!
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={style.forms}>
                        <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
                            <Grid item sm={6} xs={12}>
                                <TextField 
                                    label="شماره شبا"
                                    placeholder="لطفا شماره شبا حساب خود را وارد نمایید"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink : true
                                    }}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField 
                                    label="نام و نام خانوادگی"
                                    placeholder="لطفا نام صاحب شماره شبا را وارد نمایید"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink : true
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={style.submit}>
                        <Button variant="contained" color="primary">ارسال اطلاعات</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Payment;
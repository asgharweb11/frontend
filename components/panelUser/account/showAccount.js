import {
    Grid , Typography , ButtonGroup , Button
} from "@material-ui/core"
// Styles
import style from "../../../styles/panelUser/account.module.scss"


const ShowAccount = () => {
    return (
        <div className={style.show_main}>
            <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
                <Grid item xs={12}>
                    <div className={style.show_photo}>
                        <img src="/profile/1.jpg" alt="حساب شما" />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={style.show_texts}>
                        <Typography variant="subtitle1" component="h6">اصغر علی عبدی</Typography>
                        <Typography variant="caption" component="p">asgharweb11@gmail.com</Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={style.show_descript}>
                        <Typography variant="body1" component="p">
                        شاید فکر کنید پس سند باعث محدودیت در ساخت بازی می‌شود
                        و کمکی به روند توسعه نمی‌کند. این حرف هم می‌تواند درست و هم غلط باشد.
                        زیرا محدودیت‌ها همیشه باعث عدم توسعه بازی نمی‌شوند؛ بلکه گاهی آن را ساده‌تر می‌کنند
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={style.show_btns}>
                        <ButtonGroup disableElevation variant="contained" color="primary">
                            <Button color="primary">ویرایش اطلاعات</Button>
                            <Button color="secondary">تغییر پسورد</Button>
                        </ButtonGroup>

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default ShowAccount;
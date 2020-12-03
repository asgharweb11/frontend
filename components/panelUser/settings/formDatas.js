import {
    Grid, TextField , Button
} from "@material-ui/core"
import {
    makeStyles
} from "@material-ui/core/styles"
// Styles
import style from "../../../styles/panelUser/settings.module.scss"

const useStyles = makeStyles({
    formTitle : {
        marginBottom : 20
    }
});

const FormDatas = () => {

    const classes = useStyles()

    return (
        <div className={style.formDatas}>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
                <Grid className={classes.formTitle} item xs={12}>
                    <TextField
                        id="outline-full-width"
                        variant="outlined"
                        label="عنوان فروشگاه"
                        placeholder="عنوان فروشگاه"
                        defaultValue="دیوار اکانت"
                        InputLabelProps={{
                            shrink : true
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outline-full-width"
                        variant="outlined"
                        label="تلگرام"
                        placeholder="لینک تلگرام شما"
                        defaultValue="https://t.me/Modir_Web"
                        InputLabelProps={{
                            shrink : true
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outline-full-width"
                        variant="outlined"
                        label="اینستاگرام"
                        placeholder="لینک اینستاگرام شما"
                        defaultValue=""
                        InputLabelProps={{
                            shrink : true
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outline-full-width"
                        variant="outlined"
                        label="واتس آپ"
                        placeholder="لینک واتس آپ شما"
                        defaultValue=""
                        InputLabelProps={{
                            shrink : true
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <div className={style.formSubmit}>
                        <Button color="primary" size="large" variant="outlined" fullWidth>
                            ویرایش تغییرات
                        </Button>
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default FormDatas;
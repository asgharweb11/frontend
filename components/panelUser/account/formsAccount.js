import {
    Grid , Typography ,Card , CardActionArea , TextField
} from "@material-ui/core"
// Icons 
import {
    AccountBox
} from '@material-ui/icons';
import {
    makeStyles
} from "@material-ui/core/styles"
// Styles
import style from "../../../styles/panelUser/account.module.scss"

const useStyles = makeStyles({
    itemHeader : {
        width : "100%"
    },
    card : {
        boxShadow : "0px 0px black"
    },
    cardArea : {
        display : "flex",
        justifyContent : "flex-start",
        alignItems : "center",
        padding: 15
    }
})

const FormsAccount = () => {
    const classes = useStyles();

    return (
        <div className={style.show_main}>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={3}>
                <Grid className={classes.itemHeader} item xs={13}>
                    <div className={style.form_header}>
                        <Card className={classes.card}>
                            <CardActionArea className={classes.cardArea}>
                                <AccountBox />
                                <Typography variant="subtitle1" component="h1">حساب کاربری</Typography>
                            </CardActionArea>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-full-width"
                        label="Label"
                        placeholder="نام کاربری شما"
                        defaultValue="اصغر علی عبدی"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-full-width"
                        label="Label"
                        placeholder="ایمیل کاربر"
                        defaultValue="asgharweb11@gmail.com"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={10}
                        defaultValue="Default Value"
                        variant="outlined"
                        fullWidth
                    />

                </Grid>
            </Grid>
        </div>
    )
}

export default FormsAccount;
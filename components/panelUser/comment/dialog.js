import {
    Typography , Box , TextField
} from "@material-ui/core"
import {
    makeStyles
} from "@material-ui/core/styles"
// Styles
import {
    color
} from "../styles/styles"
import style from "../../../styles/panelUser/comments.module.scss"

const useStyles = makeStyles({
    comments_textDialog : {
        border : `1px solid ${color}`
    }
})

const Dialog = () => {

    const classes = useStyles();

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
        >
            <Box mb={2} width="100%" textAlign="left">
                <Typography color="primary" variant="body1" component="h6">توضیحات</Typography>
            </Box>
            <Box p={1}>
                <Typography color="textSecondary" variant="subtitle1" component="p">
                ببخشید به سوال خیلی خوشحال میشم جواب بدین
                <br/>
                برای چی یه سری بازی ها و برنامه ها نیست تو اپ استور درحالی که قبلا بوده مثلا ppsspp نرم افزار اجرای بازی های psp یا مثلا بازی مردعنکبوتی شگفت انگیز و بتمن و یه سری دیگه از بازی ها نیست خیلی اعصابه ادمو خورد میکنه من اگه اینا رو خواسته باشم باید چکار کنم ؟
                </Typography>
            </Box>
            <div className={style.commnet_textarea}>
                <TextField
                    fullWidth
                    placeholder="لطفا پاسخ خود را وارد نمایید"
                    label="پاسخ کامنت"
                    rows={8}
                    variant="outlined"
                    multiline
                    InputLabelProps={{
                        shrink : true
                    }}
                />
            </div>
        </Box>
    )
}

export default Dialog;
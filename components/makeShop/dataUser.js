import { useSelector } from "react-redux"
import {
    Grid, Typography
} from "@material-ui/core"
//Icons
import {
    AssignmentInd
} from '@material-ui/icons';
// Styles 
import style from "../../styles/makeShop/makeShop.module.scss"

const DataUser = () => {
    const { name , lastname , email , bio } = useSelector(state => state.Auth)

    return (
        <div className={style.dataUser}>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
                <Grid item xs={12}>
                    <div className={style.dataUser_header}>
                        <AssignmentInd />
                        <Typography variant="subtitle1" component="h1">اطلاعات حساب</Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={style.dataUser_photo}>
                        <img src="/profile/1.jpg" alt="پروفایل" />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={style.texts}>
                        <Typography variant="subtitle1" component="h3">{name}</Typography>
                        <Typography variant="caption" component="span">{email}</Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={style.descript}>
                        <Typography variant="subtitle1" component="h4">بیوگرافی شما</Typography>
                        <Typography variant="body1" component="p">
                            {bio ? bio : "شما برای حساب خود بیوگرافی ای تنظیم نکرده اید"}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default DataUser;
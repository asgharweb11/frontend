import { useState } from "react"
import {
    TextField, Grid, Typography
} from "@material-ui/core"
// Icons 
import {
    AssignmentInd
} from '@material-ui/icons';
// Styles
import style from "../../styles/makeShop/makeShop.module.scss"

const FormUser = ({changeValue , err , data}) => {

    const [status , setStatus] = useState({
        loading : false,
        spring : false,
        msg : '',
    })

    const handleChange = (key) => e => {
        changeValue(key , e.target.value);
    }


    return (
        <div className={style.fromUser}>
            <Grid container direction="row" justify="flex-space" alignItems="center" spacing={3}>
                <Grid item xs={12}>
                    <div className={style.fromUser_header}>
                        <AssignmentInd />
                        <Typography variant="subtitle1" component="h1">اطلاعات کاربری</Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        helperText={err.name !== "" ? err.name : ""}
                        error={err.name !== "" ? true : false}
                        defaultValue={data.name}
                        onChange={handleChange("name")}
                        label="نام"
                        placeholder="لطفا نام خود را وارد نمایید"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                            shrink : true
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        helperText={err.lastname !== "" ? err.lastname : ""}
                        error={err.lastname !== "" ? true : false}
                        defaultValue={data.lastname}
                        onChange={handleChange("lastname")}
                        label="نام خانوادگی"
                        placeholder="لطفا نام خانوادگی خود را وارد نمایید"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                            shrink : true
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        helperText={err.email !== "" ? err.email : ""}
                        error={err.email !== "" ? true : false}
                        defaultValue={data.email}
                        onChange={handleChange("email")}
                        label="ایمیل"
                        placeholder="لطفا ایمیل خود را وارد نمایید"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                            shrink : true
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        helperText={err.password !== "" ? err.password : ""}
                        error={err.password !== "" ? true : false}
                        defaultValue={data.password}
                        onChange={handleChange("password")}
                        label="پسورد"
                        placeholder="لطفا پسورد خود را وارد نمایید"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                            shrink : true
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        helperText={err.repassword !== "" ? err.repassword : ""}
                        error={err.repassword !== "" ? true : false}
                        defaultValue={data.repassword}
                        onChange={handleChange("repassword")}
                        label="تکرار پسورد"
                        placeholder="لطفا مجدد پسورد خود را وارد نمایید"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                            shrink : true
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default FormUser;
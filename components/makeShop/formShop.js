import { useState } from "react"
import {
    Grid, Typography , TextField , Box , IconButton , Button
} from "@material-ui/core"
import {
    makeStyles
} from "@material-ui/core"
// Icons
import {
    Storefront , PhotoCamera
} from '@material-ui/icons';
// Styles
import style from "../../styles/makeShop/makeShop.module.scss"

const useStyles = makeStyles({
    iconBtn : {
        background: "white",
        boxShadow: "0px 0px 10px #00000075",
        transition : "0.5s",
        "&:hover" : {
            background: "#f95786",
            color: "white"
        }
    }
})


const FormShop = ({changeValue , changeFiles , data , err}) => {
    const classes = useStyles();
    const boxs = [1,2,3,4]

    const [files , setFiles] = useState()
    const [status , setStatus] = useState({
        loading : false,
        spring : false,
        msg : '',
    })

    const handleChange = (key) => e => {
        // setData({...state , [key] : e.target.value});
        // setErr({...state , [key] : ""});
        changeValue(key , e.target.value);
    }

    const handleUpload = index => (e) => {
        if(e.target.files.length > 0){
            const reader = new FileReader()
            reader.onload = (read) => {
                const img = document.getElementById(`fileReader${index}`)
                img.src = read.target.result;
            }
            reader.readAsDataURL(e.target.files[0])

            changeFiles(index , e.target.files[0])
        }   
    }
    return (
        <div className={style.formShop}>
            <Grid container direction="row" justify="flex-start" alignItems="center" spacing={3}>
                <Grid item xs={12}>
                    <div className={style.formShop_header}>
                        <Storefront />
                        <Typography variant="subtitle1" component="h2">اطلاعات فروشگاه</Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        helperText={err.title !== "" ? err.title : ""}
                        error={err.title !== "" ? true : false}
                        defaultValue={data.title}
                        onChange={handleChange("title")}
                        label="عنوان فروشگاه"
                        placeholder="لطفا عنوان فروشگاه خود را با حروف انگلیسی تایپ کنید"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                            shrink : true
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        helperText={err.idshop !== "" ? err.idshop : ""}
                        error={err.idshop !== "" ? true : false}
                        defaultValue={data.idshop}
                        onChange={handleChange("idshop")}
                        label="آیدی فروشگاه"
                        placeholder="لطفا یک آیدی برای فروشگاه خود وارد نمایید"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                            shrink : true
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <div className={style.formShop_boxsUpload}>
                        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1}>
                            <Grid item xs={12}>
                                <div className={style.formShop_headerUpload}>
                                    <Typography variant="subtitle1" component="p">
                                        آپلود تصویر فروشگاه شما (الزامی نیست)
                                    </Typography>
                                </div>
                            </Grid>
                            
                            {
                                boxs.map((box , index) => {
                                    return (
                                        <Grid item sm={6} xs={12} key={index}>
                                            <div className={style.formShop_box}>
                                                <Box
                                                    position="absolute" top={0} left={0}
                                                    bottom={0} right={0} 
                                                    display="flex" justifyContent="center" alignItems="center" 
                                                    style={{background : "#ef39bc21"}}
                                                >
                                                    <Box onChange={handleUpload(index)} component="input" multiple display="none" type="file" id={`upload${index}`} />
                                                    <label htmlFor={`upload${index}`}>
                                                        <IconButton className={classes.iconBtn} component="span">
                                                            <PhotoCamera />
                                                        </IconButton>
                                                    </label>
                                                </Box>
                                                <div className={style.formShop_photo}>
                                                    <img id={`fileReader${index}`} src="/post/2.jpg" alt="آپلود تصویر فروشگاه" />
                                                </div>
                                            </div>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default FormShop;
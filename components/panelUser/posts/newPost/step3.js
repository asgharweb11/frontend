import {
    Box , Grid , Typography , Checkbox , Fade , LinearProgress 
} from "@material-ui/core"
import MuiAlert from "@material-ui/lab/Alert"
import { makeStyles } from "@material-ui/core/styles"
// Icons
import {
    CheckBox
} from '@material-ui/icons';
// Style 
import style from "../../../../styles/panelUser/addPost.module.scss"
import {
    colorGreen
} from "../../styles/styles"


const useStyles = makeStyles({
    input : {
        display : "none"
    },
    step1_uploadBtn : {
        background : "#f400bf30",
        borderRadius : 10
    },
    photo : {
        width : "100%",
        height : 190,
        borderRadius : 10
    },
    textarea : {
        height : 250
    },
    formControl : {
        "& li" : {
            justifyContent : "flex-end !important"
        }
    },
    iconUpload : {
        color : colorGreen
    }
})


const Step1 = ({detail , err , req , handleInput , handleErr , handleReq }) => {
    
    const classes = useStyles()
    const boxs = [1 , 2 , 3 , 4]

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const changeChecked = e => {
        handleInput("rules" , e.target.checked)
        handleReq("" , false , "error")
    }



    return (
        <div className={style.step1_main}>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
                {
                    req.msg !== '' && (
                        <Grid item xs={12}>
                            <Alert severity={req.color}>{req.msg}</Alert>
                        </Grid>
                    )
                }

                <Grid item xs={12}>
                    <Fade
                        in={req.status}
                        style={{
                            transitionDelay: req.status ? '800ms' : '0ms',
                        }}
                        unmountOnExit
                    >
                        <LinearProgress />
                    </Fade>
                </Grid>
                
                <Grid item xs={12}>
                    <Box 
                        className={style.step1_uploadFile}
                        flexDirection="column"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        p={1}
                    >
                        <div className={style.step2_textFile}>
                            <Typography variant="subtitle1" component="p">
                                طفا اطلاعات خود را درون یک فایل <span>txt</span> یا <span>zip</span> ذخیره کنید سپس آپلود کنید
                                <br />
                                لازم به ذکر میباشد اطلاعات شما بصورت رمزگذاری شده و امنیت قوی در 
                                <span> 
                                دیوار اکانت
                                </span> نگه داری میشود
                                <br />
                                پس ، از اطلاعات خود در سایت مضطرب نباشید
                            </Typography>
                        </div>
                        <Box 
                            component="div" 
                            display="flex" 
                            flexDirection="row" 
                            justifyContent="flex-start" 
                            alignItems="center" 
                            mt={1}
                        >
                            <Checkbox
                                // defaultChecked
                                checked={detail.rules}
                                onClick={changeChecked}
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            <Typography variant="body1" component="p">قوانین رو مطالعه کردم</Typography>
                        </Box>
                    </Box>
                </Grid>
            
            </Grid>
        </div>
    )

    
}

export default Step1;
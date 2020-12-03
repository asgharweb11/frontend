import { useEffect , useState } from "react"
import { useRouter} from "next/router"
import Link from "next/link"
import { useDispatch , useSelector } from "react-redux"
import fetch from "isomorphic-fetch"
import FormData from "form-data"
import {
    Grid , ButtonGroup , Button , LinearProgress
} from "@material-ui/core"
import MuiAlert from "@material-ui/lab/Alert"
import {
    makeStyles
} from "@material-ui/core/styles"
import { create } from 'jss';
import {StylesProvider , jssPreset , createMuiTheme, ThemeProvider} from "@material-ui/core/styles"
import rtl from 'jss-rtl';
// Method
import { validateEmail , userRegex } from "../../methods/validator"

// ------------------- Components ---------------------
import { Register , LoginMiddleWare } from "../../store/actions/auth"
import { CreateShop } from "../../store/actions/auth/shop"
// ----
import FormUser from "./formUser";
import FormShop from "./formShop";
import DataUser from "./dataUser"
// ------------------- Styles ---------------------
import style from "../../styles/makeShop/makeShop.module.scss"


const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
    makeShop_main : {
        position : "fixed",
        top : 0,
        left : 0,
        bottom : 0,
        right : 0,
        backgroundImage: "url(/background/background.jpeg)",
        backgroundSize: "cover",
        overflowY : "auto"
    },
    makeShop : {
        margin: "50px 0px",
        background: "white",
        boxShadow: "0px 5px 10px 0px rgb(15 15 15 / 30%)",
        borderRadius: "5px",
        padding: "10px",
        color: "rgb(63, 62, 62)",
        position : "relative",
    },
    formBtns : {
        borderTop : "1px solid #0000001a",
        marginTop: 25,
        padding: "15px !important"
    }
})

const theme = createMuiTheme({
    direction: 'rtl',
});

const MakeShop = () => {

    const dispatch = useDispatch()
    const { name , lastname , email } = useSelector(state => state.Auth)
    //-------------------------------------------------------------
    const classes = useStyles()
    //-------------------------------------------------------------
    const Router = useRouter()
    //-------------------------------------------------------------


    useEffect(() => {
        dispatch(LoginMiddleWare())
    } , [])


    const [data , setData] = useState({
        title : "",
        idshop : "",
        carsoul : {},
        name : '',
        lastname : '',
        email : '',
        password : '',
        repassword : '',
        files : []
    })

    const [err , setErr] = useState({
        title : '',
        idshop : '',
        carsoul : '',
        name : '',
        lastname : '',
        email : '',
        password : '',
        repassword : '',
        msg : '',
        loading : false,
        status : false,
        color : "error",
        success : false
    })


    const handChange = (key , value) => {
        setErr({...err , [key] : ""})
        setData({...data , [key] : value});
    }

    const handleFiles = (key , file) => {
        setData({...data , files : [
            ...data.files,
            file
        ]})
    }


    const handleSubmit = async () => {
        const txt = "این فیلد ضروری میباشد ، لطفا تکمیل نمایید";
        const txtIdshop = "آیدی فروشگاه شما باید بدون فاصله و با حروف لاتین شود";
        const txtEmail = "لطفا ایمیل صحیحی وارد نمایید";
        const txtPass = "پسورد شما نباید خالی یا کمتر از 6 کارکتر باشد !!"
        const txtEqul = "پسوردهای شما با هم مطابقت ندارند !!"

        if(data.title.length < 3){
            setErr({...err , title : txt})
            return false;
        }
        else if(data.idshop.length < 3 || !data.idshop.match(userRegex)){
            setErr({...err , idshop : txtIdshop})
            return false;
        }
        else if(data.name.length < 2 && !email){
            setErr({...err , name : txt})
            return false;
        }else if(data.lastname.length < 2 && !email){
            setErr({...err , lastname : txt})
            return false;
        }
        else if((data.email === "" || !validateEmail(data.email)) && !email){
            setErr({...err , email : txtEmail})
            return false;
        } else if((data.password === "" || data.password.length < 5) && !email){
            setErr({...err , password : txtPass })
            return false;
        } else if((data.repassword === "" || data.repassword !== data.password) && !email){
            setErr({...err , password : txtEqul , repassword : txtEqul})
            return false;
        }

        setErr({...err , loading : true , status : false , msg : "لطفا شکیبا باشید ..." , success : true})

        const statusUser = email ? true : false
        const formData = new FormData()
        formData.append('name', data.name.length > 2 ? data.name : name)
        formData.append('lastname', data.lastname.length > 2 ? data.lastname : lastname)
        formData.append('email', data.email.length > 4 ? data.email : email)
        formData.append('password', data.password.length > 4 ? data.password : "password")
        formData.append('title', data.title)
        formData.append('idshop', data.idshop)
        formData.append('status', statusUser)
        data.files.map(file => {
            formData.append('files', file)
            console.log("files : " , file)
        })
        
        const res = await fetch("/api/auth/makeshop" , {
            method : "POST",
            body : formData
        })

        const getData = await res.json()
        console.log("data : " , getData)
        if(getData.status === false){
            setErr({...err , loading : false , status : true , msg : getData.msg , color : "error" , success : false})
        }else {
            if(!email) {
                dispatch(Register(getData.user))
            }
            dispatch(CreateShop(getData.shop))
            setErr({...err , loading : false , status : true ,  msg : getData.msg , color : "success" , success : true})
            Router.push("/dashboard")
        }
    }

    return (
        <StylesProvider jss={jss}>
            <ThemeProvider theme={theme}>
                <div>
                    <Grid className={classes.makeShop_main} container direction="row" justify="center" alignItems="center">
                        <Grid className={classes.makeShop} item md={8} sm={10} xs={11}>
                            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={1}>
                                {
                                    err.loading && ( 
                                        <Grid item xs={12}>
                                            <LinearProgress />
                                        </Grid>
                                    )
                                }
                                {
                                    err.status && (
                                            <Grid item xs={12}>
                                                <Alert severity={err.color}>{err.msg}</Alert>
                                            </Grid>
                                        )
                                    
                                }
                                {/* ------------------------------------ */}
                                {
                                    email 
                                    ?   
                                        (
                                            <Grid item md={5} sm={6} xs={12}>
                                                <DataUser />
                                            </Grid>
                                        )
                                    :   // ----------------------------------
                                        (
                                            <Grid item md={5} sm={6} xs={12}>
                                                <FormUser changeValue={handChange} err={err} data={data}/>
                                            </Grid> 
                                        )
                                }
                                
                                <Grid item md={7} sm={6} xs={12}>
                                    <FormShop changeValue={handChange} changeFiles={handleFiles} err={err} data={data}/>
                                </Grid>
                                <Grid className={classes.formBtns} item xs={12}>
                                    <div className={style.btns}>
                                        <ButtonGroup>
                                            <Button onClick={() => (Router.push("/"))} variant="outlined" color="secondary">برگشت</Button>
                                            <Button onClick={handleSubmit} variant="outlined" color="primary" disabled={err.success}>ساخت فروشگاه</Button>
                                        </ButtonGroup>
                                    </div>
                                </Grid>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </ThemeProvider>
        </StylesProvider>
    )
}

export default MakeShop;
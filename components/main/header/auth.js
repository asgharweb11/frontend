import Link from "next/link"
import React , {useState} from "react"
import { useRouter } from "next/router"
import { useDispatch , useSelector } from "react-redux"
import fetch from "isomorphic-fetch"
import { API } from "../../../config"
import cookies from "js-cookie"
import {
    Grid,
    Button,
    IconButton,
    TextField,
    CircularProgress 
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {CSSTransition} from "react-transition-group"
// Components
import { Register } from "../../../store/actions/auth"
import { DetailAction , SetMessage } from "../../../store/actions/detailAction"
import { validateEmail } from "../../../methods/validator"
//Style
import style from "../../../styles/main/header.module.css"
// Icons 
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyle = makeStyles({
    submit : {
        background: "rgb(241,84,84)",
        background: "linear-gradient(225deg, rgba(241,84,84,1) 0%, rgba(122,128,182,1) 100%)",
        borderRadius: "25px"
    },
    textField : {
        "& p" : {
            color : "red"
        }
    },
    icon : {
        margin: "5px",
        color: "#ffffff",
        background: "#f95959"
    }
})

const Auth = ({fun , display}) => {

    const Router = useRouter()
    const dispatch = useDispatch();
    const Auth = useSelector(state => state.Auth)
    const detail = useSelector(state => state.DetailAction)
    const classes = useStyle();
    const [login , setLogin] = useState('flex')
    const [register , setRegister] = useState('none')


    const handleOpenClose = () => {
        fun();
    }

    const handleAuth = authen => e => {
        if(authen === "login"){
            setLogin('none');
            setRegister("flex"); 
        } else {
            setLogin('flex');
            setRegister("none"); 
        }
    }

    // ---------------------- Values Forms
    const [form , setForm] = useState({
        name : "",
        lastname : "",
        email : "",
        password : "",
        repassword : ""
    })
    const [formErr , setFormErr] = useState({
        name : "",
        lastname : "",
        email : "",
        password : "",
        repassword : ""
    })
    const [loading , setLoading] = useState({
        spring : false,
        msg : "",
        color : "red",
        submit : false
    })

    const HandleChange = name => (e) => {
        setForm({...form , [name] : e.target.value})
        setFormErr({...formErr , [name] : ""})
    }

    // Create Account
    const handleSubmit = async () => {
        
        if(loading.spring === true){
            return false;
        }

        const text = "این فیلد ضروری میباشد ، لطفا تکمیل نمایید";
        setFormErr({
            name : (form.name === "" ? text : ""),
            lastname : (form.lastname === "" ? text : ""),
            email : (form.email === "" ? text : ""),
            password : (form.password === "" ? text : ""),
            repassword : (form.repassword === "" ? text : "")
        })

        if(!validateEmail(form.email)) {
            const textEmail = "لطفا ایمیل صحیحی وارد نمایید"
            setFormErr({...formErr , email : textEmail})
            return false;
        }
        if(form.password !== form.repassword){
            const textPass = "پسورد شما با هم مطابقت ندارد"
            setFormErr({...formErr , password : textPass , repassword : textPass})
            return false;
        }
        

        if((form.name && form.lastname && form.email && form.password && form.repassword) !== ""){

            setLoading({...loading , spring : true , msg : "" , submit : true})

            const response = await fetch(`${API}/api/auth/register` , {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(form)
            })

            const data = await response.json()
            if(data.status === true){

                setLoading({...loading , spring : false , msg : data.msg , color : "#36a910" , submit : true})

                const DataMsg = {
                    error : false,
                    loading : false,
                    color : "default", // Green
                    msg : data.msg
                }
                dispatch(Message(DataMsg))
                dispatch(Register(data.data))
                Router.push("/dashboard")
            } else {
                setLoading({...loading , spring : false , msg : data.msg , color : "red" , submit : false})
            }
        }
        

    }

    const ClickLogin = async () => {
        if(!validateEmail(form.email)) {
            const textEmail = "لطفا ایمیل صحیحی وارد نمایید"
            setFormErr({...formErr , email : textEmail})
            return false;
        }
        else if(form.email === "" ){
            const textEmail = "ایمیل شما نباید خالی باشد"
            setFormErr({...formErr , email : textEmail})
            return false;
        }
        else if(form.password === "" || form.password.length < 5){
            const textPass = "پسورد نباید خالی و کمتر از 6 کارکتر باشد !!"
            setFormErr({...formErr , password : textPass})
            return false;
        }

        setLoading({...loading , spring : true , msg : "" , submit : true})

        const DataLogin = {
            email : form.email,
            password : form.password
        }

        const reslogin = await fetch(`${API}/api/auth/login` , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(DataLogin)
        })

        const datalogin = await reslogin.json()
        console.log("data : " , datalogin)
        if(datalogin.status === true){
            setLoading({...loading , spring : false , msg : datalogin.msg , color : "#36a910" , submit : true})

            const DataMsg = {
                bg : 'success',
                color : "default", // Green
                msg : datalogin.msg
            }

            dispatch(SetMessage(DataMsg))
            dispatch(Register(datalogin.data))
            Router.push("/dashboard")
        } else {
            setLoading({...loading , spring : false , msg : datalogin.msg , color : "red" , submit : false})
        }
        
    }

    return (
        <CSSTransition in={display} timeout={200} unmountOnExit classNames={{
            enter: style.fade_enter,
            enterActive: style.fade_active_enter,
            exit: style.fade_exit,
            exitActive: style.fade_active_exit,
        }}>
            <div className={style.auth_container}>
                {/* Panel Login */}
                <Grid container justify="center" alignItems="center" style={{"display" : login}}>
                    <Grid item className={style.auth_auth} lg={3} md={4} sm={5} xs={10}>
                        <form>
                            <div className={style.auth_btnClose}>
                                <IconButton onClick={handleOpenClose}>
                                    <HighlightOffIcon />
                                </IconButton>
                            </div>
                            <div className={style.auth_title}>
                                <h3>ورود به حساب</h3>
                            </div>
                            <div className={style.auth_inputs}>
                                <Grid className={style.auth_field} container spacing={1} alignItems="flex-end">
                                    <TextField
                                        error={formErr.email !== "" ? true : false}
                                        className={classes.textField}
                                        defaultValue={form.email}
                                        onChange={HandleChange("email")}
                                        label="ایمیل"
                                        type="email"
                                        style={{ margin: 8 }}
                                        placeholder="لطفا ایمیل خود را وارد نمایید"
                                        helperText={formErr.email}
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid className={style.auth_field} container spacing={1} alignItems="flex-end">
                                    <TextField
                                        error={formErr.password !== "" ? true : false}
                                        className={classes.textField}
                                        defaultValue={form.password}
                                        onChange={HandleChange("password")}
                                        label="پسورد"
                                        type="password"
                                        style={{ margin: 8 }}
                                        placeholder="لطفا پسورد خود را وارد نمایید"
                                        helperText={formErr.password}
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                            </div>
                            <div className={style.auth_forgetpass}>
                                <Link href="/"><a>رمزتان را فراموش کرده اید ؟</a></Link>
                            </div>
                            <div className={style.auth_submit}>
                                <Button className={classes.submit} onClick={ClickLogin} fullWidth variant="contained" color="primary" disabled={loading.submit ? true : false}>
                                    ورود
                                </Button>
                            </div>
                            <div className={style.auth_signInBy}>
                                {
                                    loading.spring 
                                    ? 
                                        (<CircularProgress />)
                                    :   
                                        (<p style={{color : loading.color}}>{loading.msg}</p>)
                                }
                            </div>

                            <div className={style.auth_SignUp}>
                                <p>حساب کاربری ندارید ؟</p>
                                <a onClick={handleAuth("login")}>ساخت حساب</a>
                            </div>
                    
                        </form>
                            
                    </Grid>
                </Grid>
                {/* Panel Register */}
                <Grid container justify="center" alignItems="center" style={{"display" : register}}>
                    <Grid item className={style.auth_auth} sm={6} xs={10}>
                        <form>
                            <div className={style.auth_btnClose}>
                                <IconButton onClick={handleOpenClose}>
                                    <HighlightOffIcon />
                                </IconButton>
                            </div>
                            <div className={style.auth_title}>
                                <h3>ساخت حساب</h3>
                            </div>
                            <Grid container className={style.auth_inputs} spacing={1} justify="center" alignItems="flex-end">
                                <Grid className={style.auth_field} item md={6} xs={12} >
                                    <TextField
                                        error={formErr.name !== "" ? true : false}
                                        className={classes.textField}
                                        defaultValue={form.name}
                                        onChange={HandleChange("name")}
                                        label="نام"
                                        style={{ margin: 8 }}
                                        placeholder="لطفا نام خود را وارد نمایید"
                                        helperText={formErr.name}
                                        fullWidth
                                        type="text"
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        />
                                </Grid>
                                <Grid className={style.auth_field} item md={6} xs={12} >
                                    <TextField
                                        error={formErr.lastname !== "" ? true : false}
                                        className={classes.textField}
                                        defaultValue={form.lastname}
                                        onChange={HandleChange("lastname")}
                                        label="نام خانوادگی"
                                        type="text"
                                        style={{ margin: 8 }}
                                        placeholder="لطفا نام خانوادگی خود را وارد نمایید"
                                        helperText={formErr.lastname}
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        />
                                </Grid>
                                <Grid className={style.auth_field} item xs={12} >
                                    <TextField
                                        error={formErr.email !== "" ? true : false}
                                        className={classes.textField}
                                        defaultValue={form.email}
                                        onChange={HandleChange("email")}
                                        label="ایمیل"
                                        type="email"
                                        style={{ margin: 8 }}
                                        placeholder="لطفا ایمیل خود را وارد نمایید"
                                        helperText={formErr.email}
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid className={style.auth_field} item md={6} xs={12} >
                                    <TextField
                                        error={formErr.password !== "" ? true : false}
                                        className={classes.textField}
                                        defaultValue={form.password}
                                        onChange={HandleChange("password")}
                                        label="پسورد"
                                        type="password"
                                        style={{ margin: 8 }}
                                        placeholder="لطفا پسورد خود را وارد نمایید"
                                        helperText={formErr.password}
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        />
                                </Grid>
                                <Grid className={style.auth_field} item md={6} xs={12} >
                                    <TextField
                                        error={formErr.repassword !== "" ? true : false}
                                        className={classes.textField}
                                        defaultValue={form.repassword}
                                        onChange={HandleChange("repassword")}
                                        label="تکرار پسورد"
                                        type="password"
                                        style={{ margin: 8 }}
                                        placeholder="لطفا مجدد پسورد خود را وارد نمایید"
                                        helperText={formErr.repassword}
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        />
                                </Grid>
                            </Grid>
                            <div className={style.auth_submitRegister}>
                                <Button onClick={handleSubmit} className={classes.submit} fullWidth variant="contained" color="primary" disabled={loading.submit ? true : false}>
                                    ساخت حساب
                                </Button>
                            </div>
                            <div className={style.auth_signInBy}>
                                {
                                    loading.spring 
                                    ? 
                                        (<CircularProgress />)
                                    :   
                                        (<p style={{color : loading.color}}>{loading.msg}</p>)
                                }
                            </div>
                            <div className={style.auth_SignUp}>
                                <p>من حساب کاربری دارم</p>
                                <a onClick={handleAuth("register")}>ورود به حساب</a>
                            </div>
                    
                        </form>
                            
                    </Grid>
                </Grid>
            
            </div>
        </CSSTransition>
    )
}

export default Auth;

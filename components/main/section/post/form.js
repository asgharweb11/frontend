import {useState} from "react"
import fetch from "isomorphic-fetch"
import {API , XTOKEN} from "../../../../config"
import {useSelector} from 'react-redux'
import { 
    Grid, Typography, Button , CardMedia , TextField , FormHelperText
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
// Icons
import {Send} from '@material-ui/icons';
// Styles
import style from "../../../../styles/main/post.module.css"


const useStyles = makeStyles({
    form : {
        position: "relative",
        boxShadow: "-1px 2px 5px #ececec"
    },
    form_in : {
        background: "white",
    },
    form_textfield : {
        width : "100%"
    },
    btnSend : {
        background: "#ff7ed0",
        "&:hover" : {
            background : "#ff8ec0"
        }
    }
})

const Form = ({data , handlePush}) => {
    const classes = useStyles()
    const {name , lastname , email , photo} = useSelector(state => state.Auth)
    const [datas , setDatas] = useState({
        text : '',
        status : false,
        loading : false
    })
    const [err , setErr] = useState()

    const handleChange = (e) => {
        setDatas({...datas,text:e.target.value})
        setErr('')
    }
    
    const handleClick = async () => {
        if(datas.text === ''){
            return setErr('لطفا توضیحات خود را وارد نمایید')
        } else if(datas.text.length < 10){
            return setErr('توضیحات شما نباید کمتر از 10 کارکتر باشد !')
        }
        console.log('post_id : ' , data._id)
        const resData = {
            post_id : data._id,
            text : datas.text,
            email,
            has_shop : false
        }
        const sendComment = await fetch(`${API}/api/comment` , {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(resData)
        })

        const detail = await sendComment.json()
        console.log('detail : ' , detail)
        if(detail.status === true){
            handlePush({
                name,
                lastname,
                email,
                photo,
                text : detail.data.text,
                date : detail.data.date
            })
        } else {
            setErr(detail.msg)
        }

    }

    return (
        <Grid className={classes.form} container direction="row" justify="center">
            <Grid className={classes.form_in} item xs={12}>
                <div className={style.form_header}>
                    <Typography variant="subtitle1" component="h6">
                        کامنت گذاری
                    </Typography>
                </div>
                <div className={style.form_input}>
                    <textarea rows="10" cols="5" onChange={handleChange} value={datas.text} placeholder="لطفا متن خود را وارد نمایید"></textarea>
                    <FormHelperText style={{color : 'red'}}>{err !== '' && err}</FormHelperText>
                </div>
                <div className={style.form_send}>
                    <Button onClick={handleClick} className={classes.btnSend} variant="contained" color="primary">
                        <Send />
                        ارسال
                    </Button>
                </div>
            </Grid>
        </Grid>
    )
}

export default Form
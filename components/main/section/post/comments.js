import {useState} from "react"
import { useSelector } from 'react-redux'
import fetch from 'isomorphic-fetch'
import {API} from "../../../../config"
import {
    Grid, Typography, Button , FormHelperText
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core"
import style from "../../../../styles/main/post.module.css"
// ------------ SnackBar ----------
import {AlertComp} from "../../../others/snackbar"
// ----------------- Methods ----------------------

const useStyles = makeStyles({
    sendCom : {
        color: "#545454",
        background: "white"
    },
    boxTextAnswer_send : {
        color: "#ffffff",
        background: "#ff6b6b",
        boxShadow: "0 0 black",
        marginLeft: "10px",
        "&:hover" : {
            background : "#ff5b5b"
        }
    }
})


const Comments = ({data , comments , editComm}) => {
    // console.log('comments : ' , comments)
    const {name , lastname , email , photo} = useSelector(state => state.Auth)
    const classes = useStyles()

    const [err , setErr] = useState({
        msg : '',
        color : 'error'
    })


    const handleAnswer = (index , index2) => e => {
        let getElement;
        if(index2 === undefined){
            getElement = document.getElementById(`boxAnswer${index}`)
        } else {
            getElement = document.getElementById(`boxAnswer${index}-${index2}`)
        }
        const status = getElement.style.display;
        if(status === '' || status === 'none'){
            getElement.style.display = 'block'
            e.target.innerHTML = 'بستن'
        } else {
            getElement.style.display = 'none'
            e.target.innerHTML = 'پاسخ'
        }
    }

    

    const handleSubmit = (index , id , index2) => async e => {
        let text;
        if(index2 === undefined){
            text = document.getElementById(`textarea${index}`)
        } else {
            console.log('index1 : ' , index , ' index2 : ' , index2)
            text = document.getElementById(`textarea${index}-${index2}`)
        }
        console.log('value : ' , text.value)
        if(text.value.length < 10){
            setErr({...err , msg : 'توضیحات شما باید بیشتر از 10 کارکتر باشد !'})
            return false;
        }
        
        if(!email || email === undefined ){
            setErr({...err , msg : 'برای ارسال کامنت باید حساب داشته باشید !'});
            return false;
        }
        const setData = {
            name,
            lastname,
            email,
            photo,
            id,
            post_id : data._id,
            text : text.value
        }

        const res = await fetch(`${API}/api/comment/answer` , {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(setData)
        })

        const {status , msg , data : detail} = await res.json()
        
        if(status === true){
            const topCom = comments.filter(item => item.id == detail.top_id) // get comment for answer
            const filter = comments.filter(item => item.id != detail.top_id)
            console.log('get comment : ' , topCom)
            let sub = {
                name : detail.name,
                lastname : detail.lastname,
                email : detail.email,
                photo : detail.photo,
                id : detail._id,
                text : detail.text,
                date : detail.date,
            }
            let editCommet = {
                name : topCom[0].name,
                lastname : topCom[0].lastname,
                email : topCom[0].email,
                photo : topCom[0].photo,
                id : topCom[0].id,
                text : topCom[0].text,
                date : topCom[0].date,
                sub_comments : topCom[0].sub_comments !== undefined ? [...topCom[0].sub_comments , sub] : [sub]
            }

            filter.push(editCommet)
            console.log('filter : ' , filter)

            editComm(filter)
        } else {
            setErr({...err , msg})
        }
        // console.log('res : ' , await res.json())
    }

    return (
        <Grid className={style.comments} container direction="row" justify="center">
            {
                comments.sort(function (a,b){ return b - a}).map((item , index) => {
                    console.log('date item : ' , item.date)
                    return (
                        <Grid className={style.comment} item xs={12} key={index}>
                            <div className={style.commentDetail}>
                                <div className={style.profile}>
                                    <img src="/profile/3.jpg" alt="user" />
                                    <div className={style.proText}>
                                        <Typography variant="subtitle1" component="h6">{item.name}</Typography>
                                        <Typography variant="caption" component="span">{item.date}</Typography>
                                    </div>
                                </div>
                                <div className={style.text}>{item.text}</div>
                                <div className={style.sendComment}>
                                    <Button className={classes.sendCom} onClick={handleAnswer(index)} variant="contained">پاسخ</Button>
                                </div>
                                <div id={`boxAnswer${index}`} className={style.boxTextAnswer}>
                                    <div className={style.boxTextAnswer_textarea}>
                                        <textarea onChange={e => setErr({...err,msg:''})} id={`textarea${index}`} placeholder="لطفا پاسخ خود را وارد نمایید"></textarea>
                                        {/* <FormHelperText style={{color : 'red'}}>{err}</FormHelperText> */}
                                        {
                                            err.msg !== '' ? 
                                                (<AlertComp msg={err.msg} color={err.color}/>)
                                            : ''
                                        }
                                    </div>
                                    <div className={style.boxTextAnswer_send}>
                                        <Button onClick={handleSubmit(index , item.id)} className={classes.boxTextAnswer_send} variant="contained">
                                            ارسال پاسخ
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            {
                                item.sub_comments && (
                                    <Grid className={style.answer} container direction="row" justify="flex-start">
                                        {
                                            
                                            item.sub_comments.map((item2 , index2) => {
                                                // console.log('index2 : ' , index2)
                                                // console.log('key : ' , key)
                                                return (
                                                    <Grid className={style.answer_comment} item xs={12} key={index2}>
                                                        <div className={style.commentDetail}>
                                                            <div className={style.profile}>
                                                                <img src="/profile/4.jpg" alt="user" />
                                                                <div className={style.proText}>
                                                                    <Typography variant="subtitle1" component="h6">
                                                                        {item2.name}
                                                                    </Typography>
                                                                    <Typography variant="caption" component="span">
                                                                        {item2.date}
                                                                    </Typography>
                                                                </div>
                                                            </div>
                                                            <div className={style.text}>
                                                                {item2.text}
                                                            </div>
                                                            <div className={style.sendComment}>
                                                                <Button onClick={handleAnswer(index,index2)} className={classes.sendCom} variant="contained">پاسخ</Button>
                                                            </div>
                                                            <div id={`boxAnswer${index}-${index2}`} className={style.boxTextAnswer}>
                                                                <div className={style.boxTextAnswer_textarea}>
                                                                    <textarea onChange={e => setErr({...err,msg:''})} id={`textarea${index}-${index2}`} placeholder="لطفا پاسخ خود را وارد نمایید"></textarea>
                                                                </div>
                                                                <div className={style.boxTextAnswer_send}>
                                                                    <Button onClick={handleSubmit(index , item.id , index2)} className={classes.boxTextAnswer_send} variant="contained">
                                                                        ارسال پاسخ
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                    
                                                )
                                            })
                                        }
                                        
                                    </Grid>
                                )
                            }
                            
                        
                        </Grid>
                    )
                })
            }

        
        </Grid>
    )
}

export default Comments;
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import cookie from 'js-cookie'
// import PayIr from 'payir'
import fetch from "isomorphic-fetch"
import { API } from '../../../../config'
import { toman } from "../../../../methods/validator"
import { motion } from 'framer-motion'
import {
    Grid , Typography , Card , CardActionArea, Button
} from "@material-ui/core"
import MuiAlert from "@material-ui/lab/Alert"
import {
    makeStyles
} from "@material-ui/core/styles"
// Icons
import {
    Payment
} from '@material-ui/icons';
// Style
import style from "../../../../styles/main/card.module.css"


const useStyles = makeStyles({
    card : {
        boxShadow : "-1px 2px 5px rgb(216 216 216)"
    },
    cardArea : {
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    btnBuy : {
        color : "white",
        background : "#ffaaaa",
        "&:hover" : {
            background : "#fb7c7c"
        }
    }
})

const Pay = ({itemShop}) => {
    const router = useRouter()
    const classes = useStyles()
    const { email } = useSelector(state => state.Auth)
    //const [isOpen , setIsOpen] = useState(false)
    const [message , setMessage] = useState({
        status : false,
        loading : false,
        msg : '',
        isOpen : false,
        color : 'error'
    })

    let total = 0;
    cookie.get('card') !== undefined && itemShop.map(item => {
        total += Number(item.price) * Number(item.number)
    })

    const handleSubmit = price => async () => {

        if(!email){
            setMessage({...message , isOpen : true , msg : 'برای خرید ، شما نیاز به یک حساب دارید !!' , status : false , color : 'error'}) 
            return false;
        }
        
        setMessage({...message , isOpen : true , msg : 'در حال انتقال به درگاه پرداخت ...' , status : true , color : 'warning'})
        const dataPro = {
            products : [...itemShop],
            email
        }
        const res = await fetch(`${API}/payment` , {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(dataPro)
        })
        const {status , trandId , link , data , msg} = await res.json()
        if(status === true){
            cookie.set('buy' , data , {expires : 1})
            router.push(link)
        } else {
            setMessage({...message , isOpen : true , msg , status : false , color : 'error'})
        }
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const variants = {
        open : {opacity : 1 , scale : 1},
        close : {opacity : 0 , scale : 0.9}
    }
    return (
        <Grid className={style.pay_box} container direction="row" justify="center">
            <Grid item xs={12}>
                <motion.div
                    animate={message.isOpen ? 'open' : 'close'}
                    variants={variants}
                >
                    <Alert severity={message.color}>{message.msg}</Alert>
                </motion.div>
            </Grid>
            <Grid className={style.pay_pay} item xs={12}>
                <motion.div
                    initial={{scale : 0}}
                    animate={{scale : 1}}
                    transition={{
                        type : 'spring',
                        stiffness : 260,
                        damping : 20
                    }}
                >
                    <Card className={`${style.pay_card} ${classes.card}`}>
                        <CardActionArea className={classes.cardArea}>
                            <div className={style.pay_photo}>
                                <img src="/profile/4.jpg" alt="zarinpal" />
                            </div>
                            <div className={style.pay_title}>
                                <Typography variant="subtitle1" component="h3">Payir</Typography>
                                <Typography variant="caption" component="p">درگاه پرداخت مطمعن</Typography>
                            </div>
                            <div className={style.pay_price}>
                                <Typography variant="subtitle2" component="p">مجموع :</Typography>
                                <Typography variant="subtitle2" component="p">{toman(total)} تومان</Typography>
                            </div>
                        </CardActionArea>
                        <div className={style.pay_buy}>
                            <Button onClick={handleSubmit(total)} className={classes.btnBuy} fullWidth>
                                <Payment />
                                <Typography variant="subtitle1" component="p">
                                    پرداخت
                                </Typography>
                            </Button>
                        </div>
                    </Card>
                </motion.div>
            </Grid>
        </Grid>
    )
}

export default Pay
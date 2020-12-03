import Link from "next/link"
import React from "react"
import {
    Paper,
    Grid,
    IconButton,
    Button,
} from "@material-ui/core"
// Icons
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {CSSTransition} from "react-transition-group"
//Style 
import style from "../../../styles/main/header.module.css"
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
    cart_paper : {
        boxShadow : "0px 0px 5px #e2e2e2"
    },
})
const Cart = ({name}) => {

    return (
        <CSSTransition in={name} timeout={100} unmountOnExit classNames={{
            enter: style.fade_enter,
            enterActive: style.fade_active_enter,
            exit: style.fade_exit,
            exitActive: style.fade_active_exit,
        }}>
            <div className={style.cart_container}>
                <Paper className={style.cart_paper}>
                    <Grid container direction="row" justify="flex-end" alignItems="flex-end">
                        <Grid className={style.cart_cart} item xs={12}>
                            <div className={style.cart_remove}>
                                <IconButton color="secondary">
                                    <DeleteForeverIcon />
                                </IconButton>
                            </div>    
                            <div className={style.cart_detail}>
                                <div className={style.cart_photo}>
                                    <img src="/post/2.jpg" alt="post" />
                                </div>
                                <div className={style.cart_texts}>
                                    <h5>Title Post asd a sd asd  sdf sdf sd</h5>
                                    <p>قیمت : <span>$26.000.000 T</span></p>
                                    <p>تعداد : <span>2</span></p>
                                </div>
                            </div>
                        </Grid>    

                        <Grid className={style.cart_cart} item xs={12}>
                            <div className={style.cart_remove}>
                                <IconButton color="secondary">
                                    <DeleteForeverIcon />
                                </IconButton>
                            </div>    
                            <div className={style.cart_detail}>
                                <div className={style.cart_photo}>
                                    <img src="/post/2.jpg" alt="post" />
                                </div>
                                <div className={style.cart_texts}>
                                    <h5>Title Post</h5>
                                    <p>قیمت : <span>$2500 T</span></p>
                                    <p>تعداد : <span>2</span></p>
                                </div>
                            </div>
                        </Grid>    
                    </Grid> 

                    <Grid className={`${style.cart_cart} ${style.cart_pay}`} item xs={12}>
                        <div className={style.cart_btns}>
                            <Link href="/card">
                                <Button variant="contained" color="secondary">
                                    پرداخت
                                </Button>
                            </Link>
                        </div>
                        <div className={style.cart_total}>
                            <p>مجموع : <br/><span>26.002.500 تومان</span></p>
                        </div>
                    </Grid>
                </Paper>
            </div>
        </CSSTransition>
    )

}

export default Cart;
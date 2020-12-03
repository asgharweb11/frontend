import { useEffect , useState } from 'react'
import { API } from "../../../../config"
import cookie from "js-cookie"
import { toman } from "../../../../methods/validator"
import {
    Grid , IconButton , Typography
} from "@material-ui/core"
// Icons
import {
    Cancel,
    AttachMoney
} from "@material-ui/icons"

// Style
import style from "../../../../styles/main/card.module.css"


const Products = ({itemShop , handleChange , handleRemove}) => {
    
    //const itemShop = cookie.get('card') && JSON.parse(cookie.get('card'))

    const [card , setCard] = useState(itemShop)

    console.log('card product : ' , itemShop)

    const changeNumber = (item , id) => e => {

        if(e.target.value > 0){
        
            const filter = itemShop.filter((item , index) => index !== id) 
            const push = [...filter , {
                id : item.id,
                idshop : item.idshop,
                title : item.title,
                photo : item.photo,
                price : item.price,
                number : e.target.value
            }];
            // setCard(push)
            cookie.set('card' , push , {expires : 1})
            handleChange(push)
        }
    }

    const handleDelete = id => e => {

        const deleteItem = itemShop.filter((item , index) => index !== id)
        // setCard(deleteItem)
        cookie.set('card' , deleteItem , {expires : 1})
        handleRemove(deleteItem)
    }

    return (
        <Grid container direction="row" justify="center">
            {
                cookie.get('card') !== undefined 
                ?
                    itemShop.sort(function (a , b){
                        const idA = a.id;
                        const idB = b.id;
                        return idA - idB;
                    }).map((item , index) => {


                        return (
                            <Grid className={style.body_product} item xs={12} key={index}>
                            <div className={style.body_close}>
                                <IconButton onClick={handleDelete(index)}>
                                    <Cancel />
                                </IconButton>
                            </div>
                            <div className={style.body_product_detail}>
                                <div className={style.body_product_photo}>
                                    <img src={`${API}/detail/files/${item.idshop}/${item.photo}`} alt="post" />
                                </div>
                                <div className={style.body_product_other}>
                                    <div className={style.body_product_title}>
                                        <Typography variant="subtitle2" component="h2">{item.title}</Typography>
                                    </div>
                                    <div className={style.body_product_detailBuy}>
                                        <div className={style.body_product_number}>
                                            <input type="number" value={item.number}/>
                                            <Typography variant="caption" component="span">تعداد</Typography>
                                        </div>
                                        <div className={style.body_product_price}>
                                            <Typography variant="caption" component="span">{toman(item.price)} تومان</Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        )
                    })
                :
                    'سبد خرید شما خالی میباشد !!'


            }

            
        </Grid>
    )
    
}

export default Products
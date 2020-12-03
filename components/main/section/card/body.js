import React , {useState , useEffect} from "react"
import cookie from "js-cookie"
import {
    Grid
} from "@material-ui/core"
// Components
import Products from "./products"
import Pay from "./pay"
// Style
import style from "../../../../styles/main/card.module.css"

const Body = () => {

    const [card , setCard] = useState(cookie.get('card') && JSON.parse(cookie.get('card')))

    console.log('card : ' , card)
    const handleChange = (items) => {
        setCard(items)
    }

    const handleRemove = (items) => {
        setCard(items)
    }
    
    return(
        <Grid container direction="row" justify="center" spacing={3}>
            <Grid className={style.body_products} item md={8} xs={12}>
                <Products itemShop={card} handleChange={handleChange} handleRemove={handleRemove}/>
            </Grid>
            <Grid className={style.body_pay} item md={4} xs={12}>
                <Pay itemShop={card}/>
            </Grid>
        </Grid>
    )
}

export default Body;
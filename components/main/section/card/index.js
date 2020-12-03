import React from "react"
import {
    Grid
} from "@material-ui/core"
// Components
import Header from "./header"
import Footer from "./footer"
import Body from "./body"
// Style
import style from "../../../../styles/main/card.module.css"

const Card = () => {
    return(
        <React.Fragment>
            <Header />
            <Grid className={style.body} container direction="row" justify="center">
                <Grid className={style.body_body} item sm={10} xs={11}>
                    <Body />
                </Grid>
            </Grid>
            <Footer />
        </React.Fragment>
    )
}

export default Card
import {useState} from "react"
import {
    Grid,
    InputBase
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import style from "../../../styles/main/header.module.css"
import {CSSTransition} from "react-transition-group"

const useStyle = makeStyles({
    title : {
        background : "white",
        padding : "0px 5px",
    },
    select : {
        direction : "rtl",
        "& fieldset" : {
            border: "1px solid #ececec",
            direction: "rtl",
            "&:hover" : {
                border : "1px solid red"
            }
        },
        "& ul" : {
            direction : "rtl"
        }
    }

})


const Search = ({display}) => {

    const classes = useStyle()


    return (
        <CSSTransition in={display} timeout={200} classNames={{
            enter: style.fade_enter,
            enterActive: style.fade_active_enter,
            exit: style.fade_exit,
            exitActive: style.fade_active_exit,
        }} unmountOnExit>
            <div className={style.search_main} >
                <Grid container direction="row" justify="flex-start" alignItems="center">
                    <Grid className={style.search_input} item xs={12}>
                        <InputBase
                            fullWidth
                            placeholder="عبارت خود را برای جستجو وارد نمایید ..."
                            inputProps={{ 'aria-label': 'naked' }}
                        />
                    </Grid>
                </Grid>
            </div>
        </CSSTransition>
    )

}

export default Search;
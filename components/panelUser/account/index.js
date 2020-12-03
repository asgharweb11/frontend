import {
    Grid
} from "@material-ui/core"
import {
    makeStyles
} from "@material-ui/core/styles"
// components
import ShowAccount from "./showAccount"
import FormsAccount from "./formsAccount"
// Styles
import style from "../../../styles/panelUser/account.module.scss"
import {
    boxShadow
} from "../styles/styles"

const useStyles = makeStyles({
    account : {
        marginTop : 50,
        boxShadow,
        background : "white"
    }
})

const Account = () => {
    const classes = useStyles();
    
    return (
        <div className={style.account}>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
                <Grid item xs={4}>
                    <ShowAccount />
                </Grid>
                <Grid item xs={8}>
                    <FormsAccount />
                </Grid>
            </Grid>
        </div>
        
    )
}

export default Account;
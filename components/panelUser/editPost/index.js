import {
    Grid
} from "@material-ui/core"
import {
    makeStyles
} from "@material-ui/core/styles"
// Components 
import Header from "./header"
import Forms from "./forms"
import Uploads from "./uploads"
//Styles
import style from "../../../styles/panelUser/editPost.module.scss"
import {
    boxShadow
} from "../styles/styles"


const useStyles = makeStyles({
    header : {
        marginBottom : 20
    }
})

const EditPost = () => {

    const classes = useStyles()

    return (
        <div className={style.editPost}>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={2}>
                <Grid className={classes.header} item xs={12}>
                    <Header />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Forms />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Uploads />
                </Grid>
            </Grid>
        </div>
    )
}
export default EditPost;
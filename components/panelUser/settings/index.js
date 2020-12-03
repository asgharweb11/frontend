import {
    Grid
} from "@material-ui/core"
// Components
import FormDatas from "./formDatas"
import Uploads from "./uploads"
import Header from "./header"
//Styles
import style from "../../../styles/panelUser/settings.module.scss"

const Settings = () => {
    return (
        <div className={style.settings}>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={6}>
                    <FormDatas />
                </Grid>
                <Grid item xs={6}>
                    <Uploads />
                </Grid>
            </Grid>
        </div>
    )
}

export default Settings;
import {
    Grid
} from "@material-ui/core"
// Components
import Detail from "./detail"

const Dashboard = () => {
    return (
        <Grid container direction="row" justify="center">
            <Grid item xs={12}>
                <Detail />
            </Grid>
        </Grid>
    )
}
export default Dashboard
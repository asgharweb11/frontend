import {
    Grid , TextField
} from "@material-ui/core"

const Forms = () => {
    return (
        <Grid container direction="row" justify="center" alignItems="flex-start" spacing={2}>
            <Grid item xs={12}>
                <TextField 
                    label="شماره موبایل"
                    placeholder="لطفا شماره موبایل خود را وارد نمایید"
                    variant="outlined"
                    defaultValue=""
                    InputLabelProps={{
                        shrink : true
                    }}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    label="محل سکونت"
                    placeholder="لطفا آدرس محل سکونت خود را وارد نمایید"
                    variant="outlined"
                    defaultValue=""
                    InputLabelProps={{
                        shrink : true
                    }}
                    fullWidth
                />
            </Grid>
        </Grid>
    )
}

export default Forms;
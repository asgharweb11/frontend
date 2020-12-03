import {
    Grid , TextField , FormControl , InputLabel , OutlinedInput , InputAdornment ,
    IconButton , Select , MenuItem
} from "@material-ui/core"
import {
    makeStyles
} from "@material-ui/core/styles"
//Styles
import style from "../../../styles/panelUser/editPost.module.scss"
import {
    boxShadow
} from "../styles/styles"


const useStyles = makeStyles({
    
})

const Forms = () => {

    const classes = useStyles()

    return (
        <div className={style.editPost_forms}>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        label="عنوان"
                        placeholder="عنوان محصول خود وارد نمایید"
                        defaultValue=""
                        variant="outlined"
                        InputLabelProps={{
                            shrink : true
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="توضیحات"
                        placeholder="لطفا توضیحات خود را وارد نمایید"
                        defaultValue=""
                        rows={10}
                        multiline
                        variant="outlined"
                        InputLabelProps={{
                            shrink : true
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">قیمت</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            labelWidth={60}
                            placeholder="لطفا قیمت خود را وارد نمایید"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="تگ ها"
                        placeholder="لطفا تگ های خود را وارد نمایید"
                        defaultValue=""
                        variant="outlined"
                        InputLabelProps={{
                            shrink : true
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel id="demo-simple-select-filled-label">دسته بندی</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                        >
                            <MenuItem value="">
                                <em>هیچ کدام</em>
                            </MenuItem>
                            <MenuItem value={1}>کامپیوتر</MenuItem>
                            <MenuItem value={2}>پلی استیشن 4</MenuItem>
                            <MenuItem value={3}>ایکس باکس وان</MenuItem>
                            <MenuItem value={4}>اندروید</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}
export default Forms;
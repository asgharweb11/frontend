import {
    Grid , Box , Typography , IconButton , Button
} from "@material-ui/core"
// Icons
import {
    InsertDriveFile
} from '@material-ui/icons';
//Styles
import style from "../../../styles/panelUser/activeShop.module.scss"

const Upload = () => {
    return (
        <Grid container direction="row" justify="center" alignItems="flex-start">
            <Grid item xs={12}>
                <div className={style.upload}>
                    <div className={style.upload_header}>
                        <Typography variant="subtitle1" component="h2">آپلود تصویر کدملی</Typography>
                    </div>
                    <div className={style.upload_file}>
                        <Box id="uploadFile" display="none" type="file" multiple component="input"/>
                        <Box htmlFor="uploadFile" component="label">
                            <Button variant="contained" color="primary" component="span">
                                آپلود کدملی
                            </Button>
                        </Box>
                        <IconButton>
                            <InsertDriveFile />
                        </IconButton>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Upload;
import {
    Grid, Box , Button
} from "@material-ui/core"
import {
    makeStyles
} from "@material-ui/core/styles"
// Styles
import style from "../../../styles/panelUser/settings.module.scss"

const useStyles = makeStyles({
    formTitle : {
        marginBottom : 20
    }
});

const Uploads = () => {

    const classes = useStyles()
    const boxs = [1,2,3,4]

    return (
        <div className={style.formDatas}>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={1}>
                {
                    boxs.map((box , index) => {
                        return (
                            <Grid item xs={6}>
                                <div className={style.uploadsBox}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        position="absolute"
                                        top={0}
                                        left={0}
                                        bottom={0}
                                        right={0}
                                        borderRadius={5}
                                        style={{background : "#3f51b59c"}}
                                        component="div"
                                    >
                                        <Box id={`upload${index}`} multiple component="input" display="none" type="file" />
                                        <label htmlFor={`upload${index}`}>
                                            <Button variant="contained" color="primary" component="span">
                                                آپلود عکس
                                            </Button>
                                        </label>
                                    </Box>
                                    <div className={style.uploadPhoto}>
                                        <img src="/post/2.jpg" alt="فروشگاه" />
                                    </div>
                                </div>
                            </Grid>
                        
                        )
                    })    
                }
            </Grid>
        </div>
    )
}

export default Uploads;
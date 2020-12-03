import { useState } from "react"
import {
    Grid , Box, IconButton , Typography, Button , ButtonGroup , MenuItem , Menu
} from "@material-ui/core"
import {
    makeStyles
} from "@material-ui/core/styles"
// Ions 
import {
    PhotoCamera , InsertDriveFile , CheckBox , Visibility , ExpandMore
} from '@material-ui/icons';
//Styles
import style from "../../../styles/panelUser/editPost.module.scss"
import {
    boxShadow
} from "../styles/styles"


const useStyles = makeStyles({
    boxUpload : {
        position : "relative"
    },
    iconUpload : {
        color : "white"
    },
    btnShow : {
        marginRight : 10
    }
})

const EditPost = () => {

    const classes = useStyles()
    const boxs = [1,2,3,4]

    const [anchorEl, setAnchorEl] = useState(null);
    const [inputBtn , setInputBtn] = useState("انتشار")

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setInputBtn(event.target.textContent)
        setAnchorEl(null);
    };

    return (
        <div className={style.editPost_uploads}>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
                <Grid item xs={12}>
                    <div className={style.editPost_uploads_uploads}>
                        <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                            {
                                boxs.map((box , index) => {
                                    return (
                                        <Grid className={classes.boxUpload} item xs={6} key={index}>
                                            <Box
                                                position="absolute"
                                                top="5px"
                                                left="5px"
                                                bottom="5px"
                                                right="5px"
                                                style={{background : "#f744813b"}}
                                                borderRadius={1}
                                                display="flex"
                                                justifyContent="center"
                                                alignItems="center"
                                                color="text.primary"
                                            >
                                                <Box id={`image${index}`} multiple display="none" type="file" component="input" />
                                                <Box htmlFor={`image${index}`} borderRadius={3} component="label" color="background.paper" bgcolor="secondary.main">
                                                    <IconButton className={classes.iconUpload} component="span">
                                                        <PhotoCamera />
                                                    </IconButton>
                                                </Box>
                                            </Box>
                                            <div className={style.editPost_uploads_photo}>
                                                <img src="/background/background.jpeg" alt="تصویر محصول" />
                                            </div>
                                        </Grid>
                                    )
                                })
                            }
                            
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={style.editPost_uploads_file}>
                        <div className={style.editPost_uploads_fileHeader}>
                            <Typography variant="subtitle1" component="h6">آپلود فایل محصول</Typography>
                        </div>
                        <div className={style.editPost_uploads_fileUpload}>
                            <div className={style.editPost_uploadsFile}>
                                <Box id="fileProduct" display="none" type="file" multiple component="input" />
                                <Box display="flex" alignItems="center" htmlFor="fileProduct" component="label">
                                    <Button color="primary" variant="contained">
                                        آپلود فایل
                                    </Button>
                                </Box>
                            </div>
                            <IconButton disabled>
                                <CheckBox />
                            </IconButton>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={style.editPost_uploads_btns}>
                        <Button className={classes.btnShow} variant="outlined" color="primary">
                            <Visibility />
                            پیش نمایش
                        </Button>
                        <ButtonGroup>
                            <Button size="small" variant="outlined" color="primary" onClick={handleClick}>
                                <ExpandMore />
                            </Button>
                            <Button variant="outlined" color="primary">
                                {inputBtn}
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>انتشار</MenuItem>
                                <MenuItem onClick={handleClose}>پیش نویس</MenuItem>
                            </Menu>


                        </ButtonGroup>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default EditPost;
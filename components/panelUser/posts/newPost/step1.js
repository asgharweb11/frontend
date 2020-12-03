import { useState } from "react"
import {
    Box , Grid , TextField , CardMedia , Button , IconButton
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
// -------------------------- Icons --------------------------
import {HighlightOff} from '@material-ui/icons';
// Style 
import style from "../../../../styles/panelUser/addPost.module.scss"


const useStyles = makeStyles({
    input : {
        display : "none"
    },
    step1_uploadBtn : {
        background : "#f400bf30",
        borderRadius : 10
    },
    photo : {
        width : "100%",
        height : 190,
        borderRadius : 10
    },
    textarea : {
        height : "250px"
    },
    btnRemove : {
        backgroundColor : "#ffffffcc"
    }
})

const Step1 = ({detail , err , handleInput , handlePhoto}) => {
    const classes = useStyles()
    const boxs = [1 , 2 , 3 , 4]


    const [btnFiles , setBtnFiles] = useState({
        file1 : false,
        file2 : false,
        file3 : false,
        file4 : false,
    })

    const changeInput = (key) => e => {
        handleInput(key , e.target.value)
    }

    const changePhoto = (index) => e => {
        if(e.target.files.length > 0){

            const reader = new FileReader()
            reader.onload = read => {
                const img = document.getElementById(`photo-${index}`)
                img.src = read.target.result
            }
            reader.readAsDataURL(e.target.files[0])

            setBtnFiles({...btnFiles , [`file${index}`] : true})
            handlePhoto(index , e.target.files[0])

        }
    }

    const ClickRemove = index => e => {
        const img = document.getElementById(`photo-${index}`)
        img.src = "/background/background.jpeg";
        handlePhoto(index , "remove")
        setBtnFiles({...btnFiles , [`file${index}`] : false})
    }

    return (
        <div className={style.step1_main}>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
                <Grid item xs={6}>
                    <div className={style.step1_forms}>
                        <div className={style.step1_forms_form}>
                            <TextField
                                id="outlined-helperText"
                                label="عنوان محصول"
                                error={err.title === '' ? false : true}
                                defaultValue={detail.title}
                                onChange={changeInput("title")}
                                helperText={err.title}
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div className={style.step1_forms_form}>
                            <TextField
                                className={classes.textarea}
                                id="outlined-multiline-static"
                                label="توضیحات محصول"
                                error={err.descript === '' ? false : true}
                                defaultValue={detail.descript}
                                onChange={changeInput("descript")}
                                helperText={err.descript}
                                rows={13}
                                multiline
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
                        <Grid item xs={12}>
                            <div className={style.step1_upload}>
                                <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
                                    {
                                        boxs.map((box , index) => {
                                            return (
                                                <Grid item xs={6} key={index}>
                                                    <div className={style.step1_uploadFile}>
                                                        <Box
                                                            className={classes.step1_uploadBtn}
                                                            display="flex"
                                                            justifyContent="center"
                                                            alignItems="center"
                                                            position="absolute" 
                                                            top={0} 
                                                            right={0} 
                                                            left={0} 
                                                            bottom={0}
                                                        >
                                                            <input
                                                                accept="image/*"
                                                                className={classes.input}
                                                                id={`contained-button-file${index}`}
                                                                multiple
                                                                type="file"
                                                                onChange={changePhoto(index)}
                                                            />
                                                            {
                                                                !btnFiles[`file${index}`] 
                                                                ? 
                                                                    (
                                                                        <label id={`btnUpload${index}`} htmlFor={`contained-button-file${index}`}>
                                                                            <Button variant="contained" color="primary" component="span">
                                                                                آپلود عکس
                                                                            </Button>
                                                                        </label>
                                                                    )
                                                                :
                                                                    (
                                                                        <label id={`RemoveUpload${index}`}>
                                                                            <IconButton onClick={ClickRemove(index)} className={classes.btnRemove} color="secondary" variant="contained">
                                                                                <HighlightOff />
                                                                            </IconButton>
                                                                        </label>
                                                                    )
                                                            }
                                                            
                                                            
                                                        </Box>
                                                        <div className={style.step1_uploadPic}>
                                                            <CardMedia 
                                                                id={`photo-${index}`}
                                                                component="img"
                                                                alt="اپلود عکس محصول"
                                                                title="اپلود عکس محصول"
                                                                image="/background/background.jpeg"
                                                                className={classes.photo}
                                                            />
                                                        </div>
                                                    </div>
                                                </Grid>
                                            
                                            )
                                        })
                                    }
                                    
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={12}>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Step1;
import { useState } from "react"
import {
    Box , Grid , TextField , Button , FormControl , MenuItem , Select , InputLabel ,
    InputAdornment , OutlinedInput, Typography , IconButton , Chip , Tooltip , FormHelperText,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
// Icons
import {
    CheckBox , Face , Done , HighlightOff
} from '@material-ui/icons';
// ----------------------- Methods --------------------------------
import { currencyFormat } from "../../../../methods/validator"
// Style 
import style from "../../../../styles/panelUser/addPost.module.scss"
import {
    colorGreen
} from "../../styles/styles"


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
        height : 250
    },
    formControl : {
        "& li" : {
            justifyContent : "flex-end !important"
        }
    },
    iconUpload : {
        color : colorGreen
    }
})

const Step1 = ({detail , err , handleInput , handleErr , handleFile}) => {
    const classes = useStyles()
    const boxs = [1 , 2 , 3 , 4]

    const [tags , setTags] = useState([]);
    const [file , setFile] = useState({
        tooltip : 'هنوز فایلی آپلود نکرده اید !',
        status : true
    });

    const [inputTag , setInputTag] = useState('')
    const price = Number(detail.price).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    // ------------------------------------------
    const changeInput = (key) => e => {
        if(key === "price"){
            handleInput(key , e.target.value.replace(/,/gi , ""))
        } else {
            handleInput(key , e.target.value)
        }
    }

    const changeFile = e => {
        if(e.target.files.length > 0){
            if(e.target.files[0].type === "text/plain"){
                setFile({tooltip : e.target.files[0].name , status : false})
                handleFile(e.target.files[0])
            }else {
                setFile({tooltip : 'فایلی آپلود نشده !' , status : true})
                handleFile()
                handleErr("file" , "فایل شما حتما باید فرمت txt باشد !!")
            }
            
        }else{
            setFile({tooltip : 'فایلی آپلود نشده !' , status : true})
            handleFile()
        }
    }

    const changeSelect = key => e => {
        handleInput(key , e.target.value)
    }

    const keyDownTags = key => e => {
        if(e.keyCode === 13){
            console.log("tags : " , tags)
            const data = {key : tags.length , value : e.target.value};
            handleInput(key , data)
            setTags([...tags , data])
            setInputTag('')
        }
    }

    const handleDelete = (key , value) => e => {
        console.log()
        setTags((tags) => tags.filter((tag) => tag.key !== key))
        handleInput("tags" , "delete" , key)
    }


    const values = [
        "کامپیوتر",
        "پلی استیشن 4",
        "اکیس باکس وان",
        "اندروید"
    ]

    return (
        <div className={style.step1_main}>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
                <Grid item xs={6}>
                    <div className={style.step1_forms}>
                        <div className={style.step1_forms_form}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">دسته بندی</InputLabel>
                                    <Select
                                        className={classes.formControl}
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value=""
                                        label="انتخاب دسته بندی"
                                        value={detail.category}
                                        onChange={changeSelect("category")}
                                    >
                                        <MenuItem value="هیچ">
                                            <em>هیچ</em>
                                        </MenuItem>
                                        <MenuItem value={values[0]}>{values[0]}</MenuItem>
                                        <MenuItem value={values[1]}>{values[1]}</MenuItem>
                                        <MenuItem value={values[2]}>{values[2]}</MenuItem>
                                        <MenuItem value={values[3]}>{values[3]}</MenuItem>
                                    </Select>
                                    <FormHelperText style={{color : "red"}}>{err.category}</FormHelperText>
                            </FormControl>
                        </div>
                        <div className={style.step1_forms_form}>
                            <FormControl fullWidth className={classes.margin} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount">قیمت</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    value={price}
                                    onChange={changeInput('price')}
                                    startAdornment={<InputAdornment position="start">$ تومان</InputAdornment>}
                                    labelWidth={60}
                                    FormHelperText={err.price}
                                />
                                <FormHelperText style={{color : "red"}}>{err.price}</FormHelperText>
                            </FormControl>
                        </div>
                        <div className={`${style.step1_forms_form} ${style.step1_formTag}`}>
                            <div className={style.step1_tags}>
                                {
                                    tags.map((tag) => {
                                        return (
                                            <Chip
                                                style={{margin : "1px"}}
                                                label={tag.value}
                                                clickable
                                                color="primary"
                                                onDelete={handleDelete(tag.key , tag.value)}
                                                deleteIcon={<HighlightOff />}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <input type="text" onKeyDown={keyDownTags("tags")} onChange={e => setInputTag(e.target.value)} value={inputTag} placeholder="وارد کردن تگ ..." className={style.step1_tags} />
                            <FormHelperText style={{color : "red"}}>{err.tags}</FormHelperText>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
                        <Grid item xs={12}>
                            <div className={style.step1_upload}>
                                <Grid container direction="row" justify="center" alignItems="flex-start" >
                                    <Grid item xs={12}>
                                        <FormControl fullWidth className={classes.margin} variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-amount">تعداد</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-amount"
                                                value={detail.number}
                                                onChange={changeInput('number')}
                                                labelWidth={60}
                                                FormHelperText={err.number}
                                            />
                                            <FormHelperText style={{color : "red"}}>{err.number}</FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box 
                                            className={style.step1_uploadFile}
                                            flexDirection="column"
                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"
                                            p={1}
                                        >
                                            <div className={style.step2_textFile}>
                                                <Typography variant="subtitle1" component="p">
                                                    لطفا اطلاعات خود را درون یک فایل <span>txt</span> یا <span>zip</span> ذخیره کنید سپس آپلود کنید
                                                    <br />
                                                    لازم به ذکر میباشد اطلاعات شما بصورت رمزگذاری شده و امنیت قوی در 
                                                    <span> 
                                                    دیوار اکانت
                                                    </span> نگه داری میشود
                                                    <br />
                                                    پس ، از اطلاعات خود در سایت مضطرب نباشید
                                                </Typography>
                                            </div>
                                            <div style={{width : "100%"}}>
                                                <Box
                                                    display="flex"
                                                    flexDirection="row"
                                                    justifyContent="space-between"
                                                    alignItems="center"   
                                                    pt={2} 
                                                >
                                                    <div>
                                                        <input
                                                            onChange={changeFile}
                                                            className={classes.input}
                                                            id="fileAccount"
                                                            multiple
                                                            type="file"
                                                        />
                                                        <label htmlFor="fileAccount">
                                                            <Tooltip title={file.tooltip} aria-label="add">
                                                                <Button variant="contained" color="primary" component="span">
                                                                    آپلود فایل
                                                                </Button>
                                                            </Tooltip>
                                                            
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <IconButton className={classes.iconUpload} disabled={file.status ? true : false}>
                                                            <CheckBox />
                                                        </IconButton>
                                                    </div>
                                                </Box>
                                            </div>
                                            <div style={{width : "100%",textAlign : "right"}}>
                                                <FormHelperText style={{color : "red"}}>{err.file}</FormHelperText>
                                            </div>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Step1;
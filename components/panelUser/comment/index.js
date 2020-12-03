import { useState , forwardRef } from "react"
import {
    Grid , Typography , TableContainer , Table , TableHead , TableBody , TableRow , TableCell ,
    TableFooter , TablePagination , IconButton , Box , Dialog , DialogTitle , DialogContent , 
    DialogActions , Button , Slide , Tooltip , TextField , ButtonGroup
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
// Components 
import TextDialog from "./dialog"
// Icons
import {
    Visibility , QuestionAnswer , DeleteForever , CheckBox
} from '@material-ui/icons';
// Styles
import style from "../../../styles/panelUser/sells.module.scss"
import style2 from "../../../styles/panelUser/comments.module.scss"

import {
    color ,
    color3
} from "../styles/styles"



const useStyles = makeStyles({
    table: {
      minWidth: 500,
    },
    TablePage : {
        overflow : "visible"
    },
    iconBtn : {
        minWidth : "100px",
        display : "flex",
        flexDirection : "row",
        justifyContent : "center"
    },
    boxModel : {
        border : `1px solid ${color}`
    },
    tableCell : {
        color : color3
    },
    dialogTitle : {
        borderBottom : `1px solid ${color}`
    },
    dialogActions : {
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "flex-center",
        borderTop : `1px solid ${color}`
    },
    tableState : {
        padding : 5,
        borderRadius : 15,
        fontSize : 9,
        color : "white"
    }
  });


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



const Buys = () => {

    const classes = useStyles()

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);


    function createDataDialog(id , name , text, date , status , color) {
        return { id , name , text, date , status , color};
    }
      
    
    const rows = [
        createDataDialog(15,"محمد علی","آقا سلام میگم این اکانت ظرفیت چند هستش و بعد اینکه ضمانت هم داره ؟!","98/07/29" , "در حال بررسی" , "#b3b3b3"),
        createDataDialog(15,"رضا","آقا سلام میگم این اکانت ظرفیت چند هستش و بعد اینکه ضمانت هم داره ؟!","98/07/29" , "تایید شده" , "#33e233"),
        createDataDialog(15,"جواد شفیعی","آقا سلام میگم این اکانت ظرفیت چند هستش و بعد اینکه ضمانت هم داره ؟!","98/07/29" , "در حال بررسی" , "#b3b3b3"),
        createDataDialog(15,"حسن مرادی","آقا سلام میگم این اکانت ظرفیت چند هستش و بعد اینکه ضمانت هم داره ؟!","98/07/29" , "تایید شده" , "#33e233"),
        createDataDialog(15,"میلاد رضا غریب","آقا سلام میگم این اکانت ظرفیت چند هستش و بعد اینکه ضمانت هم داره ؟!","98/07/29" , "در حال بررسی" , "#b3b3b3"),
        createDataDialog(15,"صادق کمالی","آقا سلام میگم این اکانت ظرفیت چند هستش و بعد اینکه ضمانت هم داره ؟!","98/07/29" , "تایید شده" , "#33e233"),
        createDataDialog(15,"قاسم شیرعلی نژاد","آقا سلام میگم این اکانت ظرفیت چند هستش و بعد اینکه ضمانت هم داره ؟!","98/07/29" , "در حال بررسی" , "#b3b3b3"),
        createDataDialog(15,"حسین قاسمی فرد","آقا سلام میگم این اکانت ظرفیت چند هستش و بعد اینکه ضمانت هم داره ؟!","98/07/29" , "تایید شده" , "#33e233"),
    ].sort((a, b) => (a.calories < b.calories ? -1 : 1));


    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    

    // -----------------------------------------------------------

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        console.log("hello")
        setOpen(true);
    };
    

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
            <Grid item xs={12}>
                <div className={style.allPosts_dataGrid_container}>
                    <div className={style.allPosts_dataGrid_title}>
                        <Typography variant="body1" component="p">کامنت ها</Typography>
                    </div>
                    <div className={style.allPosts_dataGrid_grid} >
                        <TableContainer>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>نام کاربر</TableCell>
                                        <TableCell>توضیحات</TableCell>
                                        <TableCell>تاریخ</TableCell>
                                        <TableCell>وضعیت</TableCell>
                                        <TableCell>علامت ها</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        (rowsPerPage > 0
                                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            : rows
                                        ).map(item => {
                                            return (
                                                <TableRow>
                                                    <TableCell className={classes.tableCell} style={{minWidth : "50px"}}>{item.name}</TableCell>
                                                    <TableCell className={classes.tableCell} style={{minWidth : "250px"}}>{item.text}</TableCell>
                                                    <TableCell className={classes.tableCell} style={{minWidth : "80px"}}>{item.date}</TableCell>
                                                    <TableCell className={classes.tableCell} style={{minWidth : "110px"}}>
                                                        <span className={classes.tableState} style={{background : item.color}}>
                                                            {item.status}
                                                        </span>
                                                    </TableCell>
                                                    <TableCell className={classes.tableCell} className={classes.iconBtn}>
                                                        <Tooltip title="تایید کامنت">
                                                            <Box color="success.main" component={IconButton}>
                                                                <CheckBox fontSize="small" />
                                                            </Box>
                                                        </Tooltip>
                                                        <Tooltip title="پاسخ کامنت">
                                                            <Box color="info.main" component={IconButton} onClick={handleClickOpen}>
                                                                <QuestionAnswer fontSize="small" />
                                                            </Box>
                                                        </Tooltip>
                                                        <Tooltip title="مشاهده محصول">
                                                            <Box color="text.disabled" component={IconButton}>
                                                                <Visibility fontSize="small" />
                                                            </Box>
                                                        </Tooltip>
                                                        <Tooltip title="حذف کامنت">
                                                            <Box color="error.main" component={IconButton}>
                                                                <DeleteForever fontSize="small" />
                                                            </Box>
                                                        </Tooltip>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                    {emptyRows > 0 && (
                                        <TableRow style={{ height: 53 * emptyRows }}>
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                            className={classes.TablePage}
                                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                            count={rows.length}
                                            rowsPerPage={rowsPerPage}
                                            component="tr"
                                            page={page}
                                            SelectProps={{
                                                inputProps: { 'aria-label': 'تعداد نمایش' },
                                                native: true,
                                            }}
                                            onChangePage={handleChangePage}
                                            onChangeRowsPerPage={handleChangeRowsPerPage}
                                        />
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </TableContainer>
                    
                    </div>
                    <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle className={classes.dialogTitle}>
                            <Box 
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                justifyContent="flex-start"
                                width="100%"
                                p={1}
                                component="div"
                            >
                                <div className={style2.commnet_photoProfile}>
                                    <img src="/profile/1.jpg" alt="کامنت" />
                                </div>
                                <div className={style2.commnet_textProfile}>
                                    <Typography variant="subtitle1" component="h6">محمد جواد</Typography>
                                    <Typography variant="caption" component="p">99/07/29</Typography>
                                </div>
                            </Box>
                        </DialogTitle>
                        <DialogContent>
                            <div>
                                <TextDialog />
                            </div>
                        </DialogContent>
                        <DialogActions className={classes.dialogActions}>
                            {/* <div className={style2.commnet_textarea}>
                                <TextField
                                    fullWidth
                                    placeholder="لطفا پاسخ خود را وارد نمایید"
                                    label="پاسخ کامنت"
                                    rows={8}
                                    variant="outlined"
                                    multiline
                                    InputLabelProps={{
                                        shrink : true
                                    }}
                                />
                            </div> */}
                            <div className={style2.commnet_btns}>
                                <ButtonGroup>
                                    <Button onClick={handleClose} color="secondary" variant="contained">
                                        بستن
                                    </Button>
                                    <Button color="primary" variant="contained">
                                        ارسال پاسخ
                                    </Button>
                                </ButtonGroup>
                                
                            </div>
                        </DialogActions>
                    </Dialog>

                    
                    
                </div>
            </Grid>
        </Grid>
    )
}

export default Buys;
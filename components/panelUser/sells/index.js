import { useState , forwardRef } from "react"
import {
    Grid , Typography , TableContainer , Table , TableHead , TableBody , TableRow , TableCell ,
    TableFooter , TablePagination , IconButton , Box , Dialog , DialogTitle , DialogContent , 
    DialogActions , Button , Slide , Tooltip
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
// Components 
import ModelSell from "../modelBuySell"
// Icons
import {
    ChevronLeft , Visibility
} from '@material-ui/icons';
// Styles
import style from "../../../styles/panelUser/sells.module.scss"
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
        justifyContent : "flex-start",
        borderTop : `1px solid ${color}`
    }
  });


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



const AllPosts = () => {

    const classes = useStyles()

    function createData(id , name, buyer , price, num, allPrice, date , state) {
        return { id , name, buyer , price, num , allPrice , date , state};
    }
      

    const rows = [
        createData(15 , 'خرید بازی اکشن جی تی آی وی 2018', "ehsan" , "500.000 t" , 2 , "1.000.000 t", "99/07/25" , "wait"),
        createData(15 , 'GAME Fortnite', "ehsan" , "500.000 t" , 2 , "1.000.000 t", "99/07/25" , "wait"),
        createData(15 , 'GAME Fortnite', "ehsan" , "500.000 t" , 2 , "1.000.000 t", "99/07/25" , "wait"),
        createData(15 , 'GAME Rainbow', "ehsan" , "500.000 t" , 2 , "1.000.000 t", "99/07/25" , "wait"),
        createData(15 , 'GAME battefield 4', "ehsan" , "500.000 t" , 2 , "1.000.000 t", "99/07/25" , "wait"),
        createData(15 , 'GAME need for speed', "ehsan" , "500.000 t" , 2 , "1.000.000 t", "99/07/25" , "wait"),
        createData(15 , 'GAME god of war', "ehsan" , "500.000 t" , 2 , "1.000.000 t", "99/07/25" , "wait"),
        createData(15 , 'GAME assasins creed 3', "ehsan" , "500.000 t" , 2 , "1.000.000 t", "99/07/25" , "wait"),
    ].sort((a, b) => (a.calories < b.calories ? -1 : 1));;

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    
    // ---------------------- Datas Dialog ---------------------------------

    function createDataDialog(id , name, price, num, allPrice) {
        return { id , name , price, num , allPrice};
    }
      
    
    const rowsDialog = [
        createDataDialog(15 , 'Game God Of War 3' , "500.000 t" , 2 , "1.000.000 t"),
        createDataDialog(15 , 'Game Gta V' , "500.000 t" , 2 , "1.000.000 t"),
        createDataDialog(15 , 'Game Rainbow Six' , "500.000 t" , 2 , "1.000.000 t"),
        createDataDialog(15 , 'Game NFS 2' , "500.000 t" , 2 , "1.000.000 t"),
        createDataDialog(15 , 'Game Battelfield 4' , "500.000 t" , 2 , "1.000.000 t"),
        createDataDialog(15 , 'Game For Honor' , "500.000 t" , 2 , "1.000.000 t"),
        createDataDialog(15 , 'Game Avanger' , "500.000 t" , 2 , "1.000.000 t"),
    ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

    const titlesDialog = ["محصول" , "قیمت" , "تعداد" , "مجموع" , "مشاهده"]


    // -----------------------------------------------------------

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
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
                        <Typography variant="body1" component="p">فروش ها</Typography>
                    </div>
                    <div className={style.allPosts_dataGrid_grid} >
                        <TableContainer>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>محصول</TableCell>
                                        <TableCell>خریدار</TableCell>
                                        <TableCell>قیمت</TableCell>
                                        <TableCell>تعداد</TableCell>
                                        <TableCell>مجموع</TableCell>
                                        <TableCell>تاریخ</TableCell>
                                        <TableCell>تسویه</TableCell>
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
                                                    <TableCell className={classes.tableCell} style={{minWidth : "130px"}}>{item.name}</TableCell>
                                                    <TableCell className={classes.tableCell} style={{minWidth : "130px"}}>{item.buyer}</TableCell>
                                                    <TableCell className={classes.tableCell} style={{minWidth : "130px"}}>{item.price}</TableCell>
                                                    <TableCell className={classes.tableCell} style={{minWidth : "80px"}}>{item.num}</TableCell>
                                                    <TableCell className={classes.tableCell} style={{minWidth : "130px"}}>{item.allPrice}</TableCell>
                                                    <TableCell className={classes.tableCell} style={{minWidth : "130px"}}>{item.date}</TableCell>
                                                    <TableCell className={classes.tableCell} style={{minWidth : "130px"}}>{item.state}</TableCell>
                                                    <TableCell className={classes.tableCell} className={classes.iconBtn}>
                                                        <Tooltip title="مشاهده محصول">
                                                            <Box color="info.main" component={IconButton} onClick={handleClickOpen}>
                                                                <Visibility fontSize="small" />
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
                                <IconButton component={Box} mr={1} onClick={handleClose}>
                                    <ChevronLeft />
                                </IconButton>
                                <Typography variant="h6" component="h6">فاکتور فروش</Typography>
                            </Box>
                        </DialogTitle>
                        <DialogContent>
                            <div className={classes.boxModel}>
                                {/* <ModelSell open={model} handle={openModel}/> */}
                                <ModelSell dataRows={rowsDialog} dataTitle={titlesDialog} page="sells"/>
                            </div>
                        </DialogContent>
                        <DialogActions className={classes.dialogActions}>
                            <Button onClick={handleClose} color="primary">
                                بستن
                            </Button>
                        </DialogActions>
                    </Dialog>

                    
                    
                </div>
            </Grid>
        </Grid>
    )
}

export default AllPosts;
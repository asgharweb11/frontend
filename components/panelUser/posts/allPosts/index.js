import Link from "next/link"
import { useState } from "react"
import { useSelector , useDispatch } from "react-redux"
import {
    Grid , Button, Typography , TableContainer , Table , TableHead , TableBody , TableRow , TableCell ,
    TableFooter , TablePagination , IconButton , Box
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
// Icons
// ------
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// Styles
import style from "../../../../styles/panelUser/allPosts.module.scss"
import {
    color3
} from "../../styles/styles"
// --------------- Action --------------------
import { ClearMessage } from "../../../../store/actions/detailAction"



const useStyles = makeStyles({
    table: {
      minWidth: 500,
    },
    TablePage : {
        overflow : "visible"
    },
    iconBtn : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "center"
    },
    tableCell : {
        color : color3
    }
  });


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

  
const AllPosts = () => {

    const detail = useSelector(state => state.Detail)
    const dispatch = useDispatch()
    const classes = useStyles()

    function createData(id , name, calories, fat, carbs, protein) {
        return { id , name, calories, fat, carbs, protein };
    }
      
    const text = "ازی جدیدی در سبک سری بازی‌های موتورای کامپیوتر عرضه شده است"

    const rows = [
        createData(15 , 'خرید بازی اکشن جی تی آی وی 2018', text, "asghar ali abdi az khozestan", "99/07/25", 4.0),
        createData(56 ,'Ice cream sandwich', text, 9.0, 37, 4.3),
        createData(57 , 'Eclair', text, 16.0, 24, 6.0),
        createData(32 , 'Cupcake', text, 3.7, 67, 4.3),
        createData(65 , 'Gingerbread', 356, 16.0, 49, 3.9),
        createData(94 , 'Gingerbread2', 356, 16.0, 49, 3.9),
        createData(35 , 'Gingerbread3', 356, 16.0, 49, 3.9),
        createData(19 , 'Gingerbread4', 356, 16.0, 49, 3.9),
        createData(92 , 'Gingerbread5', 356, 16.0, 49, 3.9),
        createData(37 , 'Gingerbread6', 356, 16.0, 49, 3.9),
        createData(64 , 'Gingerbread7', 356, 16.0, 49, 3.9),
        createData(18 , 'Gingerbread8', 356, 16.0, 49, 3.9),
        createData(82 , 'Gingerbread9', 356, 16.0, 49, 3.9),
        createData(27 , 'Gingerbread10', 356, 16.0, 49, 3.9),
        createData(66 , 'Gingerbread11', 356, 16.0, 49, 3.9),
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

    const handleClose = () => {
        dispatch(ClearMessage())
    }

    return (
        <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
            {
                detail.message.msg !== '' && (
                    <Grid item xs={12}>
                        <Alert onClose={handleClose} severity={detail.message.bg}>{detail.message.msg}</Alert>
                    </Grid>
                )
            }
            <Grid item xs={12}>
                <div className={style.allPosts_title}>
                    <Link href="/dashboard/addPost">
                        <Button variant="contained" color="primary">
                            <Typography variant="body1" component="h6">افزودن محصول</Typography>
                        </Button>
                    </Link>
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className={style.allPosts_dataGrid_container}>
                    <div className={style.allPosts_dataGrid_title}>
                        <Typography variant="body1" component="p">محصولات</Typography>
                    </div>
                    <div className={style.allPosts_dataGrid_grid} >
                        <TableContainer>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{maxWidth : 100}}>عنوان</TableCell>
                                        <TableCell style={{maxWidth : 150}}>توضیحات</TableCell>
                                        <TableCell>نویسنده</TableCell>
                                        <TableCell>تاریخ</TableCell>
                                        <TableCell>کلیدها</TableCell>
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
                                                    <TableCell className={classes.tableCell}>{item.name}</TableCell>
                                                    <TableCell className={classes.tableCell} style={{minWidth : "250px"}}>{item.calories}</TableCell>
                                                    <TableCell className={classes.tableCell} style={{minWidth : "130px"}}>{item.fat}</TableCell>
                                                    <TableCell className={classes.tableCell} style={{minWidth : "130px"}}>{item.carbs}</TableCell>
                                                    <TableCell className={classes.tableCell} className={classes.iconBtn}>
                                                        <Box color="success.main" component={IconButton}>
                                                            <DoneOutlineIcon fontSize="small" />
                                                        </Box>
                                                        <Link href="/dashboard/edit">
                                                            <Box color="primary.main" component={IconButton}>
                                                                <EditIcon fontSize="small" />
                                                            </Box>
                                                        </Link>
                                                        <Box color="info.main" component={IconButton}>
                                                            <VisibilityIcon fontSize="small" />
                                                        </Box>
                                                        <Box color="error.main" component={IconButton}>
                                                            <DeleteForeverIcon fontSize="small" />
                                                        </Box>
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
                                            component="div"
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
                </div>
            </Grid>
        </Grid>
    )
}

export default AllPosts;
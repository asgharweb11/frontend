import { useState , forwardRef } from "react"
import {
    Grid , Typography , TableContainer , Table , TableHead , TableBody , TableRow , TableCell ,
    TableFooter , TablePagination , Slide
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
// Components 
// Styles
import style from "../../../styles/panelUser/sells.module.scss"
import style2 from "../../../styles/panelUser/deposits.module.scss"
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
        color : color3,
        minWidth : 150
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



const Deposits = () => {

    const classes = useStyles()

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);


    function createDataDialog(id , total , profit, deposits , date , status , color) {
        return { id , total , profit, deposits , date , status , color};
    }
      
    
    const rows = [
        createDataDialog(15,"500.000 T","80%","400.000 T" , "98/07/29" , "waite" , "#b3b3b3"),
        createDataDialog(15,"800.000 T","80%" , "700.000 T" , "98/07/29" , "success" , "#33e233"),
        createDataDialog(15,"800.000 T","80%" , "700.000 T" , "98/07/29" , "success" , "#33e233"),
        createDataDialog(15,"500.000 T","80%","400.000 T" , "98/07/29" , "waite" , "#b3b3b3"),
        createDataDialog(15,"800.000 T","80%" , "700.000 T" , "98/07/29" , "success" , "#33e233"),
        createDataDialog(15,"500.000 T","80%","400.000 T" , "98/07/29" , "waite" , "#b3b3b3"),
        createDataDialog(15,"800.000 T","80%" , "700.000 T" , "98/07/29" , "success" , "#33e233"),
        createDataDialog(15,"800.000 T","80%" , "700.000 T" , "98/07/29" , "success" , "#33e233"),
        createDataDialog(15,"800.000 T","80%" , "700.000 T" , "98/07/29" , "success" , "#33e233"),
    ].sort((a, b) => (a.total - b.total ));


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
                        <Typography variant="body1" component="p">واریزی ها</Typography>
                    </div>
                    <div className={style.allPosts_dataGrid_grid} >
                        <TableContainer>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>مجموع</TableCell>
                                        <TableCell>سود</TableCell>
                                        <TableCell>قابل تسویه</TableCell>
                                        <TableCell>تاریخ</TableCell>
                                        <TableCell>درخواست</TableCell>
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
                                                    <TableCell className={classes.tableCell}>{item.total}</TableCell>
                                                    <TableCell className={classes.tableCell}>{item.profit}</TableCell>
                                                    <TableCell className={classes.tableCell}>{item.deposits}</TableCell>
                                                    <TableCell className={classes.tableCell}>{item.date}</TableCell>
                                                    <TableCell className={classes.tableCell}>
                                                        <span className={classes.tableState} style={{background : item.color}}>
                                                            {item.status}
                                                        </span>
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
                    
                </div>
            </Grid>
        </Grid>
    )
}

export default Deposits;
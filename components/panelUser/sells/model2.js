import {useState} from "react"
import {
    Grid , Box , Typography, IconButton ,TableContainer , Table , TableHead , TableBody , 
    TableRow , TableCell
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
// Icons
import {
     Visibility , SystemUpdateAlt
} from '@material-ui/icons';

// Styles
import {
    boxShadow2,
    color,
    color3,
    colorError
} from "../styles/styles"
import style from "../../../styles/panelUser/sells.module.scss"


const useStyles = makeStyles({
    modelGrid : {
        background : "white",
    },
    header : {
        boxShadow : boxShadow2
    },
    table : {
        overflowY : "auto",
        height : "405px"
    },
    footer : {
        borderTop : `1px solid ${color}`
    },
    tableCell : {
        color : color3
    },
    modeldetail : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        marginBottom : 25,
        width : "100%",
        "& span" : {
            borderRadius : 5,
            padding : 5,
            background : "#f9b6e1",
            color : "white"
        },
        "& p" : {
            margin : "0px 5px"
        }
    },
    modelPrice : {
        width : "100%",
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        "& p" : {
            background : "#f9b6e1",
            color : "white",
            padding : 5,
            borderRadius : 5
        }
    }
})



const Model = ({dataRows , dataTitle , page}) => {
    const classes = useStyles()

    console.log("page : " , page)
    return (
            <Box 
                display="flex" 
                flexDirection="row" 
                justifyContent="flex-start" 
                alignItems="flex-start"
                p={2}
            >
                <Grid className={classes.modelGrid} container direction="row" justifyContent="center" alignItems="flex-start" spacing={3}>
                        <Grid item xs={12}>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            {
                                                dataTitle.map(title => {
                                                    return (
                                                        <TableCell>{title}</TableCell>
                                                    )
                                                })
                                            }
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            dataRows.map(item => {
                                                return (
                                                    <TableRow>
                                                        <TableCell className={classes.tableCell} style={{minWidth : "130px"}}>{item.name}</TableCell>
                                                        <TableCell className={classes.tableCell} style={{minWidth : "130px"}}>{item.price}</TableCell>
                                                        <TableCell className={classes.tableCell} style={{minWidth : "80px"}}>{item.num}</TableCell>
                                                        <TableCell className={classes.tableCell} style={{minWidth : "130px"}}>{item.allPrice}</TableCell>
                                                        <TableCell className={classes.tableCell} className={classes.iconBtn}>
                                                            {
                                                                page === "sells" 
                                                                ? (
                                                                    <Box color="info.main" component={IconButton}>
                                                                        <Visibility fontSize="small" />
                                                                    </Box>
                                                                ) : page === "buys" ? (
                                                                    <Box color="info.main" component={IconButton}>
                                                                        <SystemUpdateAlt fontSize="small" />
                                                                    </Box>
                                                                ) : ""

                                                            }
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid className={classes.footer} item xs={12}>
                        <Box 
                            component="div"
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="flex-start"
                            color="primary.main"
                            p={2}
                        >
                            {
                                page === "sells" && (
                                    <div className={classes.modeldetail}>
                                        <Typography variant="subtitle1" component="h6">
                                            نام و نام خانوادگی : <span>اصغر علی عبدی</span>
                                        </Typography>
                                    </div>
                                )
                            }
                            
                            <div className={classes.modeldetail}>
                                <Typography variant="subtitle1" component="p">
                                    محصول : <span>مجازی</span>
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    بارکد : <span>214687431654</span>
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    تاریخ : <span>99/07/29</span>
                                </Typography>
                            </div>
                            <div className={classes.modelPrice}>
                                <Typography variant="subtitle1" component="h6">صورت حساب : </Typography>
                                <Typography variant="button" component="p">25.000.000 تومان</Typography>
                            </div>
                            
                        </Box>
                    </Grid>
                    </Grid>
            </Box>
        
    )
            
    
        
    
}

export default Model;
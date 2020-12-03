import { DataGrid } from '@material-ui/data-grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"
// Componetnts 
import {color4} from "../styles/styles"
// Styles
import style from "../../../styles/panelUser/dashboard.module.scss"

const rows = [
  { id: 1, col1: 'بازی gta v', col2: 'بازی جی تی آی یک بازی جهان باز میباشد ، که بازکین میتوانند در هر کوجای این بازی ' , col3 : 'asghar ali' , col4 : "انتخاب کلید ها"},
  { id: 2, col1: 'بازی gta v', col2: 'بازی جی تی آی یک بازی جهان باز میباشد ، که بازکین میتوانند در هر کوجای این بازی ' , col3 : 'asghar ali' , col4 : "انتخاب کلید ها"},
  { id: 3, col1: 'بازی gta v', col2: 'بازی جی تی آی یک بازی جهان باز میباشد ، که بازکین میتوانند در هر کوجای این بازی ' , col3 : 'asghar ali' , col4 : "انتخاب کلید ها"},
];

const columns = [
  { field: 'id', hide: true },
  { field: 'col1', headerName: 'عنوان', width: 150 },
  { field: 'col2', headerName: 'توضیحات', width: 250 },
  { field: 'col3', headerName: 'نویسنده', width: 150 },
  { field: 'col4', headerName: 'کلید ها', width: 150 },
];

const useStyles = makeStyles({
    dataGrid : {
        width : "100% !important",
        color : color4,
    }
})

const DGrid = () => {

    const classes = useStyles()
    
    return (
        <div className={style.dataGrid_container}>
            <div className={style.dataGrid_title}>
                <Typography variant="body1" component="h6">آخرین محصولات</Typography>
            </div>
            <div style={{height : "320px"}}>
                <DataGrid className={classes.dataGrid} pageSize={5} rows={rows} columns={columns} />
            </div>
        </div>
    )
}

export default DGrid;
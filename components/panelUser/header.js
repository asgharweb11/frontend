import { useState } from "react"
import {
    Typography , IconButton , Tooltip, Box , Button, Drawer
} from "@material-ui/core"
import {
    makeStyles
} from "@material-ui/core/styles"
// Icons 
import {
    MailOutline,
    Notifications,
    PermContactCalendar,
} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
// Components 
import {
    color,color2,color3
} from "./styles/styles"
import Slider from "./slidebar"
// Style 
import style from "../../styles/panelUser/header.module.scss"
import {
    boxShadow
} from "./styles/styles"

const useStyles = makeStyles({
    btnMenu : {
        background : "white",
        color : color3
    },
    icons : {
        color : color2,
    },
    boxicons : {
        boxShadow : boxShadow,
        background : "white",
        borderRadius : "5px",
        "& button" : {
            borderRadius : "0"
        }
    }
})

const Slidebar = () => {
    const classes = useStyles()
    const [state , setState] = useState();
    const handleMenu = () => {
        setState(!setState)
    }
    return (
        <div className={style.header_main}>
            <div className={style.title}>
                <Box display={{ xs : 'none' , md : 'block'}}>
                    <Typography variant="h6" component="h6">داشبورد</Typography>
                </Box>
                <Box display={{ xs : 'block' , md : 'none'}}>
                    <Button onClick={() => setState(true)} className={classes.btnMenu} variant="contained">
                        <MenuIcon />
                    </Button>
                </Box>
            </div>
            <div className={classes.boxicons}>
                <Tooltip title="پیام ها">
                    <IconButton>
                        <MailOutline className={classes.icons} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="پیغام ها">
                    <IconButton>
                        <Notifications className={classes.icons}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="حساب">
                    <IconButton>
                        <PermContactCalendar className={classes.icons}/>
                    </IconButton>
                </Tooltip>
            </div>
            <Drawer anchor="left" open={state} onClose={handleMenu}>
                <Slider />
            </Drawer>
        </div>
    )
}

export default Slidebar
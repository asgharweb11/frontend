import React , {useState} from "react"
import {
    Grid,
    Fab,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
} from "@material-ui/core"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {makeStyles , useTheme} from "@material-ui/core/styles"

// Icons
import {
    Navigation
} from '@material-ui/icons';
// Styles
import style from "../../../styles/main/section.module.css"
// Components 
import Sliderbar from "./slidebar"


const useStyles = makeStyles({
    fab : {
        position: "fixed",
        bottom: "50px",
        left: "50px",
        color: "white",
        background: "linear-gradient(68deg, rgba(250,72,114,1) 0%, rgba(120,87,254,1) 100%)",
        zIndex: 5,
    },
    icon : {
        marginRight : "5px"
    },
    dialog : {
        textAlign : "left"
    }
});



const navMenu = ({bool , draw}) => {

    const classes = useStyles();
    const [open , setOpen] = useState(false)

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }

    return (
        <div>
            
                <React.Fragment>
                    <Fab className={classes.fab} variant="extended" onClick={handleOpen}>
                        <Navigation className={classes.icon} />
                        دسته بندی ها
                    </Fab>
                    <Dialog
                        className={classes.dialog}
                        fullWidth={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogContent>
                            <DialogContentText>
                                <Sliderbar />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                بستن
                            </Button>
                        </DialogActions>
                    </Dialog>

                </React.Fragment>
        </div>
    )
}

export default navMenu
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    snackbar : {
        position : 'fixed',
        bottom : 50
    }
}));

export const AlertComp = ({handleSnackbar , active , msg , color}) => {
    // color => error success info warning
    
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        handleSnackbar(false)
        // setOpen(false);
    };

    return (
        <div>
            <Alert onClose={handleClose} severity={color}>{msg}</Alert>
        </div>
    );
}
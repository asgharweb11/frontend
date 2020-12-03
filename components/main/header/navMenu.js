import React , {useState} from "react"
import Link from "next/link"
import { useDispatch } from "react-redux"
import clsx from 'clsx';
import {
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Button,
    Drawer

} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
// Icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import InfoIcon from '@material-ui/icons/Info';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
// Styles
import style from "../../../styles/main/header.module.css"
//Component
import { DetailAction } from "../../../store/actions/detailAction"


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    listBtn : {
        color: "#949494",
        "&:hover" : {
            color : "#ff5656"
        }
    },
    listIcons : {
        padding: "10px",
        textAlign: "center",
        color: "#cecece"
    }
});



const navMenu = ({bool , draw}) => {

    const dispatch = useDispatch();
    const classes = useStyles();

    
    const links = [
        {btn : "خانه",link : "/" , icon : HomeIcon},
        {btn : "فروشگاه",link : "/shops" , icon : StorefrontIcon},
        {btn : "ساخت فروشگاه",link : "/register" , icon : InfoIcon},
        {btn : "ارتباط با ما",link : "/contact" , icon : PermContactCalendarIcon}
    ]

    const drawToogle = (booling) => {
        draw()
    }

    const list = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={drawToogle}
            onKeyDown={drawToogle}
        >
            <div className={style.navHeader_main}>
                <img src="./profile/1.jpg" alt="navMenu" />
                <div className={style.navHeader_texts}>
                    <h4>Asghar ali</h4>
                    <p>asgharweb11@gmail.com</p>
                </div>
            </div>
            <div className={style.navHeader_list}>
                <List>
                    {links.map((text, index) => (
                        <Link href={text.link} key={index}>
                            <ListItem onClick={() => {dispatch(DetailAction(true))}} className={classes.listBtn} button key={text.btn}>
                                <ListItemIcon className={classes.listIcons}>
                                    <ChevronLeftIcon />
                                </ListItemIcon>
                                <ListItemText primary={text.btn} />
                                <ListItemIcon className={classes.listIcons}>
                                    {
                                        <text.icon />
                                    }
                                </ListItemIcon>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </div>
        </div>
    );


    return (
        <div>
            
                <React.Fragment>
                    <Drawer anchor="left" open={bool} onClose={drawToogle}>
                        {list()}
                    </Drawer>
                </React.Fragment>
        </div>
    )
}

export default navMenu
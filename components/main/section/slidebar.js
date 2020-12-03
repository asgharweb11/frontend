import {useState} from "react"
import Link from "next/link"
import {
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse
} from "@material-ui/core"
// Icons 
import {
    ExpandLess,
    ExpandMore,
    LensOutlined
} from '@material-ui/icons';
import {makeStyles} from "@material-ui/core/styles"
//Style
import style from "../../../styles/main/section.module.css"

const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(5),
    },
    text : {
        color: "#9c9c9c",
        "&:hover" : {
            color : "#ff8989"
        }
    }
}));



const Slidebar = () => {

    const classes = useStyles();
    const [btns , setBtns] = useState({
        menu1 : true,
        menu2 : false,
        menu3 : false
    })

    const handleClick = (menu , bool) => e => {
        setBtns({
            ...btns,
            [menu] : !bool
        })
    }

    
    return (
        <div className={style.slidbar_main}>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid className={style.slidebar_header} item xs={12}>
                    <h3>دسته بندی ها</h3>
                </Grid>
                <Grid className={style.slidebar_navmenu} item xs={12}>
                    <ListItem button onClick={handleClick("menu1" , btns.menu1)}>
                        <ListItemIcon>
                            <ExpandMore />
                        </ListItemIcon>
                        <ListItemText className={classes.text} primary="پلتفرم" />
                    </ListItem>
                    <Collapse className={style.sliderbar_btnunder} in={btns.menu1} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link href="/">
                                <ListItem className={classes.nested} button>
                                    <ListItemText className={classes.text} primary="کامپیوتر" />
                                </ListItem>
                            </Link>
                            <Link href="/">
                                <ListItem className={classes.nested} button>
                                    <ListItemText className={classes.text} primary="پلی استیشن 4" />
                                </ListItem>
                            </Link>
                            <Link href="/">
                                <ListItem className={classes.nested} button>
                                    <ListItemText className={classes.text} primary="ایکس باکس وان" />
                                </ListItem>
                            </Link>
                            <Link href="/">
                                <ListItem className={classes.nested} button>
                                    <ListItemText className={classes.text} primary="اندروید" />
                                </ListItem>
                            </Link>
                                
                        </List>
                    </Collapse>



                    <Link href="/">
                        <ListItem button>
                            <ListItemIcon>
                                <LensOutlined fontSize="small"/>
                            </ListItemIcon>
                            <ListItemText className={classes.text} primary="Sent mail" />
                        </ListItem>
                    </Link>
                    <ListItem button onClick={handleClick("menu2" , btns.menu2)}>
                        <ListItemIcon>
                            <ExpandMore />
                        </ListItemIcon>
                        <ListItemText className={classes.text} primary="Inbox" />
                    </ListItem>
                    <Collapse in={btns.menu2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link href="/">
                                <ListItem className={classes.nested} button>
                                    <ListItemText className={classes.text} primary="Starred" />
                                </ListItem>
                            </Link>
                            <Link href="/">
                                <ListItem className={classes.nested} button>
                                    <ListItemText className={classes.text} primary="Starred" />
                                </ListItem>
                            </Link>
                            <Link href="/">
                                <ListItem className={classes.nested} button>
                                    <ListItemText className={classes.text} primary="Starred" />
                                </ListItem>
                            </Link>
                            <Link href="/">
                                <ListItem className={classes.nested} button>
                                    <ListItemText className={classes.text} primary="Starred" />
                                </ListItem>
                            </Link>
                            <Link href="/">
                                <ListItem className={classes.nested} button>
                                    <ListItemText className={classes.text} primary="Starred" />
                                </ListItem>
                            </Link>
                                
                        </List>
                    </Collapse>


                    <Link href="/">
                        <ListItem button>
                            <ListItemIcon>
                                <LensOutlined fontSize="small" />
                            </ListItemIcon>
                            <ListItemText className={classes.text} primary="Drafts" />
                        </ListItem>
                    </Link>


                    <ListItem button onClick={handleClick("menu3" , btns.menu3)}>
                        <ListItemIcon>
                            <ExpandMore />
                        </ListItemIcon>
                        <ListItemText className={classes.text} primary="Inbox" />
                    </ListItem>
                    <Collapse in={btns.menu3} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link href="/">
                                <ListItem className={classes.nested} button>
                                    <ListItemText className={classes.text} primary="Starred" />
                                </ListItem>
                            </Link>
                            <Link href="/">
                                <ListItem className={classes.nested} button>
                                    <ListItemText className={classes.text} primary="Starred" />
                                </ListItem>
                            </Link>
                            <Link href="/">
                                <ListItem className={classes.nested} button>
                                    <ListItemText className={classes.text} primary="Starred" />
                                </ListItem>
                            </Link>
                            <Link href="/">
                                <ListItem className={classes.nested} button>
                                    <ListItemText className={classes.text} primary="Starred" />
                                </ListItem>
                            </Link>
                            <Link href="/">
                                <ListItem className={classes.nested} button>
                                    <ListItemText className={classes.text} primary="Starred" />
                                </ListItem>
                            </Link>
                                
                        </List>
                    </Collapse>

                </Grid>
            </Grid>
        </div>
    )

}

export default Slidebar;
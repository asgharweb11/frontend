import Link from "next/link"
import React from "react"
import {
    Grid, 
    Paper,
    IconButton,
    Badge,
    Button
} from "@material-ui/core"
import {withStyles , makeStyles} from "@material-ui/core/styles"
import {CSSTransition} from "react-transition-group"
// Icons 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// Style Css
import style from "../../../styles/main/header.module.css"


const StyleBadge = withStyles((theme) => ({
    badge : {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        background : "#ff7b92",
        color: "rgb(255 255 255)"
    }
}))(Badge)

const useStyle = makeStyles({
    btnIcon : {
        background : "linear-gradient(0deg, rgba(255,167,167,1) 0%, rgba(255,106,230,1) 100%)",
        color : "white",
        boxShadow: "0px 0px 5px #fff",
        "&:hover" : {
            boxShadow: "0px 0px 5px #bdb5b5"
        }
    },
    paper : {
        boxShadow : "0px 0px 5px #e2e2e2"
    },
    icons : {
        color : "rgb(175 175 175 / 54%)"
    }
    
})


const PanelProfile = ({name}) => {
    const classes = useStyle();
    // ------- state
    return (
        <CSSTransition in={name} timeout={10} unmountOnExit classNames={{
            enter: style.FadeBottom_enter,
            enterActive: style.FadeBottom_active_enter,
            exit: style.FadeBottom_exit,
            exitActive: style.FadeBottom_active_exit,
        }}>
            <div className={style.profile_main}>
                <Paper className={classes.paper}>
                    <Grid container className={style.profile_paper}>
                        <div className={style.profile_photo}>
                            <img src="/profile/1.jpg" alt="profile" />
                        </div>
                        <div className={style.profile_detail}>
                            <div className={style.profile_title}>
                                <h5>Aasghar Ali</h5>
                            </div>
                            
                            <div className={style.profile_button}>
                                <Button className={classes.btnIcon} variant="contained">
                                    <Link href="/dashboard"><a>Divar Acc</a></Link>
                                </Button>
                            </div>
                            <div className={style.profile_links}>
                                <Link href="/">
                                    <IconButton className={classes.icons} aria-label="cart">
                                        <StyleBadge badgeContent={4} color="primary" invisible={false}>
                                            <ShoppingCartIcon />
                                        </StyleBadge>
                                    </IconButton>
                                </Link>
                                <Link href="/">
                                    <IconButton className={classes.icons} aria-label="cart">
                                        <StyleBadge badgeContent={4} color="primary" invisible={true}>
                                            <ShoppingCartIcon />
                                        </StyleBadge>
                                    </IconButton>
                                </Link>
                                <Link href="/">
                                    <IconButton className={classes.icons} aria-label="cart">
                                        <StyleBadge badgeContent={0} color="primary" invisible={false}>
                                            <ShoppingCartIcon />
                                        </StyleBadge>
                                    </IconButton>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                </Paper>
            </div>
        </CSSTransition>
    )
}


export default PanelProfile;
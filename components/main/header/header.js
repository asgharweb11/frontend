import React , {useState} from "react"
import Link from "next/link"
import { useDispatch } from "react-redux"
import {makeStyles} from "@material-ui/core/styles"
import {
    Avatar,
    IconButton,
    Badge,
    Button
} from "@material-ui/core"
// ---icon 
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PageviewIcon from '@material-ui/icons/Pageview';
import MenuIcon from '@material-ui/icons/Menu';
// -- Style 
import style from "../../../styles/main/header.module.css"
// ---- Components 
import { DetailAction } from "../../../store/actions/detailAction"
import Profile from "./profile";
import Cart from "./cart";
import Auth from "./auth"
import Search from "./search"
import NavMenu from "./navMenu"
import NavCategori from "../section/navCategori"

const useStyle = makeStyles((theme) => ({
    headericons : {
        background : "white",
        border: "1px solid #ececec",
        overflow: "visible",
        "& svg" : {
            color: "#c5c5c5",
        },
        "&:hover svg" : {
            color: "#ff9fa8",
            border: "0px",
            boxhadow: "0px 0px 5px #d4d4d4"
        }
    },
    active : {
        background: "rgb(255,167,167)",
        background: "linear-gradient(0deg, rgba(255,167,167,1) 0%, rgba(255,106,230,1) 100%)",
        "& a" : {
            color : "white"
        }
    },
    btnMenu : {
        background: "white",
        boxShadow: "0px 0px 5px #f2f2f2",
        color: "#ff6767",
        "&:hover" : {
            background : "white",
            boxShadow : "0px 0px 5px #dedede",
        }
    }
}))


const Header = () => {

    const dispatch = useDispatch();
    const classes = useStyle()
    const [pro , setPro] = useState(false)
    const [cart , setCart] = useState(false)
    const [auth , setAuth] = useState(false)
    const [search , setSearch] = useState(false)
    // -----------
    const [navBool , setnavBool] = useState(false)

    const handleProfile = () => {
        setCart(false)
        setAuth(false)
        setSearch(false)
        pro === false ? setPro(true) : setPro(false)
    }

    const handleCart = () => {
        setPro(false)
        setAuth(false)
        setSearch(false)
        cart === false ? setCart(true) : setCart(false)
    }

    const handleAuth = () => {
        setPro(false)
        setCart(false)
        setSearch(false)
        auth === false ? setAuth(true) : setAuth(false)
    }

    const handleSearch = () => {
        setPro(false)
        setCart(false)
        setAuth(false)
        search === false ? setSearch(true) : setSearch(false)
    }

    // ------------ Function Page Auth.js
    const OpenCloseAuth = () => {
        setAuth(false)
    }

    // ------------ Opne Close NavMenu
    const toggleDrawer = () => {
        setnavBool(!navBool)
    }

    return (
        <header className={style.header}>
            <div className={style.detail}>
                <div className={style.logo}>
                    <img src="/background/logo.png" alt="logo"/>
                </div>
                <div className={style.btnMenu}>
                    <Button className={classes.btnMenu} onClick={toggleDrawer} variant="contained">
                        <MenuIcon />
                    </Button>
                </div>
                <div className={style.links}>
                    <ul>
                        <li onClick={() => {dispatch(DetailAction(true))}} className={style.active}><Link href="/"><a>خانه</a></Link></li>
                        <li onClick={() => {dispatch(DetailAction(true))}}><Link href="/shops"><a>فروشگاه</a></Link></li>
                        <li onClick={() => {dispatch(DetailAction(true))}}><Link href="/register"><a>ساخت فروشگاه</a></Link></li>
                        <li onClick={() => {dispatch(DetailAction(true))}}><Link href="/contact"><a>ارتباط با ما</a></Link></li>
                    </ul>
                </div>
            </div>
            <div className={style.avator}>
                <ul>
                    <li>
                        <Avatar className={classes.headericons}>
                            <IconButton aria-label="cart" onClick={handleSearch}>
                                <Badge color="secondary" variant="dot" invisible={false}>
                                    <AssignmentIndIcon className={style.icon}/>
                                </Badge>
                            </IconButton>
                        </Avatar>
                    </li>
                    <li>
                        <Avatar className={classes.headericons}>
                            <IconButton aria-label="cart" onClick={handleAuth}>
                                <Badge color="secondary" variant="dot" invisible={false}>
                                    <PageviewIcon className={style.icon}/>
                                </Badge>
                            </IconButton>
                        </Avatar>
                    </li>
                    <li>
                        <Avatar className={classes.headericons}>
                            <IconButton aria-label="cart" onClick={handleCart}>
                                <Badge color="secondary" variant="dot" invisible={true}>
                                    <ShoppingCartIcon className={style.icon}/>
                                </Badge>
                            </IconButton>
                        </Avatar>
                    </li>
                    <li>
                        <Avatar className={classes.headericons}>
                            <IconButton aria-label="cart" onClick={handleProfile}>
                                <Badge color="secondary" variant="dot" invisible={false}>
                                    <AssignmentIndIcon className={style.icon}/>
                                </Badge>
                            </IconButton>
                        </Avatar>
                    </li>
                </ul>
                
                <Profile name={pro} />
                <Cart name={cart} />
                <Auth fun={OpenCloseAuth} display={auth}/>
                <Search display={search} />
                <NavMenu draw={toggleDrawer} bool={navBool} />
            </div>
            
            
        </header>
    )
}



export default Header;
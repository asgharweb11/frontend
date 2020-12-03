import React , { useState , useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useDispatch , useSelector } from "react-redux"
import {Container , Grid , LinearProgress} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { create } from 'jss';
import {StylesProvider , jssPreset , createMuiTheme, ThemeProvider} from "@material-ui/core/styles"
import rtl from 'jss-rtl';
import {useTransition, animated} from 'react-spring'
// Conponents
import { LoginMiddleWare } from "../store/actions/auth/index"
import Slidebar from "./panelUser/slidebar"
import Header from "./panelUser/header"

const theme = createMuiTheme({
    direction: 'rtl',
    palette: {
        light : {
            main : "#e0e0e0",
        },
        white: {
            main : "white",
        },
    },
        
});

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles({
    slider : {
        position : "relative",
        '@media (max-width: 960px)' : {
            display : "none"
        }
    }
})

const Layout = ({children}) => {

    const dispatch = useDispatch()
    const {pageLoading} = useSelector(state => state.Detail)
    const {email} = useSelector(state => state.Auth)
    const Router = useRouter()
    const classes = useStyles()

    const [show, set] = useState(true)
    const transitions = useTransition(show, null, {
        from: { transform: 'translate3d(0,40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,40px,0)' },
    })

    useEffect(() => {
        dispatch(LoginMiddleWare())
        if(!email){
            Router.push("/")
        }
    } , [email])

    return (
        <React.Fragment>
            <Head>
                <title>Dashboard</title>
            </Head>
            <StylesProvider jss={jss}>
                <ThemeProvider theme={theme}>
                    {
                        pageLoading === true && (
                            <div className="lineProgress">
                                <LinearProgress />
                            </div>
                        )
                    }
                    <div className="container-main" dir="rtl">
                        <Container className="container" maxWidth="lg">
                            <Grid className="content-body" container direction="row" justify="center">
                                <Grid className={classes.slider} item md={3} xs={2}>
                                    <Slidebar />
                                </Grid>
                                <Grid className="section" item md={9} xs={12}>
                                    <Grid container direction="row" justify="center" alignItems="center">
                                        <Grid item xs={12}>
                                            <Header />
                                        </Grid>
                                        <Grid item xs={12}>
                                            {
                                                transitions.map( ({ item, key, props }) => {
                                                    if(item) {
                                                        return (
                                                            <animated.div key={key} style={props}>
                                                                <main className="main">{children}</main>
                                                            </animated.div>
                                                        )
                                                    }
                                                })
                                            }
                                            
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            
                            
                        </Container>
                    </div>
                </ThemeProvider>
            </StylesProvider>
            
            <style jsx global>{`
                body {
                    background-color : #F9F9F9
                }
                .lineProgress{
                    width: 100%;
                    position: fixed;
                    top: 0;
                    z-index: 50;
                }
                .container-main{
                }
                .container {
                    margin : 50px 0px;
                }
                .content-body{
                    background-color: white;
                    padding: 15px;
                    border-radius: 15px;
                    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.12);

                }
                .section{
                    background: #fbfbff;
                    border-radius: 15px;
                    padding: 15px;
                    border: 1px solid #efefef;
                }
                .main{
                    margin-top : 25px;
                }

                @media (max-width : 330px){
                    .container{
                        padding : 0;
                        margin : 0;
                    }
                    .content-body{
                        padding : 0;
                    }
                }
            `}</style>

        </React.Fragment>
    )
}

export default Layout;
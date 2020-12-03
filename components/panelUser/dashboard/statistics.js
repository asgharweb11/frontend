import {useState} from "react"
import {
    Grid , Card , CardActionArea , Typography , IconButton
} from "@material-ui/core"
import {
    makeStyles
} from "@material-ui/core/styles"
import { animated , useTransition} from "react-spring"
// Icons 
import {
    AccountBalanceWallet , AttachMoney , LocalMall , QuestionAnswer , TrendingUp , TrendingDown
} from '@material-ui/icons';
//Component
import {
    colorBlue , boxShadow
} from "../styles/styles"
// Styles
import style from "../../../styles/panelUser/dashboard.module.scss"

const useStyles = makeStyles({
    icon_header : {
        borderRadius : "20px"
    },
    card : {
        boxShadow : boxShadow,
        borderRadius : "15px"
    }
})

const statistics = () => {

    const red = {
        color : "red",
        background : "blue"
    }

    const datas = [
        {
            key : 1,
            text : "موجودی فعلی",
            price : "1.580.000 T",
            icon1 : AccountBalanceWallet,
            trending : "+2.14",
            icon2 : TrendingUp,
            styles : {
                bg : {
                    background: "#e7e7fb"
                },
                color : {
                    color : "#7d7dff"
                },
                trend : {
                    color : "#2bf72b"
                }
            }
        },
        {
            key : 2,
            text : "کجموع فروش ها",
            price : "12.580.000 T",
            icon1 : AttachMoney,
            trending : "-1.05",
            icon2 : TrendingDown,
            styles : {
                bg : {
                    background: "#fbf6e7"
                },
                color : {
                    color : "#fbd051"
                },
                trend : {
                    color : "red"
                }
            }
        },
        {
            key : 3,
            text : "مجموع محصولات",
            price : "32",
            icon1 : LocalMall,
            trending : "+1.15",
            icon2 : TrendingUp,
            styles : {
                bg : {
                    background: "#fbe7f9"
                },
                color : {
                    color : "#fd76ef"
                },
                trend : {
                    color : "#2bf72b"
                }
            }
        },
        {
            key : 4,
            text : "مجموع کامنت ها",
            price : "143",
            icon1 : QuestionAnswer,
            trending : "-0.12",
            icon2 : TrendingDown,
            styles : {
                bg : {
                    background : "#ffd3d3"
                },
                color : {
                    color : "#ff5b5b"
                },
                trend : {
                    color : "red"
                }
            }
        },

    ]


    const classes = useStyles()
    return (
        <Grid className={style.statis_gridContainer} container direction="row" justify="center" spacing={3}>
            {
                
                datas.map( item => {
                    return (
                        <Grid className={style.statis_gridItem} item lg={3}  sm={6} xs={12} key={item.key} >
                            <Card className={classes.card}>
                                <CardActionArea className={style.statis_cardArea}>
                                    <div className={style.statis_header}>
                                        <div className={style.statis_texts}>
                                            <Typography variant="overline" component="p">{item.text}</Typography>
                                            <Typography variant="h6" component="h6">{item.price}</Typography>
                                        </div>
                                        <div className={style.statis_icon} style={item.styles.bg}>
                                            <IconButton className={classes.icon_header} style={item.styles.color}>
                                                {<item.icon1 />}
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div className={style.statis_sod} style={item.styles.trend}>
                                        <Typography variant="caption" component="p">{item.trending}</Typography>
                                        {<item.icon2 />}
                                    </div>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                })
            }
            
            

        </Grid>
    )
}

export default statistics;
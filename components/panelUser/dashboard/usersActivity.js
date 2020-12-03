import {
    Typography,
    Card,
    CardActionArea
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Slider from "react-slick"
// Components 
import { color4 } from "../styles/styles"
// Styles 
import style from "../../../styles/panelUser/dashboard.module.scss"


const useStyles = makeStyles({
    chart_slider_card : {
        boxShadow : "0 0 black"
    },
    chart_slider_cardArea : {
        padding: "5px",
        color: color4,
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
    },
})



const Users = () => {

    const classes = useStyles()
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    }

    return (
        <div className={style.chart_slider_container}>
            <div className={style.chart_slider_title}>
                <Typography variant="body1" component="h6">پر فعالیت ترین ها</Typography>
            </div>
            <Slider {...settings}>
                <div className={style.chart_slider}>
                    <Card className={classes.chart_slider_card}>
                        <CardActionArea className={classes.chart_slider_cardArea}>
                            <div className={style.chart_slider_photo}>
                                <img src="/profile/2.jpg" alt="داشبورد" />
                            </div>
                            <div className={style.chart_slider_texts}>
                                <Typography variant="body1" component="h6">اصغر علی عبدی</Typography>
                                <Typography variant="caption" component="p">asgharweb11@gamil.com</Typography>
                            </div>
                            <div className={style.chart_slider_activity}>
                                <div className={style.chart_slider_header}>
                                    <Typography variant="caption" component="h6">فعالیت</Typography>
                                </div>
                                <div className={style.chart_slider_progress}>
                                    70%
                                </div>
                            </div>
                        </CardActionArea>
                    </Card>
                </div>
                <div className={style.chart_slider}>
                    <Card className={classes.chart_slider_card}>
                        <CardActionArea className={classes.chart_slider_cardArea}>
                            <div className={style.chart_slider_photo}>
                                <img src="/profile/2.jpg" alt="داشبورد" />
                            </div>
                            <div className={style.chart_slider_texts}>
                                <Typography variant="body1" component="h6">اصغر علی عبدی</Typography>
                                <Typography variant="caption" component="p">asgharweb11@gamil.com</Typography>
                            </div>
                            <div className={style.chart_slider_activity}>
                                <div className={style.chart_slider_header}>
                                    <Typography variant="caption" component="h6">فعالیت</Typography>
                                </div>
                                <div className={style.chart_slider_progress}>
                                    70%
                                </div>
                            </div>
                        </CardActionArea>
                    </Card>
                </div>
            </Slider>
        </div>
        
    )
}
export default Users
import Slider from "react-slick"
import {
    Grid,
    Card,
    CardActionArea
} from "@material-ui/core"
// Style
import style from "../../../../styles/main/shop.module.css"


const Carousel = () => {


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    }

    return (
        <Grid className={style.carousel} Container direction="row" justofy="center">
            <Grid className={style.carousel_carousel} item xs={12}>
                <Slider {...settings}>
                    <div className={style.carousel_slider}>
                        <Card className={style.carousel_Card}>
                            <CardActionArea className={style.carouselCardArea}>
                                <img src="/post/8.jpg" alt="Post" />
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className={style.carousel_slider}>
                        <Card className={style.carousel_Card}>
                            <CardActionArea className={style.carouselCardArea}>
                                <img src="/post/9.jpg" alt="Post" />
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className={style.carousel_slider}>
                        <Card className={style.carousel_Card}>
                            <CardActionArea className={style.carouselCardArea}>
                                <img src="/post/10.jpg" alt="Post" />
                            </CardActionArea>
                        </Card>
                    </div>
                </Slider>
            </Grid>
        </Grid>
    )
}

export default Carousel
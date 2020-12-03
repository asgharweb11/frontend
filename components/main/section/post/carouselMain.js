import { useEffect , useState } from "react"
import { API } from '../../../../config'
import cookie from "js-cookie"
import {
    Grid,
    CardMedia,
    Typography,
    IconButton,
    Button
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core"
import Slider from "react-slick";
// Components
import Bread from "../breadcrumbs"
// Icons
import {
    Devices,
    SportsEsports,
    Straighten,
    ChevronLeft,
    ChevronRight,
    LocalMall,
} from '@material-ui/icons';
// Components 
// Styles
import style from "../../../../styles/main/post.module.css"
// --------------------------- Methods ---------------------------------
import { ShortText , toman } from "../../../../methods/validator"


const useStyle = makeStyles({
    carouselS : {
        height : 100
    },
    carouselThumb : {
        marginBottom : 60
    },
    btnBuy : {
        color: "#ffffff",
        background: "#ff6b6b",
        padding: "15px",
        transitions : "0.5s",
        "&:hover" : {
            background : "red"
        }
    },
    MeidaCarousel : {
        height : "500px",
        "@media (max-width : 850px)" : {
            height : "420px"
        },
        "@media (max-width : 699px)" : {
            height : "325px"
        },
        "@media (max-width : 500px)" : {
            height : "230px"
        },
        "@media (max-width : 350px)" : {
            height : "125px"
        }
    }

})

const CarouselL = ({data}) => {

    const classes = useStyle();

    const [card , setCard] = useState({
        id : data.post_id,
        idshop : data.idshop,
        title : data.title,
        photo : data.photos[0],
        price : data.price,
        number : 1,
        status : false
    })

    const getCard = cookie.get('card')
    useEffect(() => {
        if(getCard !== undefined){
            JSON.parse(getCard).map((card) => card.id === data.post_id && setCard({...card , status : true}))
        }
    } , [])

    const CarouselMain = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };

    const handleAddToCard = post => e => {
        // ----------
        if(card.number > 0){
            if(getCard === undefined){
                const JCard = cookie.set("card" , JSON.stringify([card]) , {expires : 2})
            } else {
                const JCard = JSON.parse(getCard);
                JCard.push(card)
                cookie.set("card" , JCard , {expires : 2})
            }
            setCard({...card , status : true})
        }
    }


    const handleCard = (num) => e => {
        if(num === 'increment'){
            setCard({...card , number : parseInt(card.number) + 1})
        } else if(card.number > 1){
            setCard({...card , number : parseInt(card.number) - 1})
        }
    }



    return (
        <Grid className={style.container} container direction="row" justify="center">
            <Grid className={style.bread} item xs={12}>
                <Bread />
            </Grid>
            <Grid className={style.carousel} item md={6} xs={12}>
                <Grid container direction="row" justify="center" className={style.carousel_container}>
                    <Grid className={style.carousel_main} item xs={12}>
                        <Slider {...CarouselMain}>
                            {
                                data.photos.map((item , index) => {
                                    return (
                                        <div className={style.carouselBig} key={index}>
                                            <CardMedia
                                                className={classes.MeidaCarousel}
                                                component="img"
                                                alt={data.title}
                                                image={`${API}/detail/files/${data.idshop}/${item}`}
                                                title={data.title} 
                                            />
                                        </div>
                                    )
                                })
                                
                            }

                        </Slider>
                    </Grid>
                    <Grid className={style.boxBuy} item xs={12}>
                        <Button onClick={handleAddToCard(data.post_id)} className={classes.btnBuy} disabled={card.status} fullWidth>
                            <LocalMall />
                            <div className={style.textBtn}>
                                اضافه به سبد خرید
                            </div>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={style.content} item md={6} xs={12}>
                <Grid container direction="row" justify="center">
                    <Grid className={style.header} item xs={12}>
                        <div className={style.title}>
                            <Typography variant="h5" component="h1">{data.title}</Typography>
                        </div>
                        <div className={style.price}>
                            <Typography variant="h6">
                                {toman(data.price)} تومان
                            </Typography>
                        </div>
                    </Grid>
                    <Grid className={style.special} item xs={12}>
                    <div className={style.boxSpecial}>
                            <div className={style.boxIcon}>
                                <IconButton>
                                    <Devices />
                                </IconButton>
                            </div>
                            <div className={style.boxText}>
                                <Typography variant="subtitle1" component="p">
                                    {data.category}
                                </Typography>
                            </div>
                        </div>
                        <div className={style.boxSpecial}>
                            <div className={style.boxIcon}>
                                <IconButton>
                                    <SportsEsports />
                                </IconButton>
                            </div>
                            <div className={style.boxText}>
                                <Typography variant="subtitle1" component="p">
                                    تعداد : {data.number}
                                </Typography>
                            </div>
                        </div>
                        <div className={style.boxSpecial}>
                            <div className={style.boxIcon}>
                                <IconButton>
                                    <Straighten />
                                </IconButton>
                            </div>
                            <div className={style.boxText}>
                                <Typography variant="subtitle1" component="p">
                                    ظرفیت سه
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid className={style.descript} item xs={12}>
                        <Typography variant="subtitle1" component="p">{data.descript}</Typography>
                    </Grid>
                    <Grid className={style.numberProduct} item xs={12}>
                        <div className={style.IconNum}>
                            <IconButton onClick={handleCard('increment' , data.number)}>
                                <ChevronRight />
                            </IconButton>
                        </div>
                        <div>
                            <div className={style.boxNum}>{card.number}</div>
                        </div>
                        <div className={style.IconNum}>
                            <IconButton onClick={handleCard('decrement' , data.number)}>
                                <ChevronLeft />
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <style jsx global>{`
                .carouselSmall{

                }
                .carouselSmall li {
                    margin: 0 25px;
                }
            `}</style>
        </Grid>
    )
}

export default CarouselL
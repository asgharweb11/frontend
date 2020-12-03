import {
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
    Typography,
    Button
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core"
import Slider from "react-slick";
// Styles
import style from "../../../../styles/main/post.module.css"


const useStyle = makeStyles({
    postBtns : {
        display: "flex",
        flexDirection : "row-reverse",
        justifyContent: "space-between",
        alignItems: "center",
        "& p" : {
            color: "#c3c3c3"
        }
    },
    postLike : {
        padding: "10px",
        background: "white",
        boxShadow : "1px 2px 5px #eaeaea"
    },
    card : {
        boxShadow : "-1px 2px 5px #e6e6e6"
    },
    btnMore : {
        color: "#a9a7a7",
        background: "white",
        boxShadow: "0px 0px 0px #e0e0e0",
        transition : "0.5s",
        "&:hover" : {
            background : "white",
            color : "#464646",
            boxShadow : "-1px 2px 5px #e0e0e0"
        }
    }

})


const PostsLike = () => {
    const classes = useStyle();

    const PostsLike = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Grid className={classes.postLike} container direction="row" justify="center">
            <Grid className={classes.posts} item xs={12}>
                <Slider
                    {...PostsLike}
                >
                    <div className={style.post}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <div className={style.postPhotos}>
                                    <CardMedia
                                        component="img"
                                        title="Post"
                                        image="/post/2.jpg"
                                        alt="Post"
                                        height="200"
                                    />
                                </div>
                                <div className={style.postText}>
                                    <Typography variant="h6" component="h3">
                                        Game Rainbow Six 2
                                    </Typography>
                                    <Typography variant="subtitle1" component="p">
                                    فروش کنسول‌های بازی و بازی‌های ویدئویی آغاز کرده و به مرور زمان وارد بازار گوشی‌های
                                    </Typography>
                                </div>
                                
                            </CardActionArea>
                            <CardActions className={classes.postBtns}>
                                <Button className={classes.btnMore} variant="contained" color="primary">
                                    بیشتر
                                </Button>
                                <p>
                                    2.500.000 T
                                </p>
                            </CardActions>
                        </Card>

                    </div>
                    <div className={style.post}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <div className={style.postPhotos}>
                                    <CardMedia
                                        component="img"
                                        title="Post"
                                        image="/post/5.jpeg"
                                        alt="Post"
                                        height="200"
                                    />
                                </div>
                                <div className={style.postText}>
                                    <Typography variant="h5" component="h3">
                                        Game Rainbow Six
                                    </Typography>
                                    <Typography variant="subtitle1" component="p">
                                    فروش کنسول‌های بازی و بازی‌های ویدئویی آغاز کرده و به مرور زمان وارد بازار گوشی‌های
                                    </Typography>
                                </div>
                                
                            </CardActionArea>
                            <CardActions className={classes.postBtns}>
                                <Button className={classes.btnMore} variant="contained" color="primary">
                                    بیشتر
                                </Button>
                                <p>
                                    2.500.000 T
                                </p>
                            </CardActions>
                        </Card>

                    </div>
                    <div className={style.post}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <div className={style.postPhotos}>
                                    <CardMedia
                                        component="img"
                                        title="Post"
                                        image="/post/7.jpg"
                                        alt="Post"
                                        height="200"
                                    />
                                </div>
                                <div className={style.postText}>
                                    <Typography variant="h5" component="h3">
                                        Game Rainbow Six
                                    </Typography>
                                    <Typography variant="subtitle1" component="p">
                                    فروش کنسول‌های بازی و بازی‌های ویدئویی آغاز کرده و به مرور زمان وارد بازار گوشی‌های
                                    </Typography>
                                </div>
                                
                            </CardActionArea>
                            <CardActions className={classes.postBtns}>
                                <Button className={classes.btnMore} variant="contained" color="primary">
                                    بیشتر
                                </Button>
                                <p>
                                    2.500.000 T
                                </p>
                            </CardActions>
                        </Card>

                    </div>
                    <div className={style.post}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <div className={style.postPhotos}>
                                    <CardMedia
                                        component="img"
                                        title="Post"
                                        image="/post/5.jpeg"
                                        alt="Post"
                                        height="200"
                                    />
                                </div>
                                <div className={style.postText}>
                                    <Typography variant="h5" component="h3">
                                        Game Rainbow Six
                                    </Typography>
                                    <Typography variant="subtitle1" component="p">
                                    فروش کنسول‌های بازی و بازی‌های ویدئویی آغاز کرده و به مرور زمان وارد بازار گوشی‌های
                                    </Typography>
                                </div>
                                
                            </CardActionArea>
                            <CardActions className={classes.postBtns}>
                                <Button className={classes.btnMore} variant="contained" color="primary">
                                    بیشتر
                                </Button>
                                <p>
                                    2.500.000 T
                                </p>
                            </CardActions>
                        </Card>

                    </div>
                    <div className={style.post}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <div className={style.postPhotos}>
                                    <CardMedia
                                        component="img"
                                        title="Post"
                                        image="/post/2.jpg"
                                        alt="Post"
                                        height="200"
                                    />
                                </div>
                                <div className={style.postText}>
                                    <Typography variant="h5" component="h3">
                                        Game Rainbow Six
                                    </Typography>
                                    <Typography variant="subtitle1" component="p">
                                    فروش کنسول‌های بازی و بازی‌های ویدئویی آغاز کرده و به مرور زمان وارد بازار گوشی‌های
                                    </Typography>
                                </div>
                                
                            </CardActionArea>
                            <CardActions className={classes.postBtns}>
                                <Button className={classes.btnMore} variant="contained" color="primary">
                                    بیشتر
                                </Button>
                                <p>
                                    2.500.000 T
                                </p>
                            </CardActions>
                        </Card>

                    </div>

                </Slider>
            </Grid>
        </Grid>
        
    )
}

export default PostsLike
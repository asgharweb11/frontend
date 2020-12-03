import Link from "next/link"
import {
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    Typography,
    CardContent,
    CardActions,
    Button,
    CircularProgress,
    IconButton,
    Badge,
    Tooltip
} from "@material-ui/core"
import {makeStyles , withStyles} from "@material-ui/core/styles"
// Icons
import {
    Comment,
    LocalMall,
    ShoppingCart,
    Storefront
} from '@material-ui/icons';
// Styles
import style from "../../../../styles/main/shops.module.css"

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: 25,
      top: 0,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
}))(Badge);
  


const useStyles = makeStyles({
    posts_main : {
        marginTop: "20px"
    },
    root: {
        boxShadow: "-1px 2px 1px #e6e6e6",
    },
    media: {
        height: 230,
        position : "relative",
    },
    title : {
        marginBottom: 15,
        fontSize: "15px",
        color: "#504f4f"
    },
    ActionsBtn : {
        justifyContent: "center",
        marginBottom: "15px"
    },
    btn : {
        color: "#ffffff",
        background: "#e2cdf7",
        borderRadius: "30px",
        transition: "0.5s",
        "&:hover" : {
            color : "#a2a2a2"
        }
    },
    moreContainer : {
        marginTop : "100px",
        textAlign: "center"
    },
    btnMore : {
        color: "#7b7b7b",
        background: "white",
        boxShadow: "-1px 2px 5px #eaeaea",
        "&:hover" : {
            color : "#404040"
        }
    },
    IconBtn : {
        color : "#c7c4c4"
    },
    title : {
        fontSize: "16px",
        margin: "0px 10px"
    },
    title_icon : {

    }
});

const PostsShop = () => {

    const classes = useStyles();

    return (
        <Grid className={classes.posts_main} container direction="row" justify="flex-start" spacing={3}>
            
            <Grid item md={4} sm={6} xs={12}>
                <Card className={`${classes.root} ${style.shops_main}`}>
                    <CardActionArea>
                        <div className={style.shops_photos}>
                            <CardMedia 
                            className={classes.media}
                            image="./post/7.jpg"
                            title="shops"
                            />
                            <div className={style.shops_img}>
                                <img src="./post/2.jpg" alt="shops" />
                            </div>
                        </div>
                        <CardContent>
                            <div className={style.shops_texts}>
                                <div className={style.shops_title}>
                                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                                        بازی آخرین بازمانده 2
                                    </Typography>
                                    <Storefront className={classes.title_icon} />
                                </div>
                                
                                <div className={style.shops_status}>
                                    <Tooltip title="کامنت ها" placement="top">
                                        <IconButton className={classes.IconBtn} aria-label="cart">
                                            <StyledBadge badgeContent={999999} color="secondary">
                                                <Comment />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="محصولات" placement="top">
                                        <IconButton className={classes.IconBtn} aria-label="cart">
                                            <StyledBadge badgeContent={0} color="secondary">
                                                <LocalMall />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="فروش ها" placement="top">
                                        <IconButton className={classes.IconBtn} aria-label="cart">
                                            <StyledBadge badgeContent={3} color="secondary">
                                                <ShoppingCart />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </div>
                        </CardContent>
                    </CardActionArea>
                    <Link href="/shop/dez">
                        <CardActions className={classes.ActionsBtn}>
                            <Button className={classes.btn} color="primary">
                                نمایش فروشگاه
                            </Button>
                        </CardActions>
                    </Link>
                    
                </Card>
            </Grid>

            <Grid item md={4} sm={6} xs={12}>
                <Card className={`${classes.root} ${style.shops_main}`}>
                    <CardActionArea>
                        <div className={style.shops_photos}>
                            <CardMedia 
                            className={classes.media}
                            image="./post/7.jpg"
                            title="shops"
                            />
                            <div className={style.shops_img}>
                                <img src="./post/3.jpg" alt="shops" />
                            </div>
                        </div>
                        <CardContent>
                            <div className={style.shops_texts}>
                                <div className={style.shops_title}>
                                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                                        بازی آخرین بازمانده 2
                                    </Typography>
                                    <Storefront className={classes.title_icon} />
                                </div>
                                
                                <div className={style.shops_status}>
                                    <Tooltip title="کامنت ها" placement="top">
                                        <IconButton className={classes.IconBtn} aria-label="cart">
                                            <StyledBadge badgeContent={999999} color="secondary">
                                                <Comment />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="محصولات" placement="top">
                                        <IconButton className={classes.IconBtn} aria-label="cart">
                                            <StyledBadge badgeContent={0} color="secondary">
                                                <LocalMall />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="فروش ها" placement="top">
                                        <IconButton className={classes.IconBtn} aria-label="cart">
                                            <StyledBadge badgeContent={3} color="secondary">
                                                <ShoppingCart />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </div>
                        </CardContent>
                    </CardActionArea>
                    <Link href="/shop/IRfox">
                        <CardActions className={classes.ActionsBtn}>
                            <Button className={classes.btn} color="primary">
                                نمایش فروشگاه
                            </Button>
                        </CardActions>
                    </Link>
                </Card>
            </Grid>


            <Grid item md={4} sm={6} xs={12}>
                <Card className={`${classes.root} ${style.shops_main}`}>
                    <CardActionArea>
                        <div className={style.shops_photos}>
                            <CardMedia 
                            className={classes.media}
                            image="./post/7.jpg"
                            title="shops"
                            />
                            <div className={style.shops_img}>
                                <img src="./post/5.jpeg" alt="shops" />
                            </div>
                        </div>
                        <CardContent>
                            <div className={style.shops_texts}>
                                <div className={style.shops_title}>
                                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                                        بازی آخرین بازمانده 2
                                    </Typography>
                                    <Storefront className={classes.title_icon} />
                                </div>
                                
                                <div className={style.shops_status}>
                                    <Tooltip title="کامنت ها" placement="top">
                                        <IconButton className={classes.IconBtn} aria-label="cart">
                                            <StyledBadge badgeContent={999999} color="secondary">
                                                <Comment />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="محصولات" placement="top">
                                        <IconButton className={classes.IconBtn} aria-label="cart">
                                            <StyledBadge badgeContent={0} color="secondary">
                                                <LocalMall />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="فروش ها" placement="top">
                                        <IconButton className={classes.IconBtn} aria-label="cart">
                                            <StyledBadge badgeContent={3} color="secondary">
                                                <ShoppingCart />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </div>
                        </CardContent>
                    </CardActionArea>
                    <Link href="/shop/mihan">
                        <CardActions className={classes.ActionsBtn}>
                            <Button className={classes.btn} color="primary">
                                نمایش فروشگاه
                            </Button>
                        </CardActions>
                    </Link>
                </Card>
            </Grid>

            

            <Grid item xs={12}>
                <Grid className={classes.moreContainer} container direction="row" justify="center" spacing={3}>
                    <Grid item xs={12}>
                        <CircularProgress />
                    </Grid>
                    <Grid item xs={12}>
                        <Button className={classes.btnMore} variant="contained">
                            محصولات بیشتر
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            

        </Grid>
    )
}

export default PostsShop
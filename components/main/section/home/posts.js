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
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import { API } from "../../../../config"
import style from "../../../../styles/main/section.module.css"
// ---------------------- Methods ---------------------------------
import { ShortText , toman} from "../../../../methods/validator"
import { query } from "express-validator"

const useStyles = makeStyles({
    posts_main : {
        marginTop: "20px"
    },
    root: {
        boxShadow: "-1px 2px 1px #e6e6e6"
    },
    media: {
        height: 140,
        position : "relative",
    },
    title : {
        marginBottom: 15,
        fontSize: "15px",
        color: "#504f4f"
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
    }
});

const Posts = ({products}) => {

    const {status  , msg , data} = products;
    const classes = useStyles();

    return (
        <Grid className={classes.posts_main} container direction="row" justify="flex-start" spacing={3}>
                {
                    data.map((item , index) => {
                        const shortText = ShortText(item.descript);
                        const price = toman(item.price) + ' تومان';
                        return (
                            <Grid item md={4} sm={6} xs={12} key={index}>
                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardMedia
                                            className={`${classes.media} ${style.posts_media}`}
                                            image={`${API}/detail/files/${item.idshop}/${item.photos[0]}`}
                                            title={item.title}
                                            />
                                            <CardContent>
                                                <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                {shortText}                           
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            {/* <Link href={`/post/${item._id}`}> */}
                                            <Link href={`post/${item.post_id}/${item.title}`}>
                                                <Button size="small" color="primary">
                                                بیشتر
                                                </Button>
                                            </Link>
                                        
                                            <Button size="small" color="primary">
                                                {price}
                                            </Button>
                                        </CardActions>
                                    </Card>
                                                                
                            </Grid>

                        )
                    })
                }

        </Grid>
    )
}

export default Posts
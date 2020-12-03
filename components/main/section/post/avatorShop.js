import Link from "next/link"
import {
    Grid,
    CardMedia,
    Typography,
    Button
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core"
import Slider from "react-slick";
// Icons
// Components 
// Styles
import style from "../../../../styles/main/post.module.css"

const useStyle = makeStyles({
    avatorShop : {
        marginTop : 25,
        background : "white",
        boxShadow : "-1px 2px 5px #eaeaea",
        padding : "20px"
    },
    boxAvator : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "flex-start",
        alignItems : "center",
        cursor : "pointer"
    },
    cardMedia : {
        width : "50px",
        height : "50px",
        borderRadius : "35px",
        marginLeft : "15px"
    },
    textAvator : {
        textAlign : "right",
        transition : "0.5s",
    },
    btnAvator : {
        display: "flex",
        justifyContent: "flex-end",
        "@media (max-width : 600px)" : {
            display : "none"
        }
    },
    buttonAvator : {
        background: "#f9f9f9",
        padding: "10px",
        color: "#6b6a6a",
        transition : "0.5s",
        "&:hover" : {
            background: "#ff74da",
            color: "white"
        }
    }
})


const AvatorShop = () => {
    const classes = useStyle();
    return (
        <Grid className={classes.avatorShop} container direction="row" justify="center">
            <Grid item sm={6} xs={12}>
                <Link href="/post/1">
                    <div className={classes.boxAvator}>
                        <CardMedia
                            className={classes.cardMedia}
                            component="img"
                            alt="profile shops"
                            image="/profile/1.jpg"
                            title="profile shops"
                        />
                        <div className={style.textAvator}>
                            <Typography variant="subtitle1" component="h6">
                                Dezfoul Iran
                            </Typography>
                            <Typography className={classes.textAvator} variant="subtitle2" component="p">
                                <span>سازنده : </span>
                                اصغر علی عبدی
                            </Typography>
                        </div>
                    </div>
                </Link>
            </Grid>
            <Grid className={classes.btnAvator} item sm={6} xs={12}>
                <Link href="/post/1">
                    <Button className={classes.buttonAvator}>
                        مشاهده فروشگاه
                    </Button>
                </Link>
                
            </Grid>
        </Grid>
    )
}

export default AvatorShop
import Link from "next/link"
import {
    Grid , Typography , IconButton , Card , CardActionArea
} from "@material-ui/core"
// Icons 
import {
    Telegram , WhatsApp , Instagram
} from '@material-ui/icons';
// Styles
import style from "../../../../styles/main/shop.module.css"


const DetailShop = () => {
    return (
        <Grid className={style.detailShop} container direction="row" justify="center">
            <Grid className={style.detailShop_box}>
                <Card className={style.detailShop_card}>
                    <CardActionArea className={style.detailShop_cardArea}>
                        <div className={style.detailShop_profile}>
                            <img src="/profile/4.jpg" alt="profile Shop" />
                        </div>
                        <div className={style.detailShop_name}>
                            <Typography variant="h6" component="h1">Dez Account Ps4</Typography>
                            <Typography variant="caption" component="h3"><span>سازنده :</span>اصغر علی عبدی</Typography>
                        </div>
                        <div className={style.detailShop_descript}>
                            <Typography variant="body2" component="p">
                                تولید کننده متن ساختگی لورم ایپسوم فارسی، انگلیسی و امکان ترکیب آن با کدهای HTML و CSS، ایجاد و ویرایش متن سفارشی، تولید رنگ گرادینت، ابزار انتخاب 
                            </Typography>
                        </div>
                    </CardActionArea>
                    <div className={style.detailShop_icons}>
                        <Link href="/">
                            <IconButton>
                                <Telegram />
                            </IconButton>
                        </Link>
                        <Link href="/">
                            <IconButton>
                                <WhatsApp />
                            </IconButton>
                        </Link>
                        <Link href="/">
                            <IconButton>
                                <Instagram />
                            </IconButton>
                        </Link>
                    </div>

                </Card>         
            </Grid>
        </Grid>
    )
}

export default DetailShop
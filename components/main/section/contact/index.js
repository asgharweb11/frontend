import Link from "next/link"
import {
    Grid, CardMedia, Typography , IconButton
} from "@material-ui/core"
// Icons
import {
    Instagram , Telegram , WhatsApp
} from '@material-ui/icons';
// Styles
import style from "../../../../styles/main/contact.module.css"


const Contact = () => {
    return (
        <Grid className={style.contact} container direction="row" justify="center" alignContent="center">
            <Grid className={style.photo} item sm={6} xs={12}>
                <CardMedia
                    component="img"
                    title="ارتباط با ما"
                    image="/background/contact.jpg"
                    alt="ارتباط با ما"
                />
            </Grid>
            <Grid className={style.waysContacts} item sm={6} xs={12}>
                <div className={style.title}>
                    <Typography variant="h6" component="h1">ارتباط با ما</Typography>
                </div>
                <div className={style.text}>
                    <Typography variant="body2" component="p">
                    ما در راکت سعی داریم ارتباط دوطرفه و قدرتمندی بین وبسایت آموزشی راکت و برنامه نویسان ایجاد کنیم. اگر احساس کردید به هر دلیلی نیاز به ارتباط با راکت دارید میتوانید از یکی از راه‌های زیر این ارتباط را برقرار کنید . اما قبل از اینکه این راه‌ها را برایتان لیست کنم لطفا به نکات زیر دقت کنید تا بتوانیم با شما ارتباط بهتری برقرار کنیم.
                    </Typography>
                </div>
                <div className={style.iconsContact}>
                    <Link href="/contact">
                        <IconButton>
                            <Instagram />
                        </IconButton>
                    </Link>
                    <Link href="/contact">
                        <IconButton>
                            <Telegram />
                        </IconButton>
                    </Link>
                    <Link href="/contact">
                        <IconButton>
                            <WhatsApp />
                        </IconButton>
                    </Link>
                </div>
            </Grid>
        </Grid>
    )
}

export default Contact
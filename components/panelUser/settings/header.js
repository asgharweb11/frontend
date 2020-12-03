import {
    Typography
} from "@material-ui/core"
// Icons
import {
    Storefront
} from '@material-ui/icons';
// Styles
import style from "../../../styles/panelUser/settings.module.scss"

const Header = () => {
    return (
        <div className={style.header}>
            <Storefront />
            <Typography variant="subtitle1" component="h1">تنظیمات فروشگاه</Typography>
        </div>
    )
}


export default Header;
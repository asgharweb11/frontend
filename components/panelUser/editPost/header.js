import {
    Grid , Typography , IconButton
} from "@material-ui/core"
// Icons 
import {
    MoreVert
} from "@material-ui/icons"
// Styles 
import style from "../../../styles/panelUser/editPost.module.scss"

const Header = () => {
    return (
        <div className={style.editPostHeader}>
            <IconButton>
                <MoreVert />
            </IconButton>
            <Typography variant="subtitle1" component="h1">ویرایش محصول</Typography>
        </div>
    )
}

export default Header;
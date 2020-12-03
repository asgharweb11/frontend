import {
    Grid,
    Breadcrumbs,
    Link,
    Typography
} from "@material-ui/core"

import style from "../../../styles/main/section.module.css"

const BreadCrumbs = () => {

    const handleClick = (e) => {
        //e.preventDefault();
    }

    return (
        <Grid className={style.bread_main} container justify="center" alignItems="center">
            <Grid item xs={12}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/" onClick={handleClick}>
                        Material-UI
                    </Link>
                    <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                        Core
                    </Link>
                    <Typography color="secondary">Breadcrumb</Typography>
                </Breadcrumbs>
            </Grid>
        </Grid>
            
    )
}

export default BreadCrumbs;
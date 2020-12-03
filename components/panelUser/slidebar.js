import Link from "next/link"
import { useDispatch } from "react-redux"
import {
    List , ListItem , ListItemIcon , ListItemText , Typography
} from "@material-ui/core"
import { TreeView , TreeItem } from "@material-ui/lab"
import {
    makeStyles
} from "@material-ui/core/styles"
// Icons
import {
    Dashboard,
    Shop,
    MonetizationOn,
    ShoppingCart,
    Message,
    Storefront,
    AccountBox,
    ExpandMore,
    ExpandLess,
    PostAdd,
    ShopTwo,
    Settings,
    AssignmentLate,
    CreditCard
} from '@material-ui/icons';
// components 
import { DetailAction } from "../../store/actions/detailAction"
import { Logout } from "../../store/actions/auth"
import {
    color, colorBlue
} from "./styles/styles"
// Style
import style from "../../styles/panelUser/slider.module.scss"

const useStyles = makeStyles({
    icons : {
        color : color
    },
    sliderTreeView : {
        
    },
    sliderTreeItem : {
        color : "red"
    },
    sliderTreeItemLine2 : {
        color : "black"
    }
})

const useTreeItemStyles = makeStyles({
    labelRoot : {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        padding : 10,
        alignItems : "center"
    },
    labelIcon : {
        color : "#e9e9ea",
        transition : "0.5s",
        "&:hover" : {
            color : colorBlue
        }
    },
    labelText : {
        marginLeft : 35
    },
    root : {
        
    },
    label : {
        background : "none !important",
    },
    content : {
        flexDirection: "row-reverse",
        transition : "0.5s",
        "&:hover" : {
            color : `${colorBlue}`
        },
    }
})

function StyledTreeItem(props) {
    const classes = useTreeItemStyles();
    const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;
  
    return (
      <TreeItem
        label={
          <div className={`${classes.labelRoot} ${style.labelRoot}`}>
            <LabelIcon color="inherit" className={`${classes.labelIcon} ${style.labelIcon}`} />
            <Typography variant="body2" className={classes.labelText}>
              {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
          </div>
        }
        style={{
          '--tree-view-color': color,
          '--tree-view-bg-color': bgColor,
        }}
        classes={{
          root: classes.root,
          content: classes.content,
          expanded: classes.expanded,
          selected: classes.selected,
          group: classes.group,
          label: classes.label,
        }}
        {...other}
      />
    );
  }




const Slidebar = () => {
    const dispatch = useDispatch();
    const classes = useStyles()
    return (
        <div className={style.slider_main}>
            <div className={`${style.slider_box} ${style.slider_logo}`}>
                <Link href="/">
                    <img onClick={() => {dispatch(DetailAction(true))}} src="/background/logo.png" alt="داشبورد" />
                </Link>
            </div>
            <div className={`${style.slider_box} ${style.slider_dashboard}`}>
                <TreeView
                    defaultExpanded={['3']}
                    className={classes.sliderTreeView}
                    defaultCollapseIcon={<ExpandLess />}
                    defaultExpandIcon={<ExpandMore />}
                >
                    <Link href="/dashboard">
                        <StyledTreeItem onClick={() => {dispatch(DetailAction(true))}} nodeId="1" labelText="داشبورد" labelIcon={Dashboard} />
                    </Link>
                </TreeView>
            </div>
            <div className={`${style.slider_box} ${style.service}`}>
                <TreeView
                    defaultExpanded={['3']}
                    className={classes.sliderTreeView}
                    defaultCollapseIcon={<ExpandLess />}
                    defaultExpandIcon={<ExpandMore />}
                >
                    
                    <StyledTreeItem nodeId="1" labelText="محصول" labelIcon={Shop} >
                        <Link href="/dashboard/addPost">
                            <StyledTreeItem onClick={() => {dispatch(DetailAction(true))}} nodeId="2" labelText="افزودن محصول" labelIcon={PostAdd} />
                        </Link>
                        <Link href="/dashboard/posts">
                            <StyledTreeItem onClick={() => {dispatch(DetailAction(true))}} nodeId="3" labelText="همه محصولات" labelIcon={ShopTwo} />
                        </Link>
                    </StyledTreeItem>
                    
                    <Link href="/dashboard/sells">
                        <StyledTreeItem nodeId="2" onClick={() => {dispatch(DetailAction(true))}} labelText="فروش ها" labelIcon={MonetizationOn} />
                    </Link>
                    <Link href="/dashboard/buys">
                        <StyledTreeItem nodeId="3" onClick={() => {dispatch(DetailAction(true))}} labelText="خرید ها" labelIcon={ShoppingCart} />
                    </Link>
                    <Link href="/dashboard/deposits">
                        <StyledTreeItem nodeId="4" onClick={() => {dispatch(DetailAction(true))}} labelText="واریزی ها" labelIcon={ShoppingCart} />
                    </Link>
                    <Link href="/dashboard/comments">
                        <StyledTreeItem nodeId="5" onClick={() => {dispatch(DetailAction(true))}} labelText="کامنت ها" labelIcon={Message} />
                    </Link>
                </TreeView>
            </div>

            <div className={`${style.slider_box} ${style.account}`}>
                <TreeView
                    defaultExpanded={['3']}
                    className={classes.sliderTreeView}
                    defaultCollapseIcon={<ExpandLess />}
                    defaultExpandIcon={<ExpandMore />}
                >
                    
                    <StyledTreeItem nodeId="1" labelText="تنظیمات" labelIcon={Settings} >
                        <Link href="/dashboard/settings">
                            <StyledTreeItem onClick={() => {dispatch(DetailAction(true))}} nodeId="1" labelText="تنظیمات فروشگاه" labelIcon={Storefront} />
                        </Link>
                        <Link href="/dashboard/status">
                            <StyledTreeItem onClick={() => {dispatch(DetailAction(true))}} nodeId="2" labelText="وضعیت فروشگاه" labelIcon={AssignmentLate} />
                        </Link>
                        <Link href="/dashboard/payment">
                            <StyledTreeItem onClick={() => {dispatch(DetailAction(true))}} nodeId="3" labelText="درگاه واریزی" labelIcon={CreditCard} />
                        </Link>
                        <Link href="/dashboard/account">
                            <StyledTreeItem onClick={() => {dispatch(DetailAction(true))}} nodeId="4" labelText="حساب" labelIcon={AccountBox} />
                        </Link>
                    </StyledTreeItem>
                    
                </TreeView>
            </div>
            <div className={`${style.slider_box} ${style.logout}`}>
                <TreeView
                    defaultExpanded={['3']}
                    className={classes.sliderTreeView}
                    defaultCollapseIcon={<ExpandLess />}
                    defaultExpandIcon={<ExpandMore />}
                >
                    <StyledTreeItem onClick={() => {dispatch( Logout() )}} nodeId="1" labelText="خروج" labelIcon={AccountBox} />
                </TreeView>
            </div>
        </div>
    )
}

export default Slidebar
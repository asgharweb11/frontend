import React , { useState , useRef } from "react"
import { useSelector , useDispatch } from "react-redux"
import { useRouter } from "next/router"
import fetch from "isomorphic-fetch"
import { API } from "../../../../config"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from "@material-ui/core/Menu"
// ------------------- Actions -----------------------
import { SetMessage } from "../../../../store/actions/detailAction"


const BtnSave = ({detail , handleErr , handleReq}) => {

    const { email } = useSelector(state => state.Auth)
    const Router = useRouter()
    const dispatch = useDispatch()

    const options = [
        'انتشار', 
        'پیش نویس', 
        'پیش نمایش'
    ];

    // -------------
    const [anchorEl, setAnchorEl] = useState(null);
    const [index , setIndex] = useState(0)
    // ---------------
    const {req , setReq} = useState({
        msg : '',
        status : '',
        color : 'error'
    })
    const [active , setActive] = useState(false)
    // ---------------------------------

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setAnchorEl(null);
        setState({ ...state, open: false });
    };

    const handleSelect = (index) => e => {
        setIndex(index)
        setAnchorEl(null);
    }


      
    //-----------------------------------------------------------------------------


    const handleSubmit = (btn) => async (e) => {
        if(detail.rules === false){
            handleReq("چنانچه با قوانین موافقید ، روی تیکت کلیک نمایید !!" , false , "error");
        } else if(detail.file === undefined){
            handleReq("لطفا برگردید و فرم آپلود فایل اطلاعات اکانت خود را بررسی کنید " , false , "error")
        } else {

            setActive(true)
            handleReq("" , true , "error");

            const formData = new FormData()
            formData.append("email" , email)
            formData.append("title" , detail.title)
            formData.append("descript" , detail.descript)
            formData.append("category" , detail.category)
            formData.append("price" , detail.price)
            formData.append("number" , detail.number)
            console.log('number : ' , detail.number)
            for(let tag of detail.tags){
                formData.append("tags" , tag.value)
            }
            formData.append("submit" , btn)
            //--------- files
            for(let i of detail.photos){
                formData.append("photos" , i.photo)
            }
            formData.append("file" , detail.file)

            const res = await fetch(`${API}/api/post/insert` , {
                method : "POST",
                body : formData
            })

            const data = await res.json()
            console.log("data : " , data)
            if(data.status === true){
                handleReq(data.msg , false , "success")
                dispatch(SetMessage({msg : data.msg , color : 'default' , bg : 'success'}))
                Router.push('/dashboard/posts')
            } else {
                handleReq(data.msg , false , "error")
                setActive(false)
            }

        }
    }

    return (
        <React.Fragment>
            <ButtonGroup variant="contained" color="primary" aria-label="split button">
                <Button
                    color="primary"
                    size="small"
                    aria-haspopup="true"
                    onClick={handleClick}
                    disabled={active}
                >
                    <ArrowDropDownIcon />
                </Button>
                <Button onClick={handleSubmit(options[index])} disabled={active}>{options[index]}</Button>
            </ButtonGroup>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                    {
                        options.map((item , index) => {
                            return (<MenuItem onClick={handleSelect(index)}>{item}</MenuItem>)
                        })
                    }
            </Menu>
        </React.Fragment>



    )
}

export default BtnSave;
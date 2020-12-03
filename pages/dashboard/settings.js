import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { DetailAction } from "../../store/actions/detailAction"
import Layout from "../../components/layoutPanel"
import SettingShop from "../../components/panelUser/settings"

const Settings = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailAction(false))
    } , [])
    return (
        <Layout>
            <SettingShop />
        </Layout>
    )
}

export default Settings;
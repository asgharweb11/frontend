import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { DetailAction } from "../store/actions/detailAction"
import Head from 'next/head'
import {
  Grid
} from "@material-ui/core"
// components
import Layout from "../components/layout";
import Slidebar from "../components/main/section/slidebar"
import Bread from "../components/main/section/breadcrumbs"
import PShops from "../components/main/section/shops"
import NavCategori from "../components/main/section/navCategori"
// styles
import styles from '../styles/Home.module.css'


export default function Shops() {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailAction(false))
    } , [])
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Section Layout */}
        <div className={styles.section_main}>
          <Grid container direction="row" justify="center" spacing={3}>
            {/* Categori Btn Fixed */}
            <NavCategori />
            <Grid className={styles.section_slidbar} item lg={3} md={4} xs={3}>
              {/* Categori Nav Slidebar */}
              <Slidebar />
            </Grid>
            <Grid item lg={9} md={8} xs={12}>
              {/* breadcrumbs */}
              <Bread />
              {/* Just Posts */}
              <PShops />
            </Grid>
          </Grid>
        </div>
      </div>
    </Layout>
    
  )
}

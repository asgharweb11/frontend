import { useEffect , useState } from "react"
import { useDispatch , useSelector } from "react-redux"
import { DetailAction } from "../store/actions/detailAction"
import Head from 'next/head'
import {
  Grid
} from "@material-ui/core"
import Pagination from '@material-ui/lab/Pagination';
import {makeStyles} from "@material-ui/core/styles"
// components
import Layout from "../components/layout";
import Slidebar from "../components/main/section/slidebar"
import Bread from "../components/main/section/breadcrumbs"
import Posts from "../components/main/section/home/posts"
import NavCategori from "../components/main/section/navCategori"
// styles
import styles from '../styles/Home.module.css'
// ------------------------- Request --------------------------
import { posts } from "./requests/post"

const useStyles = makeStyles({
  Pagination : {
    '& button' : {
      boxShadow: '1px 2px 1px #e6e6e6',
      background: 'white'
    }
  }
})


export default function Home({products}) {

  const dispatch = useDispatch();
  const classes = useStyles()
  const [data , setData] = useState(products)
  const [page , setPage] = useState(1)
  const [limit , setLimit] = useState(products.limit)


  useEffect(() => {
      dispatch(DetailAction(false))
  } , [])


  const handlePage = async (event , value) => {
    if(page !== value){
      const res = await posts(value);
      setData(res)
      setLimit(res.limit)
      setPage(value)
    }
  }

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
              <Posts products={data}/>
              <div className={styles.section_pagination}>
                <Pagination onChange={handlePage} page={page} className={classes.Pagination} count={limit} shape="rounded" color="primary"/>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Layout>
    
  )
}


export async function getStaticProps(){

  const products = await posts(1);
  return {
    props : {
      products
    }
  }
}

import { useEffect , useState } from "react"
import fetch from 'isomorphic-fetch'
import {API} from '../../../config'
import { lastWeek } from "../../../methods/date"
import {
    Typography,
    Card,
    CardActionArea
} from "@material-ui/core"
import { makeStyles , withStyles } from "@material-ui/core/styles"
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Legend,
  Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import { Animation , Stack , EventTracker , HoverState} from '@devexpress/dx-react-chart';
// Components 
import { boxShadow } from "../styles/styles"
// Styles 
import style from "../../../styles/panelUser/dashboard.module.scss"
import {
    colorBlue
} from "../styles/styles"

const useStyles = makeStyles({
    cardArea : {
        padding : 15,
        background: "white",
        boxShadow,
        borderRadius: 10,
        overflow : 'hidden'
    }
})




const ChartComp = () => {

    const classes = useStyles()
    const detail = [
      { year: '1950', population: 500000 },
      { year: '1960', population: 15000000 },
      { year: '1970', population: 10000000 },
      { year: '1980', population: 200000 },
      { year: '1950', population: 2000000 },
      { year: '1990', population: 850000 },
      { year: '2000', population: 100000 },
      { year: '2010', population: 80000 },
    ];

    let dataChart = [
      {day : 'شنبه' , population : 0 , index : 0},
      {day : 'یکشنبه' , population : 0 , index : 1},
      {day : 'دوشنبه' , population : 0 , index : 2},
      {day : 'سه شنبه' , population : 0 , index : 3} ,
      {day : 'چهار شنبه' , population : 0 , index : 4},
      {day : 'پنج شنبه' , population : 0 , index : 5},
      {day : 'جمعه' , population : 0 , index : 6},
    ]

    const [data , setData] = useState()
    // const [pay , setPay] = useState()
    const [targetItem , setTargetItem] = useState(undefined)
    let setDataChart = [];
    useEffect(() => {
      getPostsWeek().then(details => {

        if(details.status !== false){

          dataChart.map((data , index) => {
        
            let population = 0;
            for(let detail of details){
              let d = new Date(detail.date)
              let day = lastWeek(d.getDay());
              if(day === data.day){
                for(let post of detail.posts){
                  population += parseInt(post.price)
                }
              }
            }

            setDataChart.push({day : data.day , population , index : data.index})
          })

          setData(setDataChart.sort((a , b) => b.index - a.index))
        } 

      })

    },[])

    const getPostsWeek = async () => {
      const res = await fetch(`${API}/panel/api/sells/week/kifekar1` , {
        method : 'GET',
        headers : {
          'Content-Type' : 'application/json'
        }
      })
      return await res.json()
    }

    const changeTargetItem = targetItem => {
      setTargetItem(targetItem)
    }

    return (
        <div className={style.chart_Card}>
          {
            data && (
              <CardActionArea className={classes.cardArea}>
                <div className={style.chart_title}>
                    <Typography variant="body1" component="h6">
                        فروش های این هفته
                    </Typography>
                </div>
                <div>
                    <Chart
                      data={data}
                    >
                      <ArgumentAxis />
                      <ValueAxis max={5} />

                      <BarSeries
                        valueField="population"
                        argumentField="day"
                      />

                      <EventTracker />
                      <HoverState />

                      <Tooltip targetItem={targetItem} onTargetItemChange={changeTargetItem}/>

                      <Animation />
                    </Chart>
                </div>
                
            </CardActionArea>
            )
          }
        </div>
    )
}

export default ChartComp;
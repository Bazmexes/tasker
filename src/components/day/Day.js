import React from 'react'
import './day.scss'
import WrapTasker from '../wrapTasker/WrapTasker'
import {connect} from 'react-redux'
import FormAtColumn from '../FormAtColumn/FormAtColumn'
import {useDispatch} from 'react-redux'
function Day(props){
    // console.log("props of day", props)
    // let dayForRender = document.getElementById(props.tasks.dateTask)
    // console.log("daysForRender", dayForRender)
    // if(dayForRender===null){
    //     console.log("dsadsad",props.tasks.dateTask)
    //     const dateSplit = props.tasks.dateTask.split(".")
    //     const stringDate = dateSplit.join('-')
    //     const dayFull = new Date(stringDate)
    //     const dayOfWeekNumber = dayFull.getDay()
    //     const getWeekDay = (date )=> {
    //         let days = [ 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ','ВС'];
            
    //         return days = days[date]
            
    //       }
    //       const dayOfWeekString = getWeekDay(dayOfWeekNumber)

        return(
            <div className="day" id={props.fullDate}>
                <div className="day__header"  >
                    <p>{props.fullDate}</p>

                </div>
                <WrapTasker tasks={props.tasks} fullDate={props.fullDate}/>
                <FormAtColumn dayId={props.fullDate}/>
            </div>
        )
     }
        
  
    




export default connect(null, null)(Day) 
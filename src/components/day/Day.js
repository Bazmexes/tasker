import React from 'react'
import './day.scss'
import Task from '../task/Task'
import WrapTasker from '../wrapTasker/WrapTasker'

export default (props)=>{
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
            <div className="day" id={props.tasks.dateTask}>
                <div className="day__header" >
                    <p></p>
                    <h3>{props.tasks.dateTask}</h3>
                </div>
                <WrapTasker countOfTasks={props.tasks}/>
            </div>
        )
    // }else{
    //     return null
    // }
    
}
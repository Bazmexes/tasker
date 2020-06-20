import React from 'react'
import Task from '../task/Task'


export default function(props){
    console.log("props of wraper ", props)
    return(
        props.countOfTasks.map((task, index) =>{
            return(
                <Task key={index}nameOfTask={task.nameTask} startAt={task.startAt} id={index}/>
            )
        })
    )
    
}

